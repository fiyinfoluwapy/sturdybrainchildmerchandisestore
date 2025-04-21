'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, StarIcon, ZapIcon, UsersIcon } from 'lucide-react';

// Motion Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'Authentic Clothing',
      description:
        "Crafted for the streets, built with purpose. Sturdy Brainchild isn't just merch — it's a statement. Every piece is designed with originality and realness, made for people who move different. No fakes, no fluff. Just pure street-bred authenticity.",
      icon: ShieldCheckIcon,
    },
    {
      title: 'Premium Material',
      description:
        "We don't play when it comes to quality. Only the best threads make the cut. Our fabric is thick, soft, breathable, and built to last. From hoodies to gear, everything feels good, fits better, and looks 🔥.",
      icon: StarIcon,
    },
    {
      title: 'Limited Drops',
      description:
        "You don't wear what everyone else wears. Our collections are exclusive and never overproduced. That means when you cop from us, you're getting rare pieces that stand out. No restocks, no reruns — when it's gone, it's gone.",
      icon: ZapIcon,
    },
    {
      title: 'Community-Driven Vibes',
      description:
        "By bikers. For creatives. Built for the bold. This brand was born in Lagos, built by a real one who lives and breathes the culture. Whether you're into bikes, streetwear, or bold visuals — this is your tribe. We ride together, we grow together.",
      icon: UsersIcon,
    },
  ];

  return (
    <section className="w-full bg-[#0F1110] py-24">
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
            return (
              <motion.div
                key={index}
                className="group relative backdrop-blur-md bg-[#4B0800]/20 p-6 rounded-2xl shadow-md hover:shadow-[#D91111]/40 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ease-in-out"
                variants={cardVariants}
              >  

              
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-[#D91111]/10 flex items-center justify-center mb-6 group-hover:bg-[#D91111]/30 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-[#D91111]" />
                  </div>
                  <h3 className="text-white text-lg font-extrabold mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#BCB2B1] text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 border border-[#4B0800] rounded-2xl group-hover:border-[#D91111]/40 transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
