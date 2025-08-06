import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, ChevronDown } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors: string[] = [];
    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.email.includes("@")) errors.push("Valid email is required");
    if (!formData.checkin) errors.push("Check-in date is required");
    if (!formData.checkout) errors.push("Check-out date is required");

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      toast({
        title: "Please correct the following errors:",
        description: errors.join(", "),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Booking Request Submitted!",
        description:
          "Thank you for your interest. We'll contact you within 24 hours to confirm your reservation.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkin: "",
        checkout: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-secondary/30 to-background dark:from-secondary/10 dark:to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
            Contact Us
          </h2>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-12">
          {/* Top‑left: Location & Contact Cards */}
          <div className="space-y-4">
            <Card className="shadow-soft hover:shadow-floating transition-all duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Location</h4>
                  <p className="text-muted-foreground">
                    Hotel Ammoudi Parikia,
                    <br />
                    Paros, Greece 84400
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft hover:shadow-floating transition-all duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Contact</h4>
                  <p className="text-muted-foreground">
                    ammoudiparikia@gmail.com
                    <br />
                    +30 6972529189
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column (spanning both rows): Quick Info */}
          <Card className="shadow-soft lg:row-span-2">
            <CardContent className="p-6">
              <h4 className="font-playfair font-semibold text-primary mb-4">
                Quick Information
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Check-in: 11:00 AM</li>
                <li>• Check-out: 02:00 PM</li>
                <li>• Free WiFi throughout property</li>
                <li>• Free Parking</li>
              </ul>
            </CardContent>
          </Card>

          {/* Bottom‑left: Embedded Map */}
          <Card className="shadow-floating">
            <CardContent className="p-0">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4393.083019474995!2d25.1511371!3d37.08337939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149871c6562c1ae1%3A0xc38575f530131d86!2sAmmoudi!5e1!3m2!1sen!2sin!4v1753693411567!5m2!1sen!2sin"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};