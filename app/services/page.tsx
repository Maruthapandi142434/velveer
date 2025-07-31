// app/services/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const backgroundImage = "https://images.unsplash.com/photo-1519389950473-47a0277814e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const servicesData = [
    {
      title: "IT Governance and Strategy",
      description: "Almost every aspect of a business relies on IT in one way or another and a proper IT governance structure would enable organizations to use IT in an efficient, safe, and compliant ensuring that IT investments deliver value to the organization. We help the client in implementing IT Governance by appropriate framework/models:\nEnterprise Architecture (TOGAF)\nCOBIT\nCOSO\nBSC (Balanced Score Card)\nNIST",
      image: "https://via.placeholder.com/400x300/007bff/FFFFFF?text=IT+Governance", // Placeholder image
    },
    {
      title: "GRC- Governance, Risk and Compliance",
      description: "GRC is a sign of commitment of every successful organization promoting responsibility, accountability and trust.  GRC comprises strategies, methods and tools to manage a company’s overall governance, risk and compliance. Stay ahead of cyber threats, legal complexities, and operational challenges with our expert services:\nISO 9001 – Quality Management System\nISO 27001 – Information Security Management System\nISO 20000 – IT Services Management\nGDPR  - General Data Protection Regulation\nSOC   - System and Organization Controls\nISO 22301 - BCMS Business Continuity Management System\nCMMi  –  Capability Maturity Model® Integrated\nPCI DSS   – Payment Card Industry Data Security Standard \nHIPAA  - Health Insurance Portability and Accountability Act\nIATF 16949 - International QMS for the automotive industry\nISA/IEC 62443  - Industrial Cybersecurity\nISO/IEC 42001  - AI Management Systems\nDLP  - Data Loss Prevention\nISO/IEC 27701 - Privacy Information Management System",
      image: "https://via.placeholder.com/400x300/28a745/FFFFFF?text=GRC", // Placeholder image
    },
    {
      title: "Automotive Security",
      description: "Connectivity is a cornerstone for a new business model and paves the way for autonomous driving. New and existing internet technologies are used in safety-critical areas and require security as a mandatory requirement. Cyber security is becoming a necessity throughout the product lifecycle of vehicles and their infrastructure. \n\n•ISO 21464 - Road Vehicles : Cybersecurity Engineering\n•ISO 26262 - Road Vehicles : Functional Safety\n•TISAX –  Trusted Information Security Assessment Exchange\n•IATF 16949 - International QMS for the automotive industry\n•AutoSpice (Automotive SPICE)",
      image: "https://via.placeholder.com/400x300/dc3545/FFFFFF?text=Automotive", // Placeholder image
    },
    {
      title: "Cyber Security Asessment",
      description: "With the current advanced technologies, business can get more than ever from the IT resource. However, these technologies make Cybersecurity more complex to manage and Cyber criminals continue to exploit their technology and methods to create more business damage.  While you cannot prevent a security attack or an event, you can always protect or manage the extent of the impact by conducting regular assessments.\n\n•Risk Assessment, Gap Analysis and Documentation.\n•Vulnerability Assessment/Penetration Testing\n•Cyber Security Controls Assessment & Audit\n•Configuration/system audit\n•Web Application Penetration Testing\n•VA/PT-Wireless Network Penetration Testing\n•Mobile Device Security Review\n•Firewall Security Assessment\n•Email Phishing Simulation\n•Mobile Application Penetration Test\n•Forensic Analysis\n•Red Team Operations\n•Cloud Security Testing\n•IoT Security Audits",
      image: "https://via.placeholder.com/400x300/ffc107/000000?text=Cyber", // Placeholder image
    },
    {
      title: "AI Consulting",
      description: "The AI revolution  has begun!!  Using AI is no longer a choice; it’s a necessity. \n\nOur AI services bring the business and technical expertise needed to make your organization ready for AI adoption by required knowledge sharing and implementing change management to ensure a smooth transition. Our AI consultants work closely with clients to understand the specific business requirements, analyze data, and build AI models/algorithms to tackle complex business processes and improve efficiency resulting in cost reduction. \nAssessment of current technology infrastructure and AI capabilities\nUse case identification and opportunities for improvement.\nDevelopment of AI strategies aligned with the State's goals.\nImplementation support for AI solutions, including data analysis, model development, and deployment.\nTraining and knowledge transfer on AI tools and methodologies.\nOngoing support and evaluation of implemented AI solutions to ensure effectiveness and alignment with objectives.",
      image: "https://via.placeholder.com/400x300/17a2b8/FFFFFF?text=AI", // Placeholder image
    },
    {
      title: "Managed Security Services",
      description: "Is your organization lacking internal resources or expertise in managing your day-to-day security related operations? We are here to support with our Managed Security Services designed to provide management, protection, mitigation, response, and recovery services on real-time basis. \n•Overall  administration of a company’s security processes. \nCovers wide range of security services : Around-the-clock monitoring and management of tools like firewalls, intrusion detection systems (IDS), and endpoint detection and response (EDR), patch management & upgrades, security assessments &  audits, and security incidents management.\nSuitable for organizations lacking  in-house resources or expertise ",
      image: "https://via.placeholder.com/400x300/fd7e14/000000?text=Managed", // Placeholder image
    },
    {
      title: "ERP Advisory",
      description: "Selecting suitable Enterprise Resource Planning (ERP) solution is a haunting exercise for many of the companies and  go into rough weather due to mismatch between business requirement and ERP offerings. We assist the clients if making this process smoother and effective.\n\nAssessment of business processes & functional mapping.\nAs-Is documentation for implementation.\nSystematic evaluation of ERP Solutions as per your business requirements and selection.\nProject Management of ERP Implementation Projects.\nEffective Data Analysis and Migration into the new system.\nIntegration planning and configuration analysis.\nCloud Migration.\nExpert ERP sourcing\nTraining",
      image: "https://via.placeholder.com/400x300/e83e8c/FFFFFF?text=ERP", // Placeholder image
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

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Services</h2>
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                  style={{ width: '100%', height: 'auto' }} // Make image responsive within its container
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-semibold mb-2 text-cyan-500">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;