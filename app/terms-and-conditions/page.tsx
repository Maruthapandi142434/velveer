"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
    

      {/* Split Header Section - Similar to About Page */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] lg:min-h-[450px] relative">
        {/* Right Side - Image */}
        <div className="relative w-full h-64 md:h-full order-first md:order-last">
          <Image
            src="https://res.cloudinary.com/daggx9p24/image/upload/v1754370353/428_tlgebm.jpg" // Replace with your Terms & Conditions image
            alt="Terms and Conditions"
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
              Terms and <span className="text-teal-600">Conditions</span>
            </h1>
            <div className="h-0.5 w-12 bg-teal-600 mb-2 md:mb-4"></div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content Section - Adjusted for Full Width */}
    <section className="py-8 md:py-12 lg:py-16 text-gray-700 px-4 md:px-8 lg:px-16 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Terms and Conditions Text */}
    <div className="prose prose-lg max-w-none">
      {/* Use 'prose' class for styling, customize prose styles further down */}
      <p className="text-lg leading-relaxed">
        Welcome to our website. If you continue to browse and use this website
        you are agreeing to comply with and be bound by the following terms and
        conditions of use, which together with our privacy policy govern
        Velveer Corporate Solutions Pvt Ltd relationship with you through to
        this website. The term 'you' refers to the user or viewer of our
        website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Website Usage</h2>
      <ul className="list-disc list-inside">
        <li className="text-lg leading-relaxed mb-2">
          The content of the pages of this website is for your general
          information and use only. It is subject to change without notice.
        </li>
        <li className="text-lg leading-relaxed mb-2">
          Your use of any information or materials on this website is entirely
          at your own risk, for which we shall not be liable. It shall be your
          own responsibility to ensure that any products, services or
          information available through this website meet your specific
          requirements.
        </li>
        <li className="text-lg leading-relaxed mb-2">
          This website contains material which is owned by or licensed to us.
          This material includes, but is not limited to, the design, layout,
          look, appearance graphics, educational contents like mindmap, video,
          animations. Reproduction is prohibited other than in accordance with
          the copyright notice, which forms part of these terms and conditions.
        </li>
        <li className="text-lg leading-relaxed mb-2">
          All trademarks of other entities reproduced in this website are
          acknowledged.
        </li>
        <li className="text-lg leading-relaxed mb-2">
          Unauthorized use of this website may give rise to a claim for damages
          and/or be a criminal offence.
        </li>
        <li className="text-lg leading-relaxed mb-2">
          From time to time this website may also include links to other
          websites. These links are provided for your convenience to provide
          further information. They do not signify that we endorse the
          website(s). We have no responsibility for the content of the linked
          website(s).
        </li>
        <li className="text-lg leading-relaxed mb-2">
          You may not create a link to this website from another website or
          document without Velveer Corporate Solutions Pvt Ltd. prior written
          consent.
        </li>
        <li className="text-lg leading-relaxed mb-2">
          Your use of this website and any dispute arising out of such use of
          the website is subject to the laws of India or other regulatory
          authority.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Cancellation & Refund Policy</h2>
      <p className="text-lg leading-relaxed mb-4">
        Velveer Corporate Solutions Pvt Ltd. believes in meeting commitments
        towards customers. However, in the unlikely event of cancellation of
        training/service by Velveer Corporate Solutions Pvt Ltd. the fee paid
        would be refunded in full to customer/clients/participants.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        In case of refund request arising out of customer/clients/participants,
        will be considered case to case basis which may attract 8% of the fee
        paid toward administrative process Velveer Corporate Solutions Pvt Ltd.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
      <p className="text-lg leading-relaxed mb-4">
        The information contained in this website is for general information
        purposes only. The information is provided by Velveer Corporate
        Solutions Pvt Ltd. and while we endeavor to keep the information up to
        date and correct, we make no representations or warranties of any kind,
        express or implied, about the completeness, accuracy, reliability,
        suitability or availability with respect to the website or the
        information, products, services, or related graphics contained on the
        website for any purpose. Any reliance you place on such information is
        therefore strictly at your own risk.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        In no event will we be liable for any loss or damage including without
        limitation, indirect or consequential loss or damage, or any loss or
        damage whatsoever arising from loss of data or profits arising out of,
        or in connection with, the use of this website.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Through this website you are able to link to other websites which are
        not under the control of Velveer Corporate Solutions Pvt Ltd. We have no
        control over the nature, content and availability of those sites. The
        inclusion of any links does not necessarily imply a recommendation or
        endorse the views expressed within them.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Every effort is made to keep the website up and running smoothly.
        However, Velveer Corporate Solutions Pvt Ltd takes no responsibility
        for, and will not be liable for, the website being temporarily
        unavailable due to technical issues beyond our control.
      </p>
      <p className="text-lg leading-relaxed">
        In case of refund request arising out of customer/clients/participants,
        will be considered case to case basis which may attract 8% of the fee
        paid toward administrative process Velveer Corporate Solutions Pvt Ltd.
      </p>
    </div>
  </div>
</section>


    </div>
  );
};

export default TermsAndConditions;