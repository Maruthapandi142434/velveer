// app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const backgroundImage = "https://res.cloudinary.com/do5h58llu/image/upload/v1753942287/standard-quality-control-concept-m_1_yw2kgm.jpg"; // Use a relevant image

const AboutData = {
    title: "About Velveer",
    description: "Velveer is Business Management and Consulting Company based in India offering specialized cybersecurity services to organizations to protect digital assets, ensure regulatory compliance, and build cyber resilience in a fast-evolving threat landscape. Together with our niche domain experts and strategic alliance partners, we undertake consulting assignments as a collaborative process, enhancing value and trust by delivering cost effective and pragmatic solutions.",
    image: "https://res.cloudinary.com/do5h58llu/image/upload/v1753946352/144834_goqrwd.jpg",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Full-Screen Image */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden">
        <Image
          src="https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg"
          alt="About Us"
          fill
          className="object-cover object-center blur-sm grayscale"
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
                <span className="mx-2 text-white">></span> {/* Added '>' */}
                <span className="text-white">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src={AboutData.image}
                alt={AboutData.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{AboutData.title}</h3>
              <p className="text-gray-700 leading-relaxed text-justify">{AboutData.description}</p>

              {/* Call to Action (Optional) */}
              <Link href="/contact" className="text-blue-500 hover:text-blue-700 font-semibold inline-block mt-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;