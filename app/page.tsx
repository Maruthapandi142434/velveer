// app/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "./HeroSection";
import OurCoreServices from "./OurCoreServices";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Our Services */}
      <OurCoreServices />
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