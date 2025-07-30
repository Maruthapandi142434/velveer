// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroSlides = [
    {
        id: 1,
        image:
            "https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg",
        subtitle: "IMAGINATION TO REALITY",
        title: "REALITY TECHNOLOGY",
        description: "Let's get the real feel using Augumented Reality and Virtual Reality",
        bgColor: "bg-gradient-to-r from-orange-500/90 to-orange-600/90",
    },
    {
        id: 2,
        image:
            "https://res.cloudinary.com/daggx9p24/image/upload/v1753870396/11668726_20945746_izvfff.jpg",
        subtitle: "IDEATE & EXECUTE",
        title: "APP & EDUCATIONAL PRODUCT DEVELOPMENT",
        description:
            "At Simon and Sons, we have well experienced team to focus on App Development & Educational Product Development based on the requirements given by the client. Simon and Sons has been founded to serve the entire Publishing community aligning with developing trends in technologies.",
        bgColor: "bg-gradient-to-r from-purple-600/90 to-purple-700/90",
    },
    {
        id: 3,
        image:
            "https://res.cloudinary.com/daggx9p24/image/upload/v1753870594/25225479_7016016_kcxvba.jpg",
        subtitle: "LETS GO CREATIVE",
        title: "DESIGN & MODELING",
        description:
            "With the great experience in image editing and modeling, our team can handle any kind of image design, image enhancement, image manipulation and image modeling",
        bgColor: "bg-gradient-to-r from-yellow-500/90 to-yellow-600/90",
    },
    {
        id: 4,
        image:
            "https://res.cloudinary.com/daggx9p24/image/upload/v1753870514/2150041860_t9mdh0.jpg",
        subtitle: "ANYTHING & EVERYTHING",
        title: "PREPRESS / DIGITAL SERVICES",
        description:
            "Why go behind multiple suppliers for various services, when all the services are offered under the single roof. Simon and Sons offers end to end services related to Prepress & Digital Publishing. Anything & Everything related to that can be handled at ease.",
        bgColor: "bg-gradient-to-r from-orange-700/90 to-orange-800/90",
    },
];

const newServices = [
  {
    name: 'IT Governance and Strategy',
    href: '/services/it-governance',
    image: 'https://res.cloudinary.com/do5h58llu/image/upload/v1740389408/Untitled_design_18_ghbrlh.png', // Replace with actual image URL
  },
  {
    name: 'GRC- Governance, Risk and Compliance',
    href: '/services/grc',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z292ZXJuYW5jZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
  },
  {
    name: 'Automotive Security',
    href: '/services/automotive-security',
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870197/11235938_11121_s2ejsf.jpg', // Replace with actual image URL
  },
  {
    name: 'Cyber Security Assessment',
    href: '/services/cyber-security',
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870514/2150041860_t9mdh0.jpg', // Replace with actual image URL
  },
  {
    name: 'AI Consulting',
    href: '/services/ai-consulting',
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870594/25225479_7016016_kcxvba.jpg', // Replace with actual image URL
  },
  {
    name: 'ERP Advisory',
    href: '/services/erp-advisory',
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg', // Replace with actual image URL
  },
  {
    name: 'Training and Coaching',
    href: '/services/training',
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg', // Replace with actual image URL
  },
];


export default function Component() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

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
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section with Auto-Slide */}
            <section className="relative h-screen overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <div className="relative h-full">
                            <div className={`absolute inset-0 ${heroSlides[currentSlide].bgColor}`} />
                            <div className="absolute inset-0 flex items-center">
                                <div className="container mx-auto px-4">
                                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                                        {/* Left: Image */}
                                        <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                                            <Image
                                                src={heroSlides[currentSlide].image || "/placeholder.svg"}
                                                alt={heroSlides[currentSlide].title}
                                                fill
                                                className="object-cover object-center"
                                                priority
                                            />
                                        </div>

                                        {/* Right: Text content */}
                                        <div className="text-white space-y-6">
                                            <motion.p
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.2, duration: 0.6 }}
                                                className="text-lg font-medium tracking-wide"
                                            >
                                                {heroSlides[currentSlide].subtitle}
                                            </motion.p>
                                            <motion.h1
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.4, duration: 0.6 }}
                                                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                                            >
                                                {heroSlides[currentSlide].title}
                                            </motion.h1>
                                            <motion.p
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.6, duration: 0.6 }}
                                                className="text-lg md:text-xl leading-relaxed max-w-2xl"
                                            >
                                                {heroSlides[currentSlide].description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6"
                    />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dot Navigation */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? "bg-white scale-125"
                                : "bg-white/50 hover:bg-white/75"
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* New Our Services Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
                        Our <span className="text-cyan-500">Services</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newServices.map((service) => (
                            <Link href={service.href} key={service.name} className="block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-64 overflow-hidden rounded-t-lg">
                                    <Image
                                        src={service.image}
                                        alt={service.name}
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="p-6 bg-white rounded-b-lg">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.name}</h3>
                                    {/* Add a short description here if you have one */}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-8">
                                ABOUT <span className="text-cyan-500">SIMON AND SONS</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                We are part of a big business family running variety of businesses in different areas & offering end to
                                end services to various verticals for more than a decade. Our business segments focusses on verticals
                                like Educational Product Development, Software services, Freight & Clearance, Media & Entertainment,
                                Export services, IT Enabled services, Printing Services and Food & Beverages. We are proud to say, Simon
                                and Sons is an one stop shop global service provider of Publishing/eLearning solutions which reinvents
                                the way organizations works with the content to focus on developing technologies, change in the learning
                                methodologies and to enhance the business agility.
                            </p>
                            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">READ MORE</Button>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="https://res.cloudinary.com/daggx9p24/image/upload/v1753870197/11235938_11121_s2ejsf.jpg"
                                alt="About illustration"
                                width={500}
                                height={400}
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}