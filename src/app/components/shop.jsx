'use client';

import { useState, useEffect, useRef } from 'react';
import ProductFilters from './productfilters';
import ProductCard from './productcard';
import products from '../data/products';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const [isInView, setIsInView] = useState(false);
  const shopRef = useRef(null);

  // Intersection Observer for the "Shop" header animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (shopRef.current) observer.observe(shopRef.current);
    return () => {
      if (shopRef.current) observer.unobserve(shopRef.current);
    };
  }, []);

  useEffect(() => {
    let updatedProducts = products;

    if (selectedCategory !== 'all') {
      updatedProducts = updatedProducts.filter((p) => {
        const categories = Array.isArray(p.category) ? p.category : [p.category];
        return categories.some((cat) => cat.toLowerCase() === selectedCategory.toLowerCase());
      });
    }

    if (selectedSize !== 'all') {
      updatedProducts = updatedProducts.filter((p) => p.sizes.includes(selectedSize));
    }

    if (selectedColor !== 'all') {
      updatedProducts = updatedProducts.filter((p) => p.colors.includes(selectedColor));
    }

    if (selectedPrice === 'lowest') {
      updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
    }
    if (selectedPrice === 'highest') {
      updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, selectedSize, selectedColor, selectedPrice]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-[#0F1110] text-white">
      {/* Filters */}
      <div className="md:w-1/4 w-full">
        <ProductFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          products={products}
        />
      </div>

      {/* Product Grid */}
      <div className="md:w-3/4 w-full">
        {/* Animated Header */}
        <div className="w-full mb-6 pt-20 md:pt-0">
          <h1
            ref={shopRef}
            className="text-3xl font-extrabold text-[#D91111] relative inline-block"
          >
            Shop
            <span
              className={`absolute left-0 bottom-0 h-1 bg-[#D91111] transform origin-left ${isInView ? 'w-full animation-slide' : 'w-0'
                }`}
            ></span>
          </h1>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
