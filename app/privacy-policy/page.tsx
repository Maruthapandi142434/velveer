"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      {/* Split Header Section - Similar to About Page */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px] relative">
        {/* Right Side - Image */}
        <div className="relative w-full h-64 md:h-full order-first md:order-last">
          <Image
            src="https://res.cloudinary.com/daggx9p24/image/upload/v1754370353/428_tlgebm.jpg" // Replace with your Privacy Policy image
            alt="Privacy Policy"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        {/* Left Side - Title with Background Image */}
        <div className="relative flex items-center justify-center  bg-gray-100 overflow-hidden">
          {/* Desktop-Only Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center hidden md:block"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/daggx9p24/image/upload/v1746535885/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-70858_a4q9sq.avif)`,
            }}
          ></div>

          {/* Content (Title) */}
          <div className="p-6 md:p-8 lg:p-12 text-left max-w-xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              Privacy <span className="text-teal-600">Policy</span>
            </h1>
            <div className="h-0.5 w-12 bg-teal-600 mb-2 md:mb-4"></div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section - Adjusted for Full Width */}
      <section className="py-8 md:py-12 lg:py-16 text-gray-700 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Privacy Policy Text */}
          <div className="prose prose-lg max-w-none">

             {/* Disclaimer and Intro */}
            <p className="text-lg leading-relaxed mb-6">
              Velveer has provided this website for the benefit of customers
              and clients who want to utilize various services offered by
              Velveer. Its contents are provided on an “as is” basis, and
              Velveer makes no (and expressly disclaims all) representations or
              warranties of any kind, expressed or implied, with respect to
              this website or the information, content, products, or services
              included in this site, including, without limitation, warranties
              of merchantability and fitness for a particular purpose.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Every effort has been taken to ensure the accuracy of the
              information on the website, but the content is naturally subject
              to change. In no event will Velveer be held liable for any
              direct, indirect, special, incidental, or consequential damages
              arising out of the use of the information held on this server.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Information relating to training programs is provided as advance
              publicity and for guidance purposes only. It does not constitute
              a contract. The provisions of courses described here are regularly
              reviewed and may be subject to change without notice. Velveer
              reserves the right to withdraw, amend, or restructure any
              programs or modules listed from time to time without liability.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Velveer has not taken any steps to confirm the accuracy or
              reliability of any of the information contained in any linked
              third-party websites and does not make any representations or
              warranties as to the security of any information (including,
              without limitation, personal information) you might be requested
              to give any third-party website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Copyright Information
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Materials contained on this website are subject to copyright and
              other proprietary rights. Velveer grants permission for browsing
              of material it has published on its website pages. It also grants
              permission to electronically copy and to print in hard copy
              portions (one copy only) of any page of this material for
              personal reference only. Copyright in all material on this
              website (unless otherwise indicated) is held by Velveer and the
              respective organizations. A written permission of the Copyright
              holder must be obtained for any use of this material other than
              for purposes permitted by law.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Cancellation & Refund Policy
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              In case of a refund request arising from
              customer/clients/participants, it will be considered on a case-by-case
              basis, which may attract 8% of the fee paid toward the
              administrative process by Velveer Corporate Solutions Pvt Ltd.
            </p>

             <h2 className="text-2xl font-semibold mt-8 mb-4">
              Privacy Statement
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Any personal information you provide will be held only for the
              reason specified at the point of collection. Personal and contact
              information you submit on this website will be held in a database.
              From time to time, we may send you information about the Program.
              We will not sell, license, or trade your personal details to any
              third party.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>

            <p className="text-lg leading-relaxed mb-6">
              In no event will we be liable for any loss or damage, including
              without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits
              arising out of, or in connection with, the use of this website.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Through this website, you can link to other websites that are not
              under the control of Velveer Corporate Solutions Pvt Ltd. We have
              no control over the nature, content, and availability of those
              sites. The inclusion of any links does not necessarily imply a
              recommendation or endorse the views expressed within them.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Every effort is made to keep the website up and running smoothly.
              However, Velveer Corporate Solutions Pvt Ltd takes no
              responsibility for, and will not be liable for, the website being
              temporarily unavailable due to technical issues beyond our
              control.
            </p>

            <p className="text-lg leading-relaxed">
              In case of refund request arising out of
              customer/clients/participants, it will be considered on a
              case-by-case basis, which may attract 8% of the fee paid toward
              the administrative process by Velveer Corporate Solutions Pvt Ltd.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default PrivacyPolicy;