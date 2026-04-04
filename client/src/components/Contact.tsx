import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel font-bold text-white mb-4">Let's Work Together!</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Sarah is always looking for new and exciting projects to work on. Get in touch to discuss your idea!
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
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

          <Card className="bg-white bg-opacity-10 rounded-2xl p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-[#000000]">Connect Online</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/sarah-bond-76792317a/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-silver rounded-full flex items-center justify-center text-black hover:bg-silver/80 transition-all duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/sarahlouisebond/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-silver rounded-full flex items-center justify-center text-black hover:bg-silver/80 transition-all duration-200">
                  <Instagram size={20} />
                </a>
                <a href="https://www.youtube.com/@slb0nd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-silver rounded-full flex items-center justify-center text-black hover:bg-silver/80 transition-all duration-200">
                  <Youtube size={20} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
