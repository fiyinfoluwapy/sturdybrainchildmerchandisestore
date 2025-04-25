'use client';

import React from 'react';
import { CartItem } from './cartitem';
import { ChevronRightIcon } from 'lucide-react';
import { useCart } from '../context/cartcontext'; // ✅ using the custom hook

export const CartPage = () => {
  const { cartItems } = useCart(); // ✅ no more useContext directly

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-[#0F1110] text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">
            Shopping Cart ({cartItems.length})
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-[#0F1110] border border-[#5B6366] rounded-lg divide-y divide-[#5B6366]">
              {cartItems.length > 0 ? (
                cartItems.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <p className="p-6 text-[#BCB2B1]">Your cart is empty 🛒</p>
              )}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-[#0F1110] border border-[#5B6366] rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 text-[#BCB2B1]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₦${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₦{tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t border-[#5B6366] mt-4 pt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">₦{total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-[#D91111] text-white py-3 px-4 rounded-md hover:bg-[#9C1205] transition-colors flex items-center justify-center">
                  <span>Proceed to Checkout</span>
                  <ChevronRightIcon size={20} className="ml-2" />
                </button>
                {shipping === 0 && (
                  <p className="text-sm text-[#BCB2B1] mt-4 text-center">
                    ✨ You've qualified for free shipping! ✨
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
