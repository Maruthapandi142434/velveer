// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // You can add functionality related to outside clicks here if needed
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleMouseEnter = () => {
    setIsHovered(true)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
            <AnimatedLink href="/" className={`font-medium ${pathname === '/' ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-500'}`}>
              Home
            </AnimatedLink>
            <AnimatedLink href="/about" className={`font-medium ${pathname === '/about' ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-500'}`}>
              About
            </AnimatedLink>
            <AnimatedLink href="/our-people" className={`font-medium ${pathname === '/our-people' ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-500'}`}>
              Our Team
            </AnimatedLink>
            <AnimatedLink href="/services" className={`font-medium ${pathname === '/services' ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-500'}`}>
              Our Services
            </AnimatedLink>
            <AnimatedLink href="/training" className={`font-medium ${pathname === '/training' ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-500'}`}>
              Training
            </AnimatedLink>
            <AnimatedLink href="/contact" className={`font-medium ${pathname === '/contact' ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-500'}`}>
              Contact
            </AnimatedLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} relative overflow-hidden group ${isActive ? 'text-cyan-500' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out ${
          isHovered || isActive ? 'scale-x-100' : 'scale-x-0'
        }`}
      ></span>
    </Link>
  );
};