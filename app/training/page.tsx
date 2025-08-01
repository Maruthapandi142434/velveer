'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const TrainingPage = () => {
  const heroImage =
    'https://res.cloudinary.com/do5h58llu/image/upload/v1753940295/meeting-mature-office-showing-presenter_cfpt40.jpg';

  return (
    <>
      <Header />

      {/* Split Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px]">
        {/* Left: Text and Breadcrumb */}
        <div className="flex items-center justify-center bg-gray-100">
          <div className="p-8 md:p-12 lg:p-16 text-left max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Training & <span className="text-teal-600">Coaching</span>
            </h1>
            <div className="h-0.5 w-12 bg-teal-600 mb-4"></div>
            <div className="text-sm text-gray-600 flex items-center">
              <Link href="/" className="hover:underline text-teal-600">
                Home
              </Link>
              <span className="mx-2">{'>'}</span>
              <span>Training & Coaching</span>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative w-full h-full">
          <Image
            src={heroImage}
            alt="Training Banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Content Section */}
      <main className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Education is a core of any organization/individual for long term growth. Velveer programs are designed based on practical experience and handled by highly experienced professionals with practical experience. We can design & deliver special coaching & training programmes for the organisations based on any specific requirement.
              </p>
              <h2 className="text-2xl font-semibold mb-2 text-cyan-500">Training Programs:</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Technologies</li>
                <li>Information Security Management Systems</li>
                <li>ISO Standards (ISO27001, ISO22301, ISO26262, ISO21434, and other standards and frameworks)</li>
                <li>Project Management</li>
                <li>Data Analytics for Business Decisions</li>
                <li>RPA - Robotic Process Automation</li>
                <li>AI/Machine Learning</li>
                <li>Six Sigma</li>
                <li>Organizational Development Programmes</li>
                <li>Process Quality Improvement Programs</li>
                <li>Corporate Governance and Management</li>
                <li>Marketing Management</li>
                <li>Strategic Leadership and Organisational excellence</li>
                <li>Other on-demand programs.</li>
              </ul>
            </div>
            <div>
              <Image
                src="https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg"
                alt="Training and Coaching session"
                width={500}
                height={400}
                className="rounded-lg shadow-md object-cover"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TrainingPage;
