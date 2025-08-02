"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ServicesPage = () => {

  const services = [
    {
      title: "IT Governance and Strategy",
       id: "it-governance",
      description:
        "Almost every aspect of a business relies on IT in one way or another and a proper IT governance structure would enable organizations to use IT in an efficient, safe, and compliant ensuring that IT investments deliver value to the organization.",
      points: [
        "Enterprise Architecture (TOGAF)",
        "COBIT",
        "COSO",
        "BSC (Balanced Score Card)",
        "NIST",
      ],
      image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754111403/upset-disappointed-businesswoman-entering-office-meeting-room-late-night_gwhsub.jpg",
      imagePosition: "left",
    },
    {
        id: "grc",
      title: "Governance, Risk and Compliance (GRC)",
      description:
        "GRC is a sign of commitment of every successful organization promoting responsibility, accountability and trust.  GRC comprises strategies, methods and tools to manage a company’s overall governance, risk and compliance. Stay ahead of cyber threats, legal complexities, and operational challenges with our expert services:",
      points: [
        "ISO 9001 – Quality Management System",
        "ISO 27001 – Information Security Management System",
        "ISO 20000 – IT Services Management",
        "GDPR – General Data Protection Regulation",
        "SOC – System and Organization Controls",
        "ISO 22301 - BCMS Business Continuity Management System",
        "CMMi – Capability Maturity Model® Integrated",
        "PCI DSS – Payment Card Industry Data Security Standard",
        "HIPAA - Health Insurance Portability and Accountability Act",
        "IATF 16949 - International QMS for the automotive industry",
        "ISA/IEC 62443 - Industrial Cybersecurity",
        "ISO/IEC 42001 - AI Management Systems",
        "DLP - Data Loss Prevention",
        "ISO/IEC 27701 - Privacy Information Management System",
      ],
      image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754112348/10782746_19197288_yds39m.svg",
      imagePosition: "right",
    },
    {
      title: "Automotive Cybersecurity",
       id: "automotive-cybersecurity",
      description:
        "Connectivity is a cornerstone for a new business model and paves the way for autonomous driving. New and existing internet technologies are used in safety-critical areas and require security as a mandatory requirement. Cyber security is becoming a necessity throughout the product lifecycle of vehicles and their infrastructure",
      points: [
        "ISO 21464 - Road Vehicles: Cybersecurity Engineering",
        "ISO 26262 - Road Vehicles: Functional Safety",
        "TISAX – Trusted Information Security Assessment Exchange",
        "IATF 16949 - International QMS for the automotive industry",
        "AutoSpice (Automotive SPICE)",
      ],
      image: "https://res.cloudinary.com/daggx9p24/image/upload/v1754112490/11669879_20945952_zfqtke.svg",
      imagePosition: "left",
    },
    {
      title: "Cyber Security Assessmenrt",
          id: "cybersecurity-assessment",
      description:
        "With the current advanced technologies, business can get more than ever from the IT resource. However, these technologies make Cybersecurity more complex to manage and Cyber criminals continue to exploit their technology and methods to create more business damage.  While you cannot prevent a security attack or an event, you can always protect or manage the extent of the impact by conducting regular assessments.",
      points: [
        "Risk Assessment, Gap Analysis and Documentation",
        "Vulnerability Assessment/Penetration Testing",
        "Cyber Security Controls Assessment & Audit",
        "Configuration/system audit",
        "Web Application Penetration Testing",
        "VA/PT-Wireless Network Penetration Testing",
        "Mobile Device Security Review",
        "Firewall Security Assessment",
        "Email Phishing Simulation",
        "Mobile Application Penetration Test",
        "Forensic Analysis",
        "Red Team Operations",
        "Cloud Security Testing",
        "IoT Security Audits",
      ],
      image: "https://simonnsons.com/images/other-services.png",
      imagePosition: "right",
    },
    {
      title: "AI Transformation Services",
      id: "ai-transformation",
      description:
        "AI is rapidly transforming the organizations.  Our AI services bring the business and technical expertise needed for AI adoption by required knowledge sharing and implementing change management to ensure a smooth transition.",
      points: [
        "Assessment of current technology infrastructure and AI capabilities",
        "Use case identification and opportunities for improvement",
        "Development of AI strategies aligned with business goals",
        "Implementation support including data analysis and deployment",
        "Training and knowledge transfer on AI tools and methodologies",
      ],
      image: "https://simonnsons.com/images/design-and-detail-engineering.png",
      imagePosition: "left",
    },
    {
      title: "ERP Advisory (ERP)",
        id: "erp",
      description:
        "Selecting suitable Enterprise Resource Planning (ERP) solution is a haunting exercise for many of the companies and  go into rough weather due to mismatch between business requirement and ERP offerings. We assist the clients if making this process smoother and effective .",
      points: [
        "Assessment of business processes & functional mapping",
        "As-Is documentation for implementation",
        "Systematic evaluation of ERP Solutions and selection",
        "Project Management of ERP Implementation Projects",
        "Effective Data Analysis and Migration",
        "Integration planning and configuration analysis",
        "Cloud Migration",
        "Expert ERP sourcing",
        "Training",
      ],
      image: "https://res.cloudinary.com/do5h58llu/image/upload/v1754050885/WPS_Photos_1_xsnm6q.jpg",
      imagePosition: "right",
    },
  ];

  // Dynamically alternate image positions
  const updatedServices = services.map((service, index) => ({
    ...service,
    imagePosition: index % 2 === 0 ? "left" : "right", // Start with "left" for even indices
  }));

  const [expandedServices, setExpandedServices] = useState({});

  const toggleExpand = (index) => {
    setExpandedServices({
      ...expandedServices,
      [index]: !expandedServices[index],
    });
  };

    // Smooth scroll to hash if present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // Delay for layout to fully render
      }
    }
  }, []);
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px]">
        {/* Left Side - Title & Breadcrumb */}
        <div className="relative flex items-center justify-center bg-gray-100">
          <div className="p-6 md:p-8 lg:p-12 text-left max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              Our <span className="text-teal-600">Services</span>
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
      <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">


        <div className="space-y-32 max-w-5xl mx-auto">
          {updatedServices.map((service, index) => (  // Use updatedServices
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, x: service.imagePosition === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 scroll-mt-24"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`${service.imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="relative w-[400px] max-w-full h-[400px] mx-auto rounded-full overflow-hidden ">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`${service.imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="bg-white p-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    {service.description}
                  </p>
                  <ul
                    className={`list-disc pl-5 text-gray-700 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${service.points.length > 5 && !expandedServices[index] ? "max-h-[150px]" : "max-h-none"
                      }`}
                  >
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  {service.points.length > 5 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-teal-500 hover:text-teal-700 focus:outline-none"
                    >
                      {expandedServices[index] ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;