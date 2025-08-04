'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ExpertPage = () => {
  const headerImage =
    'https://res.cloudinary.com/do5h58llu/image/upload/v1753940160/laughing-woman-talking-texting-phone-isolated-white-background_giiqkr.jpg';
  const heroImage =
    'https://res.cloudinary.com/dabyqx1mz/image/upload/v1746890934/samples/cup-on-a-table.jpg';

  return (
    <>
      <Header />
      {/* Hero Section */}
<section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px] relative">

  {/* Right: Image (Moved to top for mobile) */}
  <div className="relative w-full h-64 md:h-full order-first md:order-last">
    <Image
      src={headerImage}
      alt="Contact Banner"
      fill
      className="object-cover object-center"
      priority
    />
  </div>

  {/* Left: Title and Breadcrumb with Background Image */}
  <div className="flex items-center justify-center bg-gray-100 relative overflow-hidden">

    {/* Desktop-Only Background Image */}
    <div className="absolute inset-0 bg-cover bg-center hidden md:block"
         style={{ backgroundImage: `url(https://res.cloudinary.com/daggx9p24/image/upload/v1746535885/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-70858_a4q9sq.avif)` }}>
    </div>

    {/* Content (Title & Breadcrumb) - Needs z-index to be on top */}
    <div className="p-6 md:p-8 lg:p-12 text-left max-w-xl relative z-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Need <span className="text-teal-600">Expert Consultants</span>?
      </h1>
      <div className="h-0.5 w-12 bg-teal-600 mb-4"></div>
    </div>
  </div>
</section>

      {/* Content Section */}
      <main className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Text Content */}
            <div>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Are you looking for hiring experts for your critical projects? Velveer has a pool of highly qualified experts with international credentials to address your short-term business requirements in the following areas:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>GRC – Governance, Risk and Compliance</li>
                <li>Cyber Security</li>
                <li>ISO/Process Auditing</li>
                <li>AI/ML</li>
                <li>Management Experts</li>
                <li>Technologists</li>
                <li>ERP – SAP, Oracle, MSD</li>
                <li>BIM – Building Information Modelling</li>
                <li>Database Experts</li>
                <li>Migration</li>
              </ul>
            </div>

            {/* Right: Image */}
            <div>
              <Image
                src={heroImage}
                alt="Expert Resource Consulting"
                width={500}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-auto"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ExpertPage;