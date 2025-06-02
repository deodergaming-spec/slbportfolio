import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, BookOpen, Youtube } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! Sarah will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">Let's Work Together!</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Sarah is always looking for new and exciting projects to work on. Get in touch to discuss your idea!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white rounded-2xl p-8 shadow-xl">
            <CardContent className="p-0">
              <h3 className="text-2xl font-playfair font-semibold text-black mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6 contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white text-black"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white text-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white text-black">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="directing">Directing Project</SelectItem>
                      <SelectItem value="playwriting">Playwriting Commission</SelectItem>
                      <SelectItem value="publishing">Publishing Inquiry</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none bg-white text-black placeholder:text-gray-500"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-silver text-black py-3 px-6 rounded-lg font-semibold hover:bg-silver/90 transition-all duration-200 transform hover:scale-105"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white bg-opacity-10 rounded-2xl p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-[#000000]">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-silver text-xl mt-1" size={20} />
                    <div>
                      <div className="font-medium text-[#000000]">Email</div>
                      <div className="text-sm text-[#000000]">sarahlouisebond@outlook.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-silver text-xl mt-1" size={20} />
                    <div>
                      <div className="font-medium text-[#000000]">Location</div>
                      <div className="text-sm text-[#000000]">North East, England</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Media & Professional Links */}
            <Card className="bg-white bg-opacity-10 rounded-2xl p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-[#000000]">Connect Online</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-silver rounded-full flex items-center justify-center text-black hover:bg-silver/80 transition-all duration-200">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-silver rounded-full flex items-center justify-center text-black hover:bg-silver/80 transition-all duration-200">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-silver rounded-full flex items-center justify-center text-black hover:bg-silver/80 transition-all duration-200">
                    <Youtube size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
