'use client';

import React, { useState } from 'react';
import ProductCard from './productcard';
import ProductFilters from './productfilters';
import { ChevronDownIcon, FilterIcon } from 'lucide-react';

export const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const products = [
    {
      id: '1',
      name: 'Daredevil Leather Jacket',
      price: 299.99,
      category: 'jackets',
      image: 'https://...',
      sizes: ['M', 'L', 'XL'],
      colors: ['Black', 'Red'],
      stock: 5,
    },
    {
      id: '2',
      name: 'Urban Combat T-Shirt',
      price: 49.99,
      category: 'tees',
      image: 'https://...',
      sizes: ['S', 'M'],
      colors: ['White'],
      stock: 0,
    },
    // Add more products here...
  ];

  const filteredProducts = products
    .filter((product) => selectedCategory === 'all' || product.category === selectedCategory)
    .filter((product) => selectedSize === 'all' || product.sizes.includes(selectedSize))
    .filter((product) => selectedColor === 'all' || product.colors.includes(selectedColor))
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Mobile Filter Toggle */}
        <button
          className="md:hidden flex items-center justify-between w-full px-4 py-2 bg-[#4B0800] rounded-lg text-white"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span className="flex items-center gap-2">
            <FilterIcon size={20} />
            Filters
          </span>
          <ChevronDownIcon
            size={20}
            className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Filters Sidebar */}
        <div className={`md:w-64 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <ProductFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="flex flex-wrap gap-4 mb-4">
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-[#0F1110] text-white px-4 py-2 rounded-lg border border-[#5B6366] focus:outline-none focus:border-[#D91111]"
            >
              <option value="all">All Sizes</option>
              {[...new Set(products.flatMap((p) => p.sizes))].map((size) => (
                <option key={size} value={size}>
                  {size} ({products.filter((p) => p.sizes.includes(size)).length})
                </option>
              ))}
            </select>

            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="bg-[#0F1110] text-white px-4 py-2 rounded-lg border border-[#5B6366] focus:outline-none focus:border-[#D91111]"
            >
              <option value="all">All Colors</option>
              {[...new Set(products.flatMap((p) => p.colors))].map((color) => (
                <option key={color} value={color}>
                  {color} ({products.filter((p) => p.colors.includes(color)).length})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedSize('all');
              setSelectedColor('all');
              setSortBy('newest');
            }}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg mt-4"
          >
            Clear Filters
          </button>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-[#D91111]">Shop</h1>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0F1110] text-white px-4 py-2 rounded-lg border border-[#5B6366] focus:outline-none focus:border-[#D91111]"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center text-xl text-gray-500">
                No products match your filters. Try adjusting your selections.
              </div>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
