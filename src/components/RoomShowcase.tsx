import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Target, X } from "lucide-react";

import r1i1 from "@/assets/Room1/DSC_3805.jpg";
import r1i2 from "@/assets/Room1/DSC_3808.jpg";
import r1i3 from "@/assets/Room1/DSC_3811.jpg";
import r1i4 from "@/assets/Room1/DSC_3820.jpg";
import r1i5 from "@/assets/Room1/DSC_3832.jpg";

import r2i1 from "@/assets/Room2/DSC_3847.jpg";
import r2i2 from "@/assets/Room2/DSC_3850.jpg";
import r2i3 from "@/assets/Room2/DSC_3851.jpg";

import r3i1 from "@/assets/Room3/DSC_3889.jpg";
import r3i2 from "@/assets/Room3/DSC_3892.jpg";
import r3i3 from "@/assets/Room3/DSC_3895.jpg";

import r4i1 from "@/assets/Room4/DSC_3901.jpg";
import r4i2 from "@/assets/Room4/DSC_3907.jpg";
import r4i3 from "@/assets/Room4/DSC_3913.jpg";

import r5i1 from "@/assets/Room5/DSC_3925.jpg";
import r5i2 from "@/assets/Room5/DSC_3931.jpg";
import r5i3 from "@/assets/Room5/DSC_3937.jpg";
import r5i4 from "@/assets/Room5/DSC_3940.jpg";

import r6i1 from "@/assets/Room6/DSC_3943.jpg";
import r6i2 from "@/assets/Room6/DSC_3952.jpg";
import r6i3 from "@/assets/Room6/DSC_3955.jpg";
import r6i4 from "@/assets/Room6/DSC_3958.jpg";
import r6i5 from "@/assets/Room6/DSC_4024.jpg";

import r7i1 from "@/assets/Room7/DSC_3961.jpg";
import r7i2 from "@/assets/Room7/DSC_3964.jpg";
import r7i3 from "@/assets/Room7/DSC_3970.jpg";
import r7i4 from "@/assets/Room7/DSC_4029.jpg";

import r8i1 from "@/assets/Room8/DSC_3985.jpg";
import r8i2 from "@/assets/Room8/DSC_3997.jpg";
import r8i3 from "@/assets/Room8/DSC_4003.jpg";
import r8i4 from "@/assets/Room8/DSC_4006.jpg";
import r8i5 from "@/assets/Room8/DSC_4017.jpg";

interface Room {
  id: number;
  title: string;
  description: string;
  images: string[];
  amenities: string[];
  price: string;
  size: string;
  guests: string;
  featured: boolean;
}

const rooms: Room[] = [
  {
    id: 1,
    title: "OKATI",
    description: "",
    images: [r1i3, r1i4, r1i5, r1i2, r1i1],
    amenities: [
      "City View",
      "Outdoor Patio",
      "Queen Bed",
      "Twin Bed",
      "Safe",
      "Air Conditioning",
      "WiFi",
    ],
    price: "€260",
    size: "27.5m²",
    guests: "3",
    featured: true,
  },
  {
    id: 2,
    title: "RENDU",
    description: "",
    images: [r2i3, r2i2, r2i1],
    amenities: [
      "Outdoor Patio",
      "City View",
      "Queen Bed",
      "Air Conditioning",
      "Safe",
      "WiFi",
    ],
    price: "€230",
    size: "20m²",
    guests: "2",
    featured: false,
  },
  {
    id: 3,
    title: "MUDU",
    description: "",
    images: [r3i3, r3i2, r3i1],
    amenities: [
      "Patio",
      "City View",
      "Queen Bed",
      "Air Conditioning",
      "Safe",
      "WIFi",
    ],
    price: "€230",
    size: "17m²",
    guests: "2",
    featured: true,
  },
  {
    id: 4,
    title: "NALUGU",
    description: "",
    images: [r4i3, r4i2, r4i1],
    amenities: [
      "City View",
      "Patio",
      "Queen Bed",
      "Safe",
      "Air Conditioning",
      "Mini Bar",
      "WiFi",
    ],
    price: "€230",
    size: "16.5m²",
    guests: "2",
    featured: false,
  },
  {
    id: 5,
    title: "IEDU",
    description: "",
    images: [r5i3, r5i4, r5i2, r5i1],
    amenities: [
      "Mountain View",
      "Queen Bed",
      "Twin Bed",
      "Safe",
      "Air Conditioning",
      "WIFI",
    ],
    price: "€250",
    size: "20m²",
    guests: "3",
    featured: true,
  },
  {
    id: 6,
    title: "ARU",
    description: "",
    images: [r6i2, r6i4, r6i3, r6i5, r6i1],
    amenities: [
      "Mountain View",
      "Outdoor Balcony",
      "Twin Bed",
      "Queen Bed",
      "Air Conditioning",
      "Safe",
      "WiFi",
    ],
    price: "€250",
    size: "19m²",
    guests: "3",
    featured: false,
  },
  {
    id: 7,
    title: "YEDU",
    description: "",
    images: [r7i2, r7i3, r7i4, r7i1],
    amenities: [
      "Queen Bed",
      "Mountain View",
      "Outdoor Balcony",
      "Air Conditioning",
      "Safe",
      "WIFI",
    ],
    price: "€230",
    size: "15m²",
    guests: "2",
    featured: true,
  },
  {
    id: 8,
    title: "ENAMIDI",
    description: "",
    images: [r8i3, r8i4, r8i5, r8i2, r8i1],
    amenities: [
      "Safe",
      "Mountain View",
      "Private Balcony",
      "Air Conditioning",
      "Queen Bed",
      "Twin Bed",
      "WiFi",
    ],
    price: "€250",
    size: "23.5m²",
    guests: "3",
    featured: false,
  },
];

