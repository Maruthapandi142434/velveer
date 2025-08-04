"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutData = {
  title: "About Velveer",
  description:
    " Velveer is Business Management and Consulting Company based in India offering specialized cybersecurity services to organizations to protect digital assets, ensure regulatory compliance, and build cyber resilience in a fast-evolving threat landscape. Together with our niche domain experts and strategic alliance partners, we undertake consulting assignments as a collaborative process, enhancing value and trust by delivering cost effective and pragmatic solutions.",
  image:
    "https://res.cloudinary.com/daggx9p24/image/upload/v1754111403/upset-disappointed-businesswoman-entering-office-meeting-room-late-night_gwhsub.jpg", // This will be the right side image
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Split Header Section */}
<section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px] relative">

  {/* Right Side - Image (Moved to the top for mobile) */}
  <div className="relative w-full h-64 md:h-full order-first md:order-last">
    <Image
      src="https://res.cloudinary.com/daggx9p24/image/upload/v1754304908/121264_teimwm.jpg" // Replace with your hand image if needed
      alt="Team Diversity"
      fill
      className="object-cover object-center"
      priority
    />
  </div>

  {/* Left Side - Title & Breadcrumb with Background Image */}
  <div className="relative flex items-center justify-center bg-gray-100 overflow-hidden">

      {/* Desktop-Only Background Image */}
      <div className="absolute inset-0 bg-cover bg-center hidden md:block"  // Hidden on mobile, visible on desktop
           style={{ backgroundImage: `url(https://res.cloudinary.com/daggx9p24/image/upload/v1746535885/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-70858_a4q9sq.avif)` }}>
      </div>

      {/* Content (Title & Breadcrumb) - Needs z-index to be on top */}
      <div className="p-6 md:p-8 lg:p-12 text-left max-w-xl relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
          About <span className="text-teal-600">Us</span>
        </h1>
        <div className="h-0.5 w-12 bg-teal-600 mb-2 md:mb-4"></div>
        <div className="text-sm text-gray-600 flex items-center">
          {/* <Link href="/" className="hover:underline text-teal-600">
            Home
          </Link>
          <span className="mx-1 md:mx-2">{">"}</span>
          <span>About Us</span> */}
        </div>
      </div>

  </div>
</section>

      {/* About Content Section */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          {/* <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              About <span className="text-teal-600">Us</span>
            </h3>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div> */}

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative h-48 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md">
              <Image
                src={AboutData.image}
                alt={AboutData.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Added sizes attribute
              />
            </div>

            {/* Text */}
            <div className="p-4 md:p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 md:mb-4">
                {AboutData.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify mb-4 md:mb-6">
                {AboutData.description}
              </p>
              <h3 className="font-semibold text-gray-800 mb-2">Our Team</h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Experts with extensive practical domain experience and international credentials on information security</li>
                <li>Team with multi-cultural and international experience</li>
                <li>Strong customer commitment</li>
                <li>In-depth Business Knowledge</li>
              </ul>
              {/* <Link
                href="/contact"
                className="text-blue-500 hover:text-blue-700 font-semibold inline-block mt-2 md:mt-4"
              >
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;