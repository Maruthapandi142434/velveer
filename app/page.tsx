"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight as ChevronRightIcon } from "lucide-react"; // Changed alias to avoid conflict


const heroSlides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg",
    subtitle: "IMAGINATION TO REALITY",
    title: "REALITY TECHNOLOGY",
    description:
      "Let's get the real feel using Augmented Reality and Virtual Reality",
    bgColor: "bg-gradient-to-r from-orange-500/90 to-orange-600/90",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753870396/11668726_20945746_izvfff.jpg",
    subtitle: "IDEATE & EXECUTE",
    title: "APP & EDUCATIONAL PRODUCT DEVELOPMENT",
    description:
      "We focus on App Development & Educational Product Development aligned with emerging technologies and client needs.",
    bgColor: "bg-gradient-to-r from-purple-600/90 to-purple-700/90",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753870594/25225479_7016016_kcxvba.jpg",
    subtitle: "LETS GO CREATIVE",
    title: "DESIGN & MODELING",
    description:
      "Expertise in image editing, modeling, enhancement, and creative visual solutions.",
    bgColor: "bg-gradient-to-r from-yellow-500/90 to-yellow-600/90",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753870514/2150041860_t9mdh0.jpg",
    subtitle: "ANYTHING & EVERYTHING",
    title: "PREPRESS / DIGITAL SERVICES",
    description:
      "Comprehensive digital publishing and prepress services under one roof.",
    bgColor: "bg-gradient-to-r from-orange-700/90 to-orange-800/90",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg",
    subtitle: "UNLOCK POTENTIAL",
    title: "TRAINING & COACHING",
    description:
      "Empowering individuals and teams to reach their full potential through expert training and coaching programs.",
    bgColor: "bg-gradient-to-r from-green-500/90 to-green-600/90",
  },
];

const newServices = [
  {
    name: "IT Governance and Strategy",
    href: "/services/it-governance",
    image:
      "https://res.cloudinary.com/do5h58llu/image/upload/v1740389408/Untitled_design_18_ghbrlh.png",
    description: "Align IT strategy with your business vision.",
  },
  {
    name: "GRC - Governance, Risk and Compliance",
    href: "/services/grc",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=500",
    description: "Mitigate risks and stay compliant effortlessly.",
  },
  {
    name: "Automotive Security",
    href: "/services/automotive-security",
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753870197/11235938_11121_s2ejsf.jpg",
    description: "Secure vehicle systems with cutting-edge tech.",
  },
  {
    name: "Cyber Security Assessment",
    href: "/services/cyber-security",
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753870514/2150041860_t9mdh0.jpg",
    description: "Identify threats and strengthen digital defenses.",
  },
  {
    name: "AI Consulting",
    href: "/services/ai-consulting",
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753870594/25225479_7016016_kcxvba.jpg",
    description: "Implement AI to automate and optimize operations.",
  },
  {
    name: "ERP Advisory",
    href: "/services/erp-advisory",
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg",
    description: "Streamline workflows with ERP expertise.",
  },
  {
    name: "Training and Coaching",
    href: "/services/training",
    image:
      "https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg",
    description: "Upskill teams through tailored training programs.",
  },
];

function AnimatedHeroSlide({ slide, animationPreset }) {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Initial state
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    slideIn: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" },
      },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -360 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { duration: 1, ease: "easeInOut" },
      },
    },
    flipIn: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: {
        opacity: 1,
        rotateY: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      },
    },
  };

  const currentTextVariants = textVariants[animationPreset];

  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
      {/* Image Section with Animation */}
      <motion.div
        className="w-full md:w-1/2 h-64 md:h-full relative"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        key={`image-${slide.id}`}
      >
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover object-center"
          style={{ objectFit: "cover" }} // Add objectFit style
          priority
        />
      </motion.div>

      {/* Text Section with Animation */}
      <motion.div
        className={`w-full md:w-1/2 text-white flex flex-col justify-center p-8 ${slide.bgColor}`}
        variants={currentTextVariants}
        initial="hidden"
        animate="visible"
        key={`text-${slide.id}`}
      >
        <h4 className="text-sm uppercase tracking-widest font-semibold">
          {slide.subtitle}
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base leading-relaxed">{slide.description}</p>
      </motion.div>
    </section>
  );
}

const animationPresets = ["slideIn", "fadeIn", "zoomIn", "rotateIn", "flipIn"];


