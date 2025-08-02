"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSlide {
  id: number;
  image: string;
  serviceTitle: string;
  bgColor: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg",
    serviceTitle: "IT Governance and Strategy",
    bgColor: "bg-gradient-to-r from-orange-500/90 to-orange-600/90",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1753870396/11668726_20945746_izvfff.jpg",
    serviceTitle: "GRC- Governance, Risk and Compliance",
    bgColor: "bg-gradient-to-r from-purple-600/90 to-purple-700/90",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1753870594/25225479_7016016_kcxvba.jpg",
    serviceTitle: "Automotive Security",
    bgColor: "bg-gradient-to-r from-yellow-500/90 to-yellow-600/90",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1753870514/2150041860_t9mdh0.jpg",
    serviceTitle: "Cyber Security Assessment",
    bgColor: "bg-gradient-to-r from-orange-700/90 to-orange-800/90",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg",
    serviceTitle: "AI Consulting",
    bgColor: "bg-gradient-to-r from-green-500/90 to-green-600/90",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg",
    serviceTitle: "ERP Advisory",
    bgColor: "bg-gradient-to-r from-blue-500/90 to-blue-600/90",
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg",
    serviceTitle: "Expert Resource Consulting",
    bgColor: "bg-gradient-to-r from-indigo-500/90 to-indigo-600/90",
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg",
    serviceTitle: "Training and Coaching",
    bgColor: "bg-gradient-to-r from-pink-500/90 to-pink-600/90",
  },
];

const animationPresets = ["slideIn", "fadeIn", "zoomIn", "fadeSlideIn"];

interface AnimatedHeroSlideProps {
  slide: HeroSlide;
  animationPreset: string;
}

function AnimatedHeroSlide({ slide, animationPreset }: AnimatedHeroSlideProps) {
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const textVariants = {
    slideIn: {
      hidden: { opacity: 0, x: 40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      },
      exit: {
        opacity: 0,
        x: -40,
        transition: { duration: 0.5, ease: "easeInOut" },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.4, ease: "easeIn" },
      },
    },
    fadeSlideIn: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
      exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.5, ease: "easeInOut" },
      },
    },
  };

  const currentTextVariants = textVariants[animationPreset];

  return (
    <section className="w-full h-[calc(100vh-120px)] flex flex-col md:flex-row">
      {/* Left side with image and static title */}
      <motion.div
        className="w-full md:w-[calc(50%+110px)] h-64 md:h-full relative flex items-center justify-center"
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
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-center px-4 text-xl md:text-2xl font-semibold z-10">
          Stay ahead of cyber threats, <br />legal complexities, and operational  <br />challenges with our expert services
        </div>
      </motion.div>

      {/* Right side with only the service title */}
      <motion.div
        className={`w-full md:w-[calc(50%-110px)] text-white flex flex-col justify-center items-center p-8 ${slide.bgColor}`}
        variants={currentTextVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={`text-${slide.id}`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          {slide.serviceTitle}
        </h2>
      </motion.div>
    </section>
  );
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animationPreset, setAnimationPreset] = useState("slideIn");

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setAnimationPreset(
        animationPresets[Math.floor(Math.random() * animationPresets.length)]
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setAnimationPreset(
      animationPresets[Math.floor(Math.random() * animationPresets.length)]
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setAnimationPreset(
      animationPresets[Math.floor(Math.random() * animationPresets.length)]
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAnimationPreset(
      animationPresets[Math.floor(Math.random() * animationPresets.length)]
    );
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <AnimatedHeroSlide
          key={currentSlide}
          slide={heroSlides[currentSlide]}
          animationPreset={animationPreset}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center px-4">
        <Button variant="ghost" size="icon" onClick={prevSlide}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" onClick={nextSlide}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-300"}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
