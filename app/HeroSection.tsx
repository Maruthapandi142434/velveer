"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSlide {
  id: number;
  image: string;
  serviceTitle: string;
  description: string; // Added description
  bgColor: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754304183/2150377138_lpqly3.jpg",
    serviceTitle: "IT Governance and Strategy",
    description: "IT Governance and Strategy ensure that IT investments deliver value to the organization, effective risk management and compliance with regulations",
    bgColor: "bg-gradient-to-r from-orange-500/90 to-orange-600/90",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754301989/118032_iyf9s6.jpg",
    serviceTitle: "GRC- Governance, Risk and Compliance",
    description: "Protecting your digital journey Stay secure from cyber threats, safe from legal complexities and managing operational challenges",
    bgColor: "bg-gradient-to-r from-purple-600/90 to-purple-700/90",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754304494/105390_reqpcr.jpg",
    serviceTitle: "Automotive Security",
    description: "Automotive Cybersecurity is the protection of ECUs, Communication Networks, Software and Data from malicious attacks, damage, unauthorized access, or manipulation.",
    bgColor: "bg-gradient-to-r from-yellow-500/90 to-yellow-600/90",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754304605/125636_jqdcxa.jpg",
    serviceTitle: "Cyber Security Assessment",
    description: "While you cannot prevent a security attack or an event, you can always protect or manage the extent of the impact caused by regular assessment",
    bgColor: "bg-gradient-to-r from-orange-700/90 to-orange-800/90",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754302203/2151908096_kupthy.jpg",
    serviceTitle: "AI Consulting",
    description: "AI is transforming businesses in an unimaginable magnitude and organizations must be prepared to adopt proactively to enhance productivity and innovation. We help to unlock the power of AI.",
    bgColor: "bg-gradient-to-r from-green-500/90 to-green-600/90",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754302462/2150103578_frtc5r.jpg",
    serviceTitle: "ERP Advisory",
    description: "Selecting suitable Enterprise Resource Planning (ERP) solution is a haunting exercise for many of the companies due to inadequate internal expertise. We assist the clients in making right choices in the selection of ERP solutions",
    bgColor: "bg-gradient-to-r from-blue-500/90 to-blue-600/90",
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754302801/18026_vhyvde.jpg",
    serviceTitle: "Expert Resource Consulting",
    description: "In the fast-paced business world, fluctuations in workload and project demands are not uncommon. We help with the right experts with the right skills and experience to support the  projects",
    bgColor: "bg-gradient-to-r from-indigo-500/90 to-indigo-600/90",
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754303086/16288_ntqmod.jpg",
    serviceTitle: "Training and Coaching",
    description: "Empowering you to build your business or supercharge your career through our well designed programs as per the business requirements and market demands.",
    bgColor: "bg-gradient-to-r from-pink-500/90 to-pink-600/90",
  },
];

// Simplified Animation Presets (Focus on smooth transitions)
const animationPresets = ["slideIn", "fadeIn"];

interface AnimatedHeroSlideProps {
  slide: HeroSlide;
}

function AnimatedHeroSlide({ slide }: AnimatedHeroSlideProps) {
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },  // Start off-screen left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: 50, // Move off-screen right
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 }, // Start off-screen right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -50, // Move off-screen left
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };


  return (
    <section className="w-full h-[calc(100vh-120px)] flex md:flex-row flex-col overflow-hidden">
      {/* Left side with image and static title */}
      <motion.div
        className="w-full md:w-[calc(50%+110px)] h-64 md:h-full relative flex items-center justify-center order-first md:order-none"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={`image-${slide.id}`}
      >
        <Image
          src={slide.image}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Add a subtle background to the text for better readability */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-center px-4 text-xl md:text-2xl font-semibold z-10">
          <span className=" p-2 rounded">Stay ahead of cyber threats, <br />legal complexities, and operational  <br />challenges with our expert services</span>
        </div>
      </motion.div>

      {/* Right side with the service title and description */}
      <motion.div
        className={`w-full md:w-[calc(50%-110px)] text-white flex flex-col justify-center items-center p-8 ${slide.bgColor} order-last md:order-none`}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={`text-${slide.id}`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          {slide.serviceTitle}
        </h2>
        <p className="text-lg mt-2 text-center">
          {slide.description}
        </p>
      </motion.div>
    </section>
  );
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }


  useEffect(() => {
    if (!isAutoPlaying) return;

    function handleNextSlide() {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }

    resetTimeout();
    timeoutRef.current = setTimeout(() => handleNextSlide(), 5000);

    return () => {
      resetTimeout();
    };
  }, [currentSlide, isAutoPlaying]);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <AnimatedHeroSlide
          key={currentSlide}
          slide={heroSlides[currentSlide]}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform  w-full flex justify-between items-center px-4">
        <Button variant="ghost" size="icon" onClick={prevSlide}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" onClick={nextSlide}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute lg:bottom-[-30px] bottom-28 left-0 right-0 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${currentSlide === index ? "bg-cyan-400" : "bg-gray-300"}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;