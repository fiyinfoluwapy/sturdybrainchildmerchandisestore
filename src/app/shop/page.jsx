'use client';

import React from 'react';
import { Navbar } from '@/app/components/navbar';
import { Shop } from '@/app/components/shop';


// import Footer from '@/components/Footer';

const ShopPage = () => {
  return (
    <div className="bg-[#0F1110] text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Shop />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default ShopPage;
