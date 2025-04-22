'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBagIcon, MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Importing framer-motion for animation

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0); // Default cart count set to 0 initially

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Persist cart items using localStorage
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(parseInt(savedCartItems, 10)); // Parse to integer
    }
  }, []);

  const navLinks = ['Home', 'Shop', 'About', 'Contact'];

  // Update cartItems in localStorage whenever it changes
  useEffect(() => {
    if (cartItems > 0) {
      localStorage.setItem('cartItems', cartItems);
    }
  }, [cartItems]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#D91111] text-black shadow-md' : 'bg-[#0F1110]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link href="/" passHref>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2"
              >
                <Image
                  src="/logo-icon.png"
                  alt="Sturdy Logo Icon"
                  width={32}
                  height={32}
                  priority
                />
                <div className="flex flex-col leading-none">
                  <h1 className="text-xl font-extrabold tracking-wider sm:text-1xl">
                    <span
                      className={`${
                        isScrolled ? 'text-black' : 'text-[#D91111]'
                      }`}
                    >
                      STURDY
                    </span>{' '}
                    <span className="text-white">BRAINCHILD</span>
                  </h1>
                  <span
                    className={`text-xs tracking-wide ${
                      isScrolled ? 'text-white' : 'text-[#5B6366]'
                    } -mt-1`}
                  >
                    URBAN STREETWEAR
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link}`}
                className={`uppercase font-extrabold transition duration-300 ${
                  isScrolled ? 'text-white' : 'text-[#BCB2B1]'
                } hover:text-white`}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingBagIcon className="h-6 w-6 text-white hover:text-black transition duration-300" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-[#D91111] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-[#0F1110]">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link}`}
              className="block text-[#BCB2B1] hover:text-white font-extrabold transition duration-300"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
