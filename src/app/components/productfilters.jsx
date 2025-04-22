'use client';

import React from 'react';

const ProductFilters = ({
  category,
  setCategory,
  priceRange,
  setPriceRange,
}) => {
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className="product-filters bg-[#0F1110] p-4 rounded-lg shadow-lg hidden md:block">
      <h3 className="text-white font-bold text-xl mb-4">Filter Products</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <label htmlFor="category" className="text-white">Category:</label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="mt-2 p-2 rounded-md bg-[#5B6366] text-white border border-[#5B6366] focus:outline-none focus:ring-2 focus:ring-[#D91111] w-full"
        >
          <option value="All">All</option>
          <option value="Jackets">Jackets</option>
          <option value="Hoodies">Hoodies</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Pants">Pants</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label htmlFor="priceRange" className="text-white">Price Range:</label>
        <select
          id="priceRange"
          value={priceRange}
          onChange={handlePriceRangeChange}
          className="mt-2 p-2 rounded-md bg-[#5B6366] text-white border border-[#5B6366] focus:outline-none focus:ring-2 focus:ring-[#D91111] w-full"
        >
          <option value="0-1000">₦0 - ₦1,000</option>
          <option value="1000-5000">₦1,000 - ₦5,000</option>
          <option value="5000-10000">₦5,000 - ₦10,000</option>
          <option value="10000-20000">₦10,000 - ₦20,000</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
