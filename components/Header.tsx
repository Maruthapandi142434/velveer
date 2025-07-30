// components/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';

const services = [
  { name: 'IT Governance and Strategy', href: '/services/it-governance' },
  { name: 'GRC- Governance, Risk and Compliance', href: '/services/grc' },
  { name: 'Automotive Security', href: '/services/automotive-security' },
  { name: 'Cyber Security Assessment', href: '/services/cyber-security' },
  { name: 'AI Consulting', href: '/services/ai-consulting' },
  { name: 'ERP Advisory', href: '/services/erp-advisory' },
  { name: 'Training and Coaching', href: '/services/training' },
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !((dropdownRef.current as any).contains(event.target))) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/logo.png" alt="Simon and Sons" width={120} height={40} className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-cyan-500 hover:text-cyan-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-cyan-500 font-medium">
              About
            </Link>
            <Link href="/our-people" className="text-gray-600 hover:text-cyan-500 font-medium">
              Our Team
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <button
                className="text-gray-600 hover:text-cyan-500 font-medium"
                aria-expanded={isServicesOpen}
              >
                Our Services
                <svg className="fill-current h-4 w-4 inline-block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-xl overflow-hidden z-10 ${isServicesOpen ? 'block' : 'hidden'}`}
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-cyan-500"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/training" className="text-gray-600 hover:text-cyan-500 font-medium">
              Training
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-cyan-500 font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}