export const RoomShowcase = () => {
  const [openRoom, setOpenRoom] = useState<Room | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    cardsRef.current.forEach((card, i) => {
      if (card) {
        card.style.animationDelay = `${i * 0.2}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <>
      <section
        id="rooms"
        ref={sectionRef}
        className="py-32 bg-background dark:bg-background"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Discover Paradise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our collection of unique rooms and suites, each
              thoughtfully designed to provide the perfect Paros experience with
              unparalleled luxury and comfort.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                addToRefs={addToRefs}
                onViewDetails={() => setOpenRoom(room)}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <div className="inline-flex flex-col items-center space-y-6 p-12 bg-card/30 dark:bg-card/50 backdrop-blur-xl rounded-3xl border border-border/50">
              <h3 className="text-2xl font-playfair font-semibold text-primary">
                Ready to Experience Paradise?
              </h3>
              <p className="text-muted-foreground max-w-md">
                Book your perfect room today and discover the magic of Paros
                luxury hospitality.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-12 py-4 text-lg shadow-2xl hover:shadow-accent/30 transition-all duration-300"
                onClick={() => {
                  window.location.href =
                    "https://ammoudiparos.reserve-online.net/";
                }}
              >
                Book Your Perfect Room
              </Button>
            </div>
          </div>
        </div>
      </section>

      {openRoom && (
        <Dialog open={!!openRoom} onOpenChange={(v) => !v && setOpenRoom(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-2xl shadow-2xl bg-background">
            <DialogHeader className="flex items-center justify-between px-6 pt-6 pb-0">
              <DialogTitle className="text-2xl font-playfair text-primary">
                {openRoom.title}
              </DialogTitle>
              <DialogClose asChild></DialogClose>
            </DialogHeader>
            <div className="p-6 pt-0">
              <div className="mb-6">
                {/* Increased height from h-72 to h-96 */}
                <Carousel className="w-full h-124" loop>
                  <CarouselContent>
                    {openRoom.images.map((img, idx) => (
                      <CarouselItem key={idx} value={idx}>
                        <img
                          src={img}
                          alt={`${openRoom.title} – slide ${idx + 1}`}
                          className="w-full h-124 object-cover rounded-xl"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border border-white/30 text-white rounded-full p-2 z-20"
                    aria-label="Previous image"
                  >
                    <ChevronLeft />
                  </CarouselPrevious>
                  <CarouselNext
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border border-white/30 text-white rounded-full p-2 z-20"
                    aria-label="Next image"
                  >
                    <ChevronRight />
                  </CarouselNext>
                </Carousel>
              </div>
              <div className="mb-4">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {openRoom.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                {openRoom.featured && (
                  <Badge className="bg-accent text-white px-3 py-1 shadow-lg">
                    Featured
                  </Badge>
                )}
                <Badge className="bg-black/70 text-white px-3 py-1 backdrop-blur-sm">
                  {openRoom.price}/night
                </Badge>
                <Badge className="bg-black/70 text-white px-3 py-1 backdrop-blur-sm">
                  {openRoom.size} • {openRoom.guests} guests
                </Badge>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                  Amenities
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {openRoom.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

function RoomCard({
  room,
  addToRefs,
  onViewDetails,
}: {
  room: Room;
  addToRefs: (el: HTMLDivElement | null) => void;
  onViewDetails: () => void;
}) {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  return (
    <Card
      ref={addToRefs}
      className="group transform transition-transform duration-300 opacity-0 cursor-pointer bg-card/50 dark:bg-card/80 backdrop-blur-xl border border-border/50 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
    >
      <CardContent className="p-0">
        <div className="relative h-80 lg:h-96 overflow-hidden">
          <Carousel
            className="w-full h-full"
            loop
            value={slideIndex}
            onValueChange={setSlideIndex}
          >
            <CarouselContent>
              {room.images.map((img, idx) => (
                <CarouselItem key={idx} value={idx}>
                  <img
                    src={img}
                    alt={`${room.title} – slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border border-white/30 text-white rounded-full p-2 z-20"
              aria-label="Previous image"
            >
              <ChevronLeft />
            </CarouselPrevious>
            <CarouselNext
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border border-white/30 text-white rounded-full p-2 z-20"
              aria-label="Next image"
            >
              <ChevronRight />
            </CarouselNext>
          </Carousel>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
            {room.featured && (
              <Badge className="bg-accent text-white px-3 py-1 shadow-lg">
                Featured
              </Badge>
            )}
            <Badge className="bg-black/70 text-white px-3 py-1 backdrop-blur-sm">
              {room.price}/night
            </Badge>
          </div>

          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
            <div className="flex gap-4 text-white">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                <div className="font-semibold">{room.size}</div>
                <div className="opacity-80">Size</div>
              </div>
              <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                <div className="font-semibold">{room.guests}</div>
                <div className="opacity-80">Guests</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-primary mb-4">
            {room.title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            {room.description}
          </p>
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
              Amenities
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              {room.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={onViewDetails}
            >
              View Details
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300"
              onClick={() =>
                (window.location.href =
                  "https://ammoudiparos.reserve-online.net/")
              }
            >
              Check Availability
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
