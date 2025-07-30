// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#082A5B] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Velveer Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Velveer</h3>
          <p className="text-gray-300 mb-4">
            Business Management and Consulting Company specializing in cybersecurity services and digital transformation solutions.
          </p>
          <div className="flex items-center mb-2">
            <Mail className="h-4 w-4 mr-2 text-gray-400" />
            <a href="mailto:info@velveer.com" className="text-gray-300 hover:text-white">info@velveer.com</a>
          </div>
          <div className="flex items-center mb-2">
            <Phone className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-gray-300">+91 (xxx) xxx-xxxx</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-gray-300">India</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <Link href="#" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Our Team</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Training</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <Link href="#" className="hover:text-white">IT Governance and Strategy</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">GRC - Governance, Risk and Compliance</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Automotive Security</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Cyber Security Assessment</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">AI Consulting</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">ERP Advisory</Link>
            </li>
          </ul>
        </div>

        {/* Business Hours and Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
          <div className="text-gray-300">
            <p>Monday - Friday: <span className="ml-2">9:00 AM - 6:00 PM</span></p>
            <p>Saturday: <span className="ml-2">10:00 AM - 4:00 PM</span></p>
            <p>Sunday: <span className="ml-2">Closed</span></p>
          </div>

          <div className="bg-[#0A3874] p-4 mt-6 rounded">
            <h4 className="text-md font-semibold mb-2">Need Urgent Support?</h4>
            <p className="text-gray-300 text-sm">For critical security issues, we provide 24/7 emergency response services.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
        <p className="text-gray-400 text-sm">© 2024 Velveer. All rights reserved.</p>
        <div className="space-x-4 text-sm">
          <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}