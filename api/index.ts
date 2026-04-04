import express from "express";
import { z } from "zod";
import { storage } from "../server/storage";
import { insertContactSchema } from "../shared/schema";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(validatedData);
    res.json({ success: true, contact, emailSent: false });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, errors: error.errors });
    } else {
      console.error("Contact form error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
});

app.get("/api/contacts", async (_req, res) => {
  try {
    const contacts = await storage.getContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default app;