const serviceData = [
    {
        id: 1,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-cyan-500 mb-4"
            >
                <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643v-3.435a.75.75 0 01.75-.75h2.608c.414 0 .75-.336.75-.75v-5.816c0-.414-.336-.75-.75-.75H5.25a.75.75 0 01-.75-.75V5.653z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Traditional Publishing",
        description:
            "We have a well experienced team to work on the Print Publishing services",
        link: "/services/traditional-publishing",
    },
    {
        id: 2,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-cyan-500 mb-4"
            >
                <path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" />
            </svg>
        ),
        title: "Digital Publishing",
        description:
            "Anything in digital, we have great capability and we can handle it with",
        link: "/services/digital-publishing",
    },
    {
        id: 3,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-cyan-500 mb-4"
            >
                <path
                    fillRule="evenodd"
                    d="M5.25 2.25a3 3 0 00-3 3v13.5a3 3 0 003 3h13.5a3 3 0 003-3V5.25a3 3 0 00-3-3H5.25zm0 1.5h13.5a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5zM7.5 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "eLearning Services",
        description:
            "End to end services related to eLearning are offered under the single roof.",
        link: "/services/elearning",
    },
    {
        id: 4,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-cyan-500 mb-4"
            >
                <path d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643v-3.435a.75.75 0 01.75-.75h2.608c.414 0 .75-.336.75-.75v-5.816c0-.414-.336-.75-.75-.75H5.25a.75.75 0 01-.75-.75V5.653z" />
            </svg>
        ),
        title: "Conversion Services",
        description:
            "Any type of Conversion services with any inputs, any languages, any",
        link: "/services/conversion",
    },
    {
        id: 5,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-cyan-500 mb-4"
            >
                <path d="M10.781 3.938a.75.75 0 00-1.562 0L7.796 7.757a.75.75 0 001.137.977l1.484-1.113a.75.75 0 01.942 0l1.484 1.113a.75.75 0 001.137-.977l-1.423-3.819zm5.796 0a.75.75 0 00-1.562 0L13.796 7.757a.75.75 0 001.137.977l1.484-1.113a.75.75 0 01.942 0l1.484 1.113a.75.75 0 001.137-.977l-1.423-3.819zM5.517 8.681a.75.75 0 00-.653-.653L2.25 9.782a.75.75 0 000 1.5l2.614.871a.75.75 0 00.653-.653L4.418 9.319a.75.75 0 00-.653-.653zM19.218 8.681a.75.75 0 00-.653-.653l-2.614 1.046a.75.75 0 000 1.5l2.614.871a.75.75 0 00.653-.653l1.046-2.614a.75.75 0 00-.653-.653zM6.189 14.739a.75.75 0 00-.977-1.137l-1.113 1.484a.75.75 0 010 .942l1.113 1.484a.75.75 0 00.977 1.137l3.819-1.423a.75.75 0 000-1.5l-3.819 1.423zM17.811 14.739a.75.75 0 00-.977-1.137l-1.113 1.484a.75.75 0 010 .942l1.113 1.484a.75.75 0 00.977 1.137l3.819-1.423a.75.75 0 000-1.5l-3.819 1.423z" />
                <path d="M9 6a3 3 0 013-3h3a3 3 0 110 6H9a3 3 0 01-3-3zM17 6a3 3 0 013-3h3a3 3 0 110 6h-3a3 3 0 01-3-3z" />
            </svg>
        ),
        title: "Geospatial And Mapping Services",
        description:
            "At Simon and Sons we offer end to end Geospatial and Mapping services",
        link: "/services/geospatial",
    },
];

function OurServices() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Our Core Services
                </h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {serviceData.map((service) => (
                        <motion.div
                            key={service.id}
                            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
                            variants={item}
                        >
                            {service.icon}
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-500">{service.description}</p>
                            <Link
                                href={service.link}
                                className="inline-flex items-center mt-4 text-cyan-500 hover:text-cyan-700 transition-colors duration-200"
                            >
                                Read more
                                <ChevronRightIcon className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}



export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animationPreset, setAnimationPreset] = useState("slideIn");

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setAnimationPreset(
        animationPresets[Math.floor(Math.random() * animationPresets.length)]
      ); // Random animation
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
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAnimationPreset(
      animationPresets[Math.floor(Math.random() * animationPresets.length)]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
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
              className={`h-3 w-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Our Services */}
      <OurServices />

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                ABOUT <span className="text-cyan-500">Velveer</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are part of a big business family running variety of
                businesses in different areas & offering end to end services to
                various verticals for more than a decade. Our business segments
                focus on Educational Product Development, Software services,
                Freight & Clearance, Media & Entertainment, Export services, IT
                Enabled services, Printing Services, and Food & Beverages.
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                READ MORE
              </Button>
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

      {/* Contact */}
      <section
        className="py-16 relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/do5h58llu/image/upload/v1753944901/118186_rnqrxx.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-100 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our experts for a consultation and discover how our IT
            consulting and business solutions can drive your success.
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-block shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}