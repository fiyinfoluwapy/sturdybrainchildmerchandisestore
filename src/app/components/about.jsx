'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, StarIcon, ZapIcon, UsersIcon } from 'lucide-react';

const colorPalette = [
  '#BCB2B1', // Black Shadows
  '#5B6366', // Black Coral
  '#0F1110', // Chinese Black
  '#4B0800', // Bulgarian Rose
  '#9C1205', // Rufous
];

// Features Data
const features = [
  {
    title: 'Authentic Clothing',
    description:
      "Crafted for the streets, built with purpose. Sturdy Brainchild isn't just merch — it's a statement...",
    icon: ShieldCheckIcon,
  },
  {
    title: 'Premium Material',
    description:
      "We don't play when it comes to quality. Only the best threads make the cut...",
    icon: StarIcon,
  },
  {
    title: 'Limited Drops',
    description:
      "You don't wear what everyone else wears. Our collections are exclusive...",
    icon: ZapIcon,
  },
  {
    title: 'Community-Driven Vibes',
    description:
      "By bikers. For creatives. Built for the bold. This brand was born in Lagos...",
    icon: UsersIcon,
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const FeaturesSection = () => {
  const [bgColors, setBgColors] = useState(
    features.map((_, i) => colorPalette[i % colorPalette.length])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColors((prevColors) =>
        prevColors.map((_, i) => {
          const currentIndex = colorPalette.indexOf(prevColors[i]);
          const nextIndex = (currentIndex + 1) % colorPalette.length;
          return colorPalette[nextIndex];
        })
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="about"
      className="w-full bg-[#0F1110] py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const bgColor = bgColors[index];
            const isGrey = bgColor === '#BCB2B1' || bgColor === '#5B6366';

            return (
              <motion.div
                key={index}
                className={`group relative p-6 rounded-2xl shadow-md hover:shadow-[#D91111]/40 transition-all duration-500 hover:-translate-y-2 hover:scale-105 ease-in-out`}
                style={{
                  backgroundColor: bgColor,
                  transition: 'background-color 1s ease-in-out',
                }}
                variants={cardVariants}
              >
                <div className="relative z-10">
                  <div
                    className={`h-12 w-12 rounded-xl ${
                      isGrey ? 'bg-white/20' : 'bg-[#D91111]/10'
                    } flex items-center justify-center mb-6 group-hover:bg-[#D91111]/30 transition-colors duration-300`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isGrey ? 'text-white' : 'text-[#D91111]'
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-extrabold mb-3 tracking-tight ${
                      isGrey ? 'text-black' : 'text-white'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      isGrey ? 'text-black' : 'text-[#BCB2B1]'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 border border-[#4B0800] rounded-2xl group-hover:border-[#D91111]/40 transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
