"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // add shadow after scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logo.png" alt="Simon and Sons" width={150} height={50} className="h-12 w-auto" />
          </Link>

          {/* Nav Menu */}
          <nav className="hidden md:flex space-x-20 items-center text-[14px] font-medium">
            <AnimatedLink href="/" active={pathname === '/'}>HOME</AnimatedLink>
            <AnimatedLink href="/about" active={pathname === '/about'}>ABOUT</AnimatedLink>
            <AnimatedLink href="/our-people" active={pathname === '/our-people'}>OUR TEAM</AnimatedLink>
            <AnimatedLink href="/services" active={pathname === '/services'}>OUR SERVICES</AnimatedLink>
            <AnimatedLink href="/training" active={pathname === '/training'}>TRAINING</AnimatedLink>
            <AnimatedLink href="/contact" active={pathname === '/contact'}>CONTACT</AnimatedLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children, active }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`relative group text-gray-500 hover:text-cyan-600 ${active ? 'text-cyan-600' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-full bg-cyan-600 transform transition-transform duration-300 ease-in-out ${
          hovered || active ? 'scale-x-100' : 'scale-x-0'
        } origin-left`}
      />
    </Link>
  );
};
