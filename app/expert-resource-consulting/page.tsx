"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import heroImage from "@/public/images/your-image.jpg"; // Replace with the correct path to your image

const ExpertPage = () => {
  return (
    <>
      <Header />

      {/* Split Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[450px]">
        {/* Left: Image */}
        <div className="relative w-full h-[350px] md:h-auto">
          <Image
            src={"https://res.cloudinary.com/dabyqx1mz/image/upload/v1746890934/samples/cup-on-a-table.jpg"}
            alt="Expert Resource Consulting"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex items-center justify-center bg-gray-100">
          <div className="p-8 md:p-12 lg:p-16 text-left max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Need <span className="text-teal-600">Expert Consultants</span>?
            </h1>
            <div className="h-0.5 w-12 bg-teal-600 mb-4"></div>
            <p className="text-gray-700 mb-6">
              Are you looking for hiring experts for your critical projects? Velveer has a pool of highly qualified experts with international credentials to address your short-term business requirements in the following areas:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
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
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExpertPage;
