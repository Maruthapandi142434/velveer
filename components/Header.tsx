"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // icon library

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Our Services" },
    { href: "/training", label: "Training" },
    { href: "/expert-resource-consulting", label: "Expert Resource Consulting" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`bg-white sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Simon and Sons"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center text-[14px] font-medium">
            {navLinks.map(({ href, label }) => (
              <AnimatedLink key={href} href={href} active={pathname === href}>
                {label}
              </AnimatedLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-black bg-opacity-90 rounded-md p-4 space-y-2 text-sm">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 border-l-4 ${
                  pathname === href
                    ? "text-cyan-500 border-cyan-500 bg-white"
                    : "text-white border-transparent hover:text-cyan-400"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
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
      className={`relative group text-gray-500 hover:text-cyan-600 ${
        active ? "text-cyan-600" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-full bg-cyan-600 transform transition-transform duration-300 ease-in-out ${
          hovered || active ? "scale-x-100" : "scale-x-0"
        } origin-left`}
      />
    </Link>
  );
};
