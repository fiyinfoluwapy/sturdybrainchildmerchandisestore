// components/ProductCard.jsx
import React from 'react';
import { EyeIcon } from 'lucide-react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      key={product.id}
      className="group relative cursor-pointer"
      onClick={() => onClick(product.id)}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#4B0800]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-src={product.image} bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
        {product.inStock === false && (
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
  );
};

export default ProductCard;
