import React from 'react';
import products from '@/app/data/products'; // Import the local product data
import ProductDetails from '../../components/productdetails';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }) {
  const { id } = params; // No need to await params, it's already available

  // Find the product with the corresponding ID
  const product = products.find((p) => p.id === id);

  if (!product) return notFound(); // Handle invalid product ID (not found)

  return (
    <main className="pt-28 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#0F1110] min-h-screen text-white">
      <ProductDetails product={product} allProducts={products} />
    </main>
  );
}
