import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Quote,
  Award,
  Heart,
  MapPin,
  Users,
  Star,
  Calendar,
  Trophy,
} from "lucide-react";
import aboutBackground from "@/assets/about-background.jpg";

const counters = [
  { label: "Years of Excellence", value: 5, suffix: "+", icon: Award },
  { label: "Guest Satisfaction", value: 98, suffix: "%", icon: Heart },
  { label: "Heart of Paros", value: 50, suffix: "m", icon: MapPin },
  { label: "Perfect Days", value: 320, suffix: "", icon: Star },
];

const testimonials = [
  {
    text: "Totally recommended!! 10/10. We had the best stay! Lovely staff, perfect communication & close to the center of Parikia",
    author: "Céline S.",
    location: "Germany",
    rating: 5,
  },
  {
    text: "Amazing location. Walking distance to the port, restaurants and shops. Nice comfortable room.",
    author: "Karen Visbal",
    location: "United States",
    rating: 5,
  },
  {
    text: "New stylish accomodation in central area. Close to everything (including parking facilities!) great hosts.",
    author: "Elyse Robêrt",
    location: "New Zealand",
    rating: 5,
  },
];

const features = [
  {
    icon: Calendar,
    title: "Authentic Experience",
    description:
      "Immerse yourself in genuine Greek culture with locally-sourced amenities and traditional hospitality.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "Our dedicated team ensures every guest receives tailored attention and memorable experiences.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Ideally located just a 5-minute walk from the heart of Paros, offering the ultimate island experience.",
  },
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCounters, setAnimatedCounters] = useState(
    counters.map(() => ({ current: 0, hasAnimated: false }))
  );

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    counters.forEach((counter, index) => {
      if (animatedCounters[index].hasAnimated) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = counter.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= counter.value) {
          current = counter.value;
          clearInterval(timer);
        }

        setAnimatedCounters((prev) =>
          prev.map((item, i) =>
            i === index
              ? {
                  current: Math.floor(current),
                  hasAnimated: current >= counter.value,
                }
              : item
          )
        );
      }, duration / steps);
    });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background with Enhanced Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBackground}
          alt="Paros Hotel Background"
          className="w-full h-full object-cover transform scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/85"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2">
            Our Legacy
          </Badge>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            A Story of Passion & Paradise in Paros
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            For 5+ years, we've been crafting extraordinary experiences in the
            heart of Paros, where Greek hospitality meets modern luxury in
            perfect harmony.
          </p>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <Quote className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-3xl font-playfair font-bold text-white mb-6">
                "Every guest is family, every stay a story"
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-white/90">
                <p>
                  Founded by the Reddy family in 2016, our boutique hotel sprang
                  from a dream to share the timeless spirit of Paros with the
                  world. What began as a simple vision has blossomed into a
                  tranquil retreat where contemporary comforts marry the
                  island’s classic Cycladic elegance
                </p>
                <p>
                  Perched above the secluded cove of Floga in Parikia, each room
                  is a tribute to local craftsmanship and mindful design.
                  Sun‑bleached stone walls and hand‑woven textiles mingle with
                  bespoke furnishings by Parian artisans, while glimpses of the
                  cerulean Aegean peek through arched doorways and shuttered
                  windows.
                </p>
                <p>
                  Today, our heritage lives on in every sustainably sourced
                  detail-from handcrafted touches to locally inspired design-and
                  in every moment crafted for our guests. More than a place to
                  stay, we're your Paro gateway to the sun-drenched lanes,
                  hidden tavernas, and warm hospitality that define the soul of
                  Paros.
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-white/20">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">The Reddy Family</p>
                  <p className="text-white/70 text-sm">Founders & Hosts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {counters.map((counter, index) => {
              const IconComponent = counter.icon;
              return (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                    isVisible ? "animate-scale-in opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center text-white">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-4xl font-playfair font-bold mb-2 text-white">
                      {animatedCounters[index].current}
                      {counter.suffix}
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      {counter.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Guest Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-white text-center mb-12">
            What Our Guests Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-6 text-white">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-white/90 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-white/70">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-accent fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-playfair font-bold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-white mb-6">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of guests who have discovered their own piece of
              paradise with us.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-12 py-4 text-lg shadow-2xl hover:shadow-accent/30 transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
