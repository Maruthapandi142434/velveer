// app/training/page.tsx
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TrainingPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Training and Coaching</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Education is a core of any organization/individual for long term growth. Velveer programs are designed based on practical experience and handled by highly experienced professionals with practical experience. We can design & deliver special coaching & training programmes for the organisations based on any specific requirement.
            </p>
            <h2 className="text-2xl font-semibold mb-2 text-cyan-500">Training Programs:</h2>
            <ul className="list-disc list-inside text-gray-700">
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
              src="https://res.cloudinary.com/daggx9p24/image/upload/v1753871544/17647_us5hzd.jpg" // Replace with your actual image path
              alt="Training and Coaching"
              width={500} // Adjust as needed
              height={400} // Adjust as needed
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingPage;