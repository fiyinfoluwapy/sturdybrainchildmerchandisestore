'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, EyeIcon } from 'lucide-react';

export const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);

  const products = [
    {
      id: '1',
      name: 'Urban Rider Leather Jacket',
      price: 299.99,
      image:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80',
      category: 'Jackets',
      inStock: true,
    },
    {
      id: '2',
      name: 'Street Cred Hoodie',
      price: 89.99,
      image:
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80',
      category: 'Hoodies',
      inStock: true,
    },
    {
      id: '3',
      name: 'Lagos Nights Tee',
      price: 49.99,
      image:
        'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80',
      category: 'T-Shirts',
      inStock: false,
    },
    {
      id: '4',
      name: "Biker's Paradise Denim",
      price: 159.99,
      image:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80',
      category: 'Pants',
      inStock: true,
    },
  ];

  const handleProductClick = (productId) => {
    console.log(`Navigating to product ${productId}`);
    // navigation logic here (e.g., router.push(`/product/${productId}`))
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('featuredGear');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#0F1110] py-24" id="featuredGear">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 relative">
              Featured Gear
              {/* Always-visible underline */}
              <span
                className={`absolute left-0 -bottom-1 h-1 w-full bg-[#D91111] rounded-sm transition-all duration-500 ${
                  isVisible ? 'transform translate-y-0' : 'transform translate-y-2'
                }`}
              ></span>
            </h2>
            <p className="text-[#BCB2B1]">Latest drops that set you apart</p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-[#D91111] hover:text-[#9C1205] transition-colors duration-300">
            <span>View All</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#4B0800]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-[#D91111] hover:bg-[#9C1205] text-white px-6 py-3 rounded-md flex items-center space-x-2 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <EyeIcon className="w-4 h-4" />
                    <span>Quick View</span>
                  </button>
                </div>
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-[#0F1110]/80 px-3 py-1 rounded-full">
                  <span className="text-[#BCB2B1] text-sm">{product.category}</span>
                </div>
                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-[#D91111] px-3 py-1 rounded-full">
                    <span className="text-white text-sm">Sold Out</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-2">
                <h3 className="text-white font-medium group-hover:text-[#D91111] transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-[#BCB2B1]">₦{product.price.toLocaleString()}</span>
                  <div className="h-px w-12 bg-[#D91111]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center space-x-2 text-[#D91111] hover:text-[#9C1205] transition-colors duration-300">
            <span>View All</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

