'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from 'lucide-react';
import ProductCard from './productcard';
import products from '../data/products';

export const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // Limit to first 4 products
  const featuredProducts = products.slice(0, 6); 

  const handleViewAll = () => {
    router.push('/shop');
  };

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('featuredGear');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check immediately on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#0F1110] py-24" id="featuredGear">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 relative">
              Featured Gear
              <span
                className={`absolute left-0 -bottom-1 h-1 w-full bg-[#D91111] rounded-sm transition-all duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-2'}`}
              ></span>
            </h2>
            <p className="text-[#BCB2B1]">Latest drops that set you apart</p>
          </div>

          <button
            onClick={handleViewAll}
            className="hidden md:flex items-center space-x-2 text-[#D91111] hover:text-[#9C1205] transition-colors duration-300"
          >
            <span>View All</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={handleViewAll}
            className="inline-flex items-center space-x-2 text-[#D91111] hover:text-[#9C1205] transition-colors duration-300"
          >
            <span>View All</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
