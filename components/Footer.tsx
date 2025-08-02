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
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Our Team */}
        <div>
          <h3 className="text-lg font-bold mb-2">Our Team</h3>
          <p className="text-sm font-semibold mb-2">Experience our Expertise</p>
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
          <h3 className="text-lg font-bold mb-4">Service Offering</h3>
          <ul className="text-sm space-y-2 text-white">
            {[
              'IT Governance and Strategy',
              'GRC- Governance, Risk and Compliance',
              'Automotive Security',
              'Cyber Security Assessment',
              'AI Consulting',
              'ERP Advisory',
              'Expert Resource Consulting',
              'Training and Coaching',
            ].map((item, idx) => (
              <li key={idx} className="hover:underline">{item}</li>
            ))}
          </ul>
        </div>

        {/* Contents */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contents</h3>
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
          <h3 className="text-lg font-bold mb-4">Address</h3>
          <p className="text-sm mb-1">Velveer Corporate Solutions Private Limited,</p>
          <p className="text-sm mb-1">3rd Floor , 14 Periyar Road</p>
          <p className="text-sm mb-1">T.Nagar, Chennai</p>
          <p className="text-sm mb-1">Tamilnadu - 600 017</p>
          <p className="text-sm mb-1">India</p>
          <p className="text-sm mb-1">+91 44 4380 6826</p>
          <p className="text-sm mb-3">info@simonnsons.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
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
          <p className="text-gray-400 text-sm">Copyright © 2024. All rights reserved.</p>
          <div className="space-x-4 text-sm text-gray-400 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
