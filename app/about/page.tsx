// app/about/page.tsx
"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Full-Screen Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
        <Image
          src="https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg"  // Replace with the actual URL
          alt="About Us"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />  {/* Optional: Dark overlay */}
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About Velveer</h1>
          <p className="text-gray-700 leading-relaxed">
            Velveer is Business Management and Consulting Company based in India offering specialized cybersecurity
            services to organizations to protect digital assets, ensure regulatory compliance, and build cyber resilience
            in a fast-evolving threat landscape. Together with our niche domain experts and strategic alliance partners,
            we undertake consulting assignments as a collaborative process, enhancing value and trust by delivering cost
            effective and pragmatic solutions.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}