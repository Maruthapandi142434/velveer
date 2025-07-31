// app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Full-Screen Image */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden">
        <Image
          src="https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg"
          alt="About Us"
          fill
          className="object-cover object-center blur-sm"
          priority
        />

        {/* Overlay and Breadcrumb */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start text-white px-4 md:px-8 lg:px-16">
          <div className="container mx-auto flex items-center">
            
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-white">About Us</h1>
              <div className="flex items-center text-sm md:text-base">
                <Link href="/" className="hover:underline text-white">
                  Home
                </Link>
                <span className="mx-2 text-white"></span>
                <span className="text-white">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center"> {/* Modified Container */}
          <Image
            src="https://velveer.com/wp-content/uploads/elementor/thumbs/logo-final1l-pdqtybt3ujsmzbhfumwj8y9sero761n6pwivd7d93c.png"
            alt="Velveer Logo"
            width={200} // Adjusted size
            height={100} // Adjusted size
            className="mr-8 mb-4 md:mb-0" // Added margin
          />
          <div className="text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Velveer</h2>
            <p>
              Velveer is Business Management and Consulting Company based in India offering specialized cybersecurity
              services to organizations to protect digital assets, ensure regulatory compliance, and build cyber resilience
              in a fast-evolving threat landscape. Together with our niche domain experts and strategic alliance partners,
              we undertake consulting assignments as a collaborative process, enhancing value and trust by delivering cost
              effective and pragmatic solutions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}