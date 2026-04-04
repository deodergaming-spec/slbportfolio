import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import express from "express";
import { sendEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static images from attached_assets
  app.use('/assets', express.static(path.resolve('attached_assets')));

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const fromEmail = process.env.SENDGRID_FROM;
      if (!fromEmail) {
        console.error('SENDGRID_FROM environment variable is not set');
      }

      // Send email notification
      const emailSent = fromEmail ? await sendEmail({
        to: "Zentionxttv@gmail.com",
        from: fromEmail,
        replyTo: validatedData.email,
        subject: `New Contact Form Message: ${validatedData.subject}`,
        text: `
Name: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Subject: ${validatedData.subject}
Message: ${validatedData.message}
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      }) : false;
      
      // Store in database regardless of email success
      const contact = await storage.createContact(validatedData);
      
      res.json({ 
        success: true, 
        contact,
        emailSent: emailSent
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
