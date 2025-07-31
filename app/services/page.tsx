// app/services/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const backgroundImage = "https://res.cloudinary.com/do5h58llu/image/upload/v1753942287/standard-quality-control-concept-m_1_yw2kgm.jpg";

  // Mock data matching the layout style
  const servicesData = [
    {
      title: "Managed Services",
      description:
        "Is your organization lacking internal resources or expertise in managing your day-to-day security related operations? We are here to support with our Managed Security Services designed to provide management, protection, mitigation, response, and recovery services on real-time basis.",
      bulletPoints: [
        "Overall administration of a company's security processes.",
        "Covers wide range of security services: Around-the-clock monitoring and management of tools like firewalls, intrusion detection systems (IDS), and endpoint detection and response (EDR), patch management & upgrades, security assessments & audits, and security incident response.",
      ],
      image: "https://res.cloudinary.com/do5h58llu/image/upload/v1753942287/standard-quality-control-concept-m_1_yw2kgm.jpg",
      imagePosition: "right",
    },
    {
      title: "Enterprise Resource Planning",
      description:
        "Selecting suitable Enterprise Resource Planning (ERP) solution is a haunting exercise for many of the companies and go into rough weather due to mismatch between business requirement and ERP capabilities. We help organizations to select, implement and optimize ERP systems that align with their business processes and strategic objectives.",
      bulletPoints: [
        "Comprehensive ERP assessment and selection process",
        "Implementation planning and project management",
        "Custom configuration and integration services",
        "Training and change management support",
      ],
      image: "https://res.cloudinary.com/do5h58llu/image/upload/v1753940562/group-people-working-out-business-plan-office_e4endg.jpg",
      imagePosition: "left",
    },
    {
      title: "Digital Transformation",
      description:
        "In today's rapidly evolving business landscape, digital transformation is not just an option—it's a necessity. Our comprehensive digital transformation services help organizations modernize their operations, enhance customer experiences, and drive sustainable growth through strategic technology adoption.",
      bulletPoints: [
        "Digital strategy development and roadmap creation",
        "Legacy system modernization and cloud migration",
        "Process automation and workflow optimization",
        "Data analytics and business intelligence implementation",
      ],
      image: "https://res.cloudinary.com/do5h58llu/image/upload/v1753944217/medical-banner-with-doctor-holding-tablet_nzk9fv.jpg",
      imagePosition: "right",
    },
  ];

  return (
    <>
      <Header />

      {/* Full-Screen Image with Overlay and Breadcrumb */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Our Services"
          fill
          className="object-cover object-center blur-sm grayscale"
          style={{ objectPosition: 'top' }}
          priority
        />

      {/* Overlay and Breadcrumb */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start text-white px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-white">Our Services</h1>
            <div className="flex items-center text-sm md:text-base">
              <Link href="/" className="hover:underline text-white">
                Home
              </Link>
              <span className="mx-2 text-white">></span>
              <span className="text-white">Our Services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Our Expertise</h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* Services */}
          <div className="space-y-20">
            {servicesData.map((service, index) => (
               <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`} // Removed alternate alignment
                >
                  {/* Image Section */}
                  <div className={`${service.imagePosition === "left" ? "lg:order-2" : "lg:order-1"} `}>
                    <div
                      className="relative h-64 lg:h-80 rounded-full overflow-hidden shadow-md"
                      style={{ marginTop: index % 2 === 0 ? '1rem' : '-1rem' }} // Staggered positioning
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${service.imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6 text-justify">{service.description}</p>

                      <ul className="space-y-3">
                        {service.bulletPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <span className="text-gray-700 mr-3 mt-1.5 flex-shrink-0">•</span>
                            <span className="text-gray-700 leading-relaxed text-justify">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="#" className="text-blue-500 hover:text-blue-700 font-semibold inline-block mt-4">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-6 text-lg">Ready to transform your business with our professional services?</p>
            <Link
              href="#"
              className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 border-2 border-gray-900 rounded"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;