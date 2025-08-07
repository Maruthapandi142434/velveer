// app/contact/page.js
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const headerImage =
    "https://res.cloudinary.com/do5h58llu/image/upload/v1753940160/laughing-woman-talking-texting-phone-isolated-white-background_giiqkr.jpg";
  const sideImage =
    "https://res.cloudinary.com/daggx9p24/image/upload/v1754479935/2148205584_mjybs4.jpg";

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
    showPopup: false,
  });

  // Auto-hide popup after 5 seconds
  useEffect(() => {
    if (formStatus.showPopup && !formStatus.error) {
      const timer = setTimeout(() => {
        setFormStatus({ message: null, error: false, showPopup: false });
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const closePopup = () => {
    setFormStatus({ message: null, error: false, showPopup: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'city', 'requirement', 'subject'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      setFormStatus({ 
        message: `Please fill in all required fields: ${missingFields.join(', ')}`, 
        error: true,
        showPopup: true
      });
      return;
    }

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
        setFormStatus({ 
          message: "Thank you for your message. It has been sent.", 
          error: false, 
          showPopup: true 
        });
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
        setFormStatus({ 
          message: data.message || "Failed to send message. Please try again.", 
          error: true, 
          showPopup: true 
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({ 
        message: "An unexpected error occurred. Please try again.", 
        error: true, 
        showPopup: true 
      });
    }
  };

  return (
    <>
      {/* Pop-up Notification */}
      {formStatus.showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ease-out">
            <div className="p-6">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                {formStatus.error ? (
                  // Error Icon (X)
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                ) : (
                  // Success Icon (Checkmark)
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-900">
                {formStatus.error ? "Error" : "Success!"}
              </h3>
              
              {/* Message */}
              <p className="text-gray-600 text-center mb-6">
                {formStatus.message}
              </p>
              
              {/* Close Button */}
              {/* <div className="flex justify-center">
                <button
                  onClick={closePopup}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    formStatus.error 
                      ? "bg-red-600 hover:bg-red-700 text-white" 
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  OK
                </button>
              </div> */}
            </div>
            
            {/* Close X button in top right */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Split Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px] relative">
        {/* Left: Title and Breadcrumb with Background Image */}
        <div className="flex items-center justify-center bg-gray-100 relative overflow-hidden">
          {/* Desktop-Only Background Image */}
          <div className="absolute inset-0 bg-cover bg-center hidden md:block"
               style={{ backgroundImage: `url(https://res.cloudinary.com/daggx9p24/image/upload/v1746535885/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-70858_a4q9sq.avif)` }}>
          </div>

          {/* Content (Title & Breadcrumb) - Needs z-index to be on top */}
          <div className="p-6 md:p-8 lg:p-12 text-left max-w-xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Contact <span className="text-teal-600">Us</span>
            </h1>
            <div className="h-0.5 w-12 bg-teal-600 mb-4"></div>
          </div>
        </div>

        {/* Right: Image (Moved to top for mobile) */}
        <div className="relative w-full h-64 md:h-full order-first md:order-last">
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone"
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-cyan-500"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      placeholder="City"
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-cyan-500"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="requirement" className="block text-gray-700 text-sm font-bold mb-2">
                    Requirement / Course  <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="requirement"
                    placeholder="Requirement / Course"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    value={formData.subject}
                    onChange={handleChange}
                    required
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
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
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
    </>
  );
};

export default ContactPage;