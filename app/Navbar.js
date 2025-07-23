"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'glass-nav-scrolled py-3' 
        : 'glass-nav py-5'
    }`}>
      <div className="w-full">
        <div className="w-full">
          {/* Mobile Layout */}
          <div className="grid grid-cols-3 items-center h-16 md:hidden">
            {/* Mobile: Left section - Menu button */}
            <div className="flex items-center justify-start">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex items-center justify-center group"
              >
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

            {/* Mobile: Center section - Logo */}
            <div className="flex items-center justify-center">
              <Link href="/" className="group flex items-center">
                <Image
                  src="/logo.jpeg"
                  alt="LL Resort"
                  width={120}
                  height={40}
                  className="object-contain h-10 w-auto"
                />
              </Link>
            </div>

            {/* Mobile: Right section - Empty */}
            <div></div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block px-24">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="w-1.5"></div>
                <Link href="/">
                  <Image
                    src="/logo.jpeg"
                    alt="LL Resort"
                    width={120}
                    height={40}
                    className="object-contain h-12 w-auto"
                  />
                </Link>
              </div>
              
              <div className="flex items-center justify-center flex-1">
                <NavigationMenu>
                  <NavigationMenuList className="gap-4">
                    <NavigationMenuItem>
                      <Link href="/" className={`${navigationMenuTriggerStyle()} !text-xl !bg-transparent hover:!bg-transparent focus:!bg-transparent`}>
                        Golf
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/" className={`${navigationMenuTriggerStyle()} !text-xl !bg-transparent hover:!bg-transparent focus:!bg-transparent`}>
                        Dining
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/" className={`${navigationMenuTriggerStyle()} !text-xl !bg-transparent hover:!bg-transparent focus:!bg-transparent`}>
                        Fitness & Pool
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/" className={`${navigationMenuTriggerStyle()} !text-xl !bg-transparent hover:!bg-transparent focus:!bg-transparent`}>
                        Events
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/" className={`${navigationMenuTriggerStyle()} !text-xl !bg-transparent hover:!bg-transparent focus:!bg-transparent`}>
                        Membership
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/" className={`${navigationMenuTriggerStyle()} !text-xl !bg-transparent hover:!bg-transparent focus:!bg-transparent`}>
                        About
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/" className={`${navigationMenuTriggerStyle()} !text-xl !bg-transparent hover:!bg-transparent focus:!bg-transparent`}>
                        Log in
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="w-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="py-6 border-t border-[#374b19]/20">
            <div className="flex flex-col space-y-6">
              <Link href="/" className="text-black hover:text-black transition-all font-medium text-lg tracking-wider text-center">
                Golf
              </Link>
              <Link href="/" className="text-black hover:text-black transition-all font-medium text-lg tracking-wider text-center">
                Dining
              </Link>
              <Link href="/" className="text-black hover:text-black transition-all font-medium text-lg tracking-wider text-center">
                Fitness & Pool
              </Link>
              <Link href="/" className="text-black hover:text-black transition-all font-medium text-lg tracking-wider text-center">
                Events
              </Link>
              <Link href="/" className="text-black hover:text-black transition-all font-medium text-lg tracking-wider text-center">
                Membership
              </Link>
              <Link href="/" className="text-black hover:text-black transition-all font-medium text-lg tracking-wider text-center">
                About
              </Link>
              <Link href="/" className="text-black hover:text-black transition-all font-medium text-lg tracking-wider text-center">
                Log in
              </Link>
            </div>
          </div>
        </div>
    </nav>
  );
}