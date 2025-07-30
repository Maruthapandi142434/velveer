// components/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Simon and Sons" width={120} height={40} className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">
              HOME
            </Link>
            <Link href="#" className="text-gray-600 hover:text-cyan-500 font-medium">
              ABOUT US
            </Link>
            <Link href="#" className="text-gray-600 hover:text-cyan-500 font-medium">
              OUR PEOPLE
            </Link>
            <Link href="#" className="text-gray-600 hover:text-cyan-500 font-medium">
              SERVICE OFFERING
            </Link>
            <Link href="#" className="text-gray-600 hover:text-cyan-500 font-medium">
              SOLUTIONS
            </Link>
            <Link href="#" className="text-gray-600 hover:text-cyan-500 font-medium">
              CAREERS
            </Link>
            <Link href="#" className="text-gray-600 hover:text-cyan-500 font-medium">
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}