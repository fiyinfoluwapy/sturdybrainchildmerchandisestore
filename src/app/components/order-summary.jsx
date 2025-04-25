import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/cartcontext';
import { ShoppingBag, Truck, ShoppingCart} from 'lucide-react'; 

export const OrderSummary = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 100 ? 0 : 12.99;
  const total = subtotal + shipping;

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
        <p className="text-sm mt-2 text-[#BCB2B1]">
          Shipping will be calculated at checkout.
        </p>
      </div>

      <div className="border-t border-[#5B6366] mt-4 pt-4">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold">Total</span>
          <span className="text-lg font-bold">₦{total.toFixed(2)}</span>
        </div>

        {/* Proceed to Checkout Button with Icon */}
        <button className="w-full bg-[#D91111] text-white py-3 px-4 rounded-md hover:bg-[#9C1205] transition-colors flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          <span>Proceed to Checkout</span>
          <Truck size={18}  />
        </button>

        {/* Continue Shopping Button */}
        <Link
          href="/shop"
          className="w-full mt-4 inline-flex items-center justify-center bg-[#0033ff] text-white text-sm font-medium py-2 px-4 rounded-md hover:opacity-90 transition-all"
        >
          <ShoppingBag size={16} className="mr-2" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};
