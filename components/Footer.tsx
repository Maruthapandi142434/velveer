// components/Footer.tsx

import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Experience Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Experience our Expertise</h3>
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <div className="w-12 h-12 bg-white/30 rounded-full"></div>
              </div>
            </div>
            <p className="mb-4">To feel the experience, get in touch with us at</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 44 4380 6826</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@simonnsons.com</span>
              </div>
            </div>
          </div>

          {/* Services Column 1 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Prepress Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Digital Publishing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  eLearning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Conversion Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Cartography Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Translation & Transcription Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Shared Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Scanning & Digitization Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Geospatial & Mapping Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Web Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Robotics and Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Reality Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Design Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Founder
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Executive Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Core Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Service Offering
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-200">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-6">
              <p className="font-bold">SSPDL Building,</p>
              <p>Alpha City,Gamma Block,</p>
              <p>5th Floor, Navalur,</p>
              <p>Chennai – 600 130</p>
              <p className="mt-2">+91 44 4380 6826</p>
              <p>info@simonnsons.com</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-12 pt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">Copyright © 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}