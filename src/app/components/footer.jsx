'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  InstagramIcon,
  YoutubeIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  BikeIcon,
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="relative bg-[#0F1110] text-white overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4B0800] via-[#9C1205] to-[#4B0800] animate-gradient"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Brand section */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <BikeIcon size={32} className="text-[#D91111] animate-bounce" />
              <h2 className="text-3xl font-bold tracking-wider">
                <span className='text-[#D91111]'>STURDY</span> BRAINCHILD
              </h2>

              
            </div>
            <p className="text-[#BCB2B1] max-w-md mb-8">
              Elevating urban culture through premium streetwear and
              cutting-edge bike gear. Born in the streets, built for the bold.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-6">
              {[
                { icon: InstagramIcon, link: '#', label: 'Instagram' },
                { icon: YoutubeIcon, link: '#', label: 'YouTube' },
                { icon: PhoneIcon, link: '#', label: 'WhatsApp' },
                { icon: MailIcon, link: '#', label: 'Email' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.link}
                    className="relative group"
                    aria-label={social.label}
                  >
                    <Icon
                      size={24}
                      className={`
                        transform transition-all duration-300 ease-out
                        group-hover:text-[#D91111] group-hover:scale-110
                        animate-float
                      `}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                      }}
                    />
                    <span
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm"
                    >
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Newsletter section */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div
              className="bg-[#0F1110]/80 p-8 rounded-lg border border-[#5B6366] 
              transform hover:scale-[1.02] transition-transform duration-300
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#4B0800] before:to-[#9C1205] 
              before:opacity-0 before:hover:opacity-10 before:transition-opacity before:duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
              <p className="text-[#BCB2B1] mb-6">
                Subscribe to get exclusive drops, special offers, and
                behind-the-scenes content.
              </p>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#0F1110] border border-[#5B6366] rounded-lg px-4 py-3 
                    focus:outline-none focus:border-[#D91111] transition-colors duration-300
                    placeholder:text-[#5B6366]"
                  required
                />
                <button
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2
                    bg-[#D91111] hover:bg-[#9C1205] text-white p-2 rounded-md
                    transition-all duration-300 ease-out"
                >
                  <ArrowRightIcon
                    size={20}
                    className={`transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                  />
                </button>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Bottom section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="border-t border-[#5B6366] pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#BCB2B1] text-sm">
              © 2024 <span className='text-[#D91111]'>STURDY</span> BRAINCHILD. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-[#BCB2B1] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#BCB2B1] hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;
