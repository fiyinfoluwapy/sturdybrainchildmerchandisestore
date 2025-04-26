'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/cartcontext';

const ProductDetails = ({ product, allProducts }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [showModal, setShowModal] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const normalizeCategories = (category) => {
    return Array.isArray(category) ? category : [category];
  };

  if (!Array.isArray(allProducts)) {
    return <p>Error: Product data is not available.</p>;
  }

  useEffect(() => {
    const currentProductCategories = normalizeCategories(product.category);
    const related = allProducts.filter((item) => {
      if (item.id === product.id) return false;
      const itemCategories = normalizeCategories(item.category);
      return itemCategories.some((cat) => currentProductCategories.includes(cat));
    });
    setRelatedProducts(related);
  }, [product, allProducts]);

  const handleImageClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor,
      quantity: 1,
    };

    addToCart(productToAdd);
    router.push('/cart');
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full h-[400px] relative cursor-pointer" onClick={handleImageClick}>
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold tracking-wide">{product.name}</h1>
          <p className="text-2xl text-[#D91111] font-semibold">₦{product.price.toLocaleString()}</p>
          <p className="text-[#BCB2B1] text-sm">{product.description}</p>

          {/* Size Options */}
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#BCB2B1]">Size</h2>
            <div className="flex space-x-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border-2 rounded-full font-bold ${selectedSize === size
                      ? 'border-[#D91111] text-white'
                      : 'border-gray-500 text-gray-400'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#BCB2B1]">Color</h2>
            <div className="flex space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border-2 rounded-full font-bold ${selectedColor === color
                      ? 'border-[#D91111] text-white'
                      : 'border-gray-500 text-gray-400'
                    }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 mt-6 w-full">
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#D91111] hover:bg-[#9C1205] text-white font-bold py-3 rounded-full transition flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>

            <button
              onClick={() => router.push('/shop')}
              className="w-full border border-[#D91111] text-[#D91111] hover:bg-[#D91111] hover:text-white font-bold py-3 rounded-full transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-4xl">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="object-contain rounded-2xl"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Related Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {relatedProducts.map((relatedProduct) => (
          <div
            key={relatedProduct.id}
            className="bg-[#0F1110] border border-[#5B6366] rounded-lg p-4 hover:bg-[#1a1c1b] cursor-pointer flex flex-col items-center"
            onClick={() => router.push(`/product/${relatedProduct.id}`)}
          >
            <Image
              src={relatedProduct.image}
              alt={relatedProduct.name}
              width={250}
              height={250}
              className="w-full h-auto object-cover object-center rounded-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-white">{relatedProduct.name}</h3>
              <p className="text-[#D91111]">₦{relatedProduct.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default ProductDetails;
