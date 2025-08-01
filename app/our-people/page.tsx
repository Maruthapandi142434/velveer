"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurPeoplePage = () => {
  const heroImage =
    "https://res.cloudinary.com/do5h58llu/image/upload/v1753940562/group-people-working-out-business-plan-office_e4endg.jpg";

  const teamMembers = [
    {
      name: "Vijay Vincent",
      title: "Chief Operating Officer",
      image:
        "https://via.placeholder.com/400x300/007bff/FFFFFF?text=Vijay+Vincent",
      description:
        "Experts with extensive practical domain experience and international credentials on information security.",
    },
    {
      name: "Suresh Veeraiyan",
      title: "Director of Business Operations",
      image:
        "https://via.placeholder.com/400x300/28a745/FFFFFF?text=Suresh+Veeraiyan",
      description: "Team with multi-cultural and international experience.",
    },
    {
      name: "Balaji K",
      title: "Head of Presales",
      image:
        "https://via.placeholder.com/400x300/dc3545/FFFFFF?text=Balaji+K",
      description: "Strong customer commitment.",
    },
    // Add more team members here
  ];

  return (
    <>
      <Header />

      {/* Split Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px]">
        {/* Left: Text and Breadcrumb */}
        <div className="flex items-center justify-center bg-gray-100">
          <div className="p-8 md:p-12 lg:p-16 text-left max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-teal-600">Leadership Team</span>
            </h1>
            <div className="h-0.5 w-12 bg-teal-600 mb-4"></div>
            <div className="text-sm text-gray-600 flex items-center">
              <Link href="/" className="hover:underline text-teal-600">
                Home
              </Link>
              <span className="mx-2">{">"}</span>
              <span>Our Leadership Team</span>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative w-full h-full">
          <Image
            src={heroImage}
            alt="Leadership Team"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center font-bold">
            Our <span className="text-teal-600"> People</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-cyan-500 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-2">{member.title}</p>
                <p className="text-gray-700">{member.description}</p>
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
