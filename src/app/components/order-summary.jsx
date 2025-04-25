import React from 'react';
import { useCart } from '../context/cartcontext';  // Import the custom hook to get cart state

export const OrderSummary = () => {
  const { cartItems } = useCart();  // Access cart items from context

  // Calculate the subtotal, tax, shipping, and total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 12.99;  // Free shipping for orders over 100
  const tax = subtotal * 0.08;  // Tax is 8% of subtotal
  const total = subtotal + shipping + tax;  // Total price

  return (
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
        </button>
        {shipping === 0 && (
          <p className="text-sm text-[#BCB2B1] mt-4 text-center">
            ✨ You've qualified for free shipping! ✨
          </p>
        )}
      </div>
    </div>
  );
};
