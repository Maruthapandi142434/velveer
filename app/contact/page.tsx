// app/contact/page.js
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const headerImage =
    "https://res.cloudinary.com/do5h58llu/image/upload/v1753940160/laughing-woman-talking-texting-phone-isolated-white-background_giiqkr.jpg";
  const sideImage =
    "https://res.cloudinary.com/daggx9p24/image/upload/v1753870514/2150041860_t9mdh0.jpg";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirement: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    message: null,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ message: data.message, error: false });
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          requirement: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus({ message: data.message, error: true });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({ message: "An unexpected error occurred", error: true });
    }
  };

  return (
    <>
      <Header />
      {/* Split Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px]">
        {/* Left: Title and Breadcrumb */}
        <div className="flex items-center justify-center bg-gray-100">
          <div className="p-8 md:p-12 lg:p-16 text-left max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Contact <span className="text-teal-600">Us</span>
            </h1>
            <div className="h-0.5 w-12 bg-teal-600 mb-4"></div>
            <div className="text-sm text-gray-600 flex items-center">
              <Link href="/" className="hover:underline text-teal-600">
                Home
              </Link>
              <span className="mx-2">{">"}</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="relative w-full h-full">
          <Image
            src={headerImage}
            alt="Contact Banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              {formStatus.message && (
                <div
                  className={`mb-4 p-3 rounded ${
                    formStatus.error ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    value={formData.name}
                    onChange={handleChange}
                    required // Added required attribute
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    value={formData.email}
                    onChange={handleChange}
                    required // Added required attribute
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone"
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      placeholder="City"
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="requirement" className="block text-gray-700 text-sm font-bold mb-2">
                    Requirement / Course
                  </label>
                  <input
                    type="text"
                    id="requirement"
                    placeholder="Requirement / Course"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    value={formData.requirement}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    value={formData.subject}
                    onChange={handleChange}
                    required // Added required attribute
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Message (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Image */}
            <div className="relative h-80 md:h-auto">
              <Image
                src={sideImage}
                alt="Contact Illustration"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;