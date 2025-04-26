// cartpage.jsx
import React from 'react';
import { CartItem } from './cartitem';
import { useCart } from '../context/cartcontext'; //  using the custom hook
import { OrderSummary } from './order-summary';  // Import OrderSummary component

export const CartPage = () => {
  const { cartItems } = useCart(); // No need for removeFromCart here since it's in the context

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
                cartItems.map((item) => (
                  <CartItem key={item.id} item={item} /> // Just pass item, no removeItem
                ))
              ) : (
                <p className="p-6 text-[#BCB2B1]">Your cart is empty 🛒</p>
              )}
            </div>
          </div>
          <div className="lg:col-span-1">
            <OrderSummary /> {/*  OrderSummary component */}
          </div>
        </div>
      </div>
    </div>
  );
};

