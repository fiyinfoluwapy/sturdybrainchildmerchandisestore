'use client';

import React from 'react';
import { Navbar } from '@/app/components/navbar';
import Shop from '@/app/components/shop'; // No curly braces here for default import

// import Footer from '@/components/Footer';

const ShopPage = () => {
  return (
    <div className="bg-[#0F1110] text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 sm:mt-16">
        <Shop />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default ShopPage;
