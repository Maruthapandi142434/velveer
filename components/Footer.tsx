// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0095a8] text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> {/* Responsive gap */}

        {/* Our Team */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Team</h3>
          <p className="text-sm font-medium mb-2">Experience our Expertise</p>
          <p className="text-sm text-white mb-2">
            To feel the experience, get in touch with us at
          </p>
          <p className="text-sm flex items-center gap-2">
            <Phone className="w-4 h-4 text-white" />
            +91 44 4380 6826
          </p>
          <p className="text-sm flex items-center gap-2 mt-1">
            <Mail className="w-4 h-4 text-white" />
            <a href="mailto:info@simonnsons.com" className="hover:underline">
              info@simonnsons.com
            </a>
          </p>
        </div>

        {/* Service Offering */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service Offering</h3>
          <ul className="text-sm space-y-2 text-white">
            {[
              { label: 'IT Governance and Strategy', id: 'it-governance' },
              { label: 'GRC- Governance, Risk and Compliance', id: 'grc' },
              { label: 'Automotive Security', id: 'automotive-cybersecurity' },
              { label: 'Cyber Security Assessment', id: 'cybersecurity-assessment' },
              { label: 'AI Consulting', id: 'ai-transformation' },
              { label: 'ERP Advisory', id: 'erp' },

            ].map(({ label, id }, idx) => (
              <li key={idx}>
                <Link
                  href={`/services#${id}`}
                  className="hover:underline block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Contents */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contents</h3>
          <ul className="text-sm space-y-2 text-white">
            <li>
              <Link href="/" className="hover:underline">HOME</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">ABOUT</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">OUR SERVICES</Link>
            </li>
            <li>
              <Link href="/training" className="hover:underline">TRAINING</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">CONTACT</Link>
            </li>
            <li>
              <Link href="/expert-resource" className="hover:underline">Expert Resource Consulting</Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <div className="mb-4"> {/* Container for Velveer Address */}
             <h4 className="text-base font-medium mb-2">Chennai</h4>{/* Slightly smaller subheading */}
            <p className="text-sm mb-1">Velveer Corporate Solutions Private Limited,</p>
            <p className="text-sm mb-1">3rd Floor , 14 Periyar Road</p>
            <p className="text-sm mb-1">T.Nagar, Chennai ,Tamilnadu - 600 017</p>
            {/* <p className="text-sm mb-1">+91 44 4380 6826</p>
            <p className="text-sm">info@simonnsons.com</p>  */}
          </div>

          <div> {/* Container for 5M Global LLC Address */}
             <h4 className="text-base font-medium mb-2">Dubai</h4> {/* Slightly smaller subheading */}
            <p className="text-sm mb-1">5M Global LLC,</p>
            <p className="text-sm mb-1">Dubai,</p>
            <p className="text-sm mb-1">United Arab Emirates</p>
          </div>


          {/* Social Icons */}
          <div className="flex gap-4 mt-4">  {/* Adjusted marginTop for more space */}
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
  Copyright © {new Date().getFullYear()}. All rights reserved.
</p>

          <div className="space-x-4 text-sm text-gray-400 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms and condition</Link>
            {/* <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}