// app/our-people/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OurPeoplePage = () => {
  const backgroundImage = "https://images.unsplash.com/photo-1519389950473-47a0277814e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const teamMembers = [
    {
      name: "Vijay Vincent",
      title: "Chief Operating Officer",
      image: "https://via.placeholder.com/400x300/007bff/FFFFFF?text=Vijay+Vincent", // Placeholder image
      description: "Experts with extensive practical domain experience and international credentials on information security.",
    },
    {
      name: "Suresh Veeraiyan",
      title: "Director of Business Operations",
      image: "https://via.placeholder.com/400x300/28a745/FFFFFF?text=Suresh+Veeraiyan", // Placeholder image
      description: "Team with multi-cultural and international experience.",
    },
    {
      name: "Balaji K",
      title: "Head of Presales",
      image: "https://via.placeholder.com/400x300/dc3545/FFFFFF?text=Balaji+K", // Placeholder image
      description: "Strong customer commitment.",
    },
    // Add more team members here
  ];

  return (
    <>
      <Header />

      {/* Full-Screen Image with Overlay and Breadcrumb */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Our People"
          fill
          className="object-cover object-center blur-sm grayscale"
          style={{ objectPosition: 'top' }}
          priority
        />

        {/* Overlay and Breadcrumb */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start text-white px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-white">Our Leadership Team</h1>
            <div className="flex items-center text-sm md:text-base">
              <Link href="/" className="hover:underline text-white">
                Home
              </Link>
              <span className="mx-2 text-white">></span>
              <span className="text-white">Our Leadership Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our People</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">  {/* flex and items-center added here */}
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={150}  // Adjust these as needed to maintain aspect ratio
                  className="rounded-full mb-2"
                  style={{ objectFit: 'cover' }} // Ensure proper image scaling
                />
                <h3 className="text-xl font-semibold mb-1 text-cyan-500 text-center">{member.name}</h3> {/* text-center added */}
                <p className="text-gray-600 text-center mb-2">{member.title}</p> {/* text-center added */}
                <p className="text-gray-700 text-center">{member.description}</p> {/* text-center added */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OurPeoplePage;