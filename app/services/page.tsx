"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      title: "IT Governance",
      description:
        "Almost every aspect of a business relies on IT in one way or another and a proper IT governance structure would enable organizations to use IT in an efficient, safe, and compliant ensuring that IT investments deliver value to the organization.",
      points: [
        "Enterprise Architecture (TOGAF)",
        "COBIT",
        "COSO",
        "BSC (Balanced Score Card)",
        "NIST",
      ],
      image: "https://res.cloudinary.com/do5h58llu/image/upload/v1754050086/traditional-publishing_cvzhaj.png",
      imagePosition: "left",
    },
    {
      title: "Governance, Risk and Compliance (GRC)",
      description:
        "GRC is a sign of commitment of every successful organization promoting responsibility, accountability and trust. GRC comprises strategies, methods and tools to manage a company’s overall governance, risk and compliance.",
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
      image: "https://simonnsons.com/images/digital-publishing.png",
      imagePosition: "right",
    },
    {
      title: "Automotive Cybersecurity",
      description:
        "Connectivity is a cornerstone for a new business model and paves the way for autonomous driving. Cybersecurity is becoming a necessity throughout the product lifecycle of vehicles and their infrastructure.",
      points: [
        "ISO 21464 - Road Vehicles: Cybersecurity Engineering",
        "ISO 26262 - Road Vehicles: Functional Safety",
        "TISAX – Trusted Information Security Assessment Exchange",
        "IATF 16949 - International QMS for the automotive industry",
        "AutoSpice (Automotive SPICE)",
      ],
      image: "https://simonnsons.com/images/digital-publishing.png",
      imagePosition: "left",
    },
    {
      title: "Cybersecurity Assessment Services",
      description:
        "With the current advanced technologies, business can get more than ever from the IT resource. However, these technologies make Cybersecurity more complex to manage and Cyber criminals continue to exploit their technology and methods.",
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
      description:
        "AI is rapidly transforming organizations. Our AI services bring the business and technical expertise needed for AI adoption, knowledge sharing, and change management to ensure a smooth transition.",
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
      title: "Enterprise Resource Planning (ERP)",
      description:
        "Selecting suitable ERP solution is a haunting exercise for many companies. We assist in making this process smoother and effective.",
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

  return (
    <>
      <Header />

      <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Our <span className="text-teal-600">Services</span>
          </h2>
          <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        <div className="space-y-32 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: service.imagePosition === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`$ {
                  service.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative w-[600px] max-w-full h-[400px] mx-auto rounded-xl overflow-hidden ">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`$ {
                  service.imagePosition === "left" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="bg-white p-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    {service.description}
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
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
