"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutData = {
  title: "About Velveer",
  description:
    "Velveer is a Business Management and Consulting Company based in India offering specialized cybersecurity services to organizations to protect digital assets, ensure regulatory compliance, and build cyber resilience in a fast-evolving threat landscape. Together with our niche domain experts and strategic alliance partners, we undertake consulting assignments as a collaborative process, enhancing value and trust by delivering cost effective and pragmatic solutions.",
  image:
    "https://res.cloudinary.com/do5h58llu/image/upload/v1754049269/Velveer_Logo_Design_ziy3ip.png", // This will be the right side image
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Split Header Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px]">
        {/* Left Side - Title & Breadcrumb */}
        <div className="relative flex items-center justify-center bg-gray-100">
          <div className="p-8 md:p-12 lg:p-16 text-left max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-teal-600">Us</span>
            </h1>
            <div className="h-0.5 w-12 bg-teal-600 mb-4"></div>
            <div className="text-sm text-gray-600 flex items-center">
              <Link href="/" className="hover:underline text-teal-600">
                Home
              </Link>
              <span className="mx-2">{'>'}</span>
              <span>About Us</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg" // Replace with your hand image if needed
            alt="Team Diversity"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-teal-600">Us</span>
            </h3>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src={AboutData.image}
                alt={AboutData.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {AboutData.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                {AboutData.description}
              </p>
              <Link
                href="/contact"
                className="text-blue-500 hover:text-blue-700 font-semibold inline-block mt-4"
              >
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
