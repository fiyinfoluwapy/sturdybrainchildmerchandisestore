import React from 'react';
import { Minus, Plus, Trash2Icon } from 'lucide-react';
import { useCart } from '../context/cartcontext'; // Import useCart hook

export const CartItem = ({ item }) => {
  const { id, name, description, price, quantity, size, color, image } = item;
  const { updateQuantity, removeFromCart } = useCart(); // Access cart functions from context

  // Handle quantity change (increase or decrease)
  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity); // Update quantity in cart
    }
  };

  return (
    <div className="p-6 flex flex-col sm:flex-row items-start gap-6">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-[#BCB2B1] text-sm">{description}</p>
            {/* Show selected size and color */}
            <p className="text-[#BCB2B1] text-sm">Size: {size}</p>
            <p className="text-[#BCB2B1] text-sm">Color: {color}</p>
          </div>
          <div className="mt-2 sm:mt-0 text-right">
            <p className="font-medium">₦{(price * quantity).toFixed(2)}</p>
            <p className="text-[#BCB2B1] text-sm">₦{price.toFixed(2)} each</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-1 hover:bg-[#5B6366] rounded transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-1 hover:bg-[#5B6366] rounded transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
          <button
            className="text-[#BCB2B1] hover:text-[#D91111] transition-colors flex items-center"
            aria-label="Remove item"
            onClick={() => removeFromCart(id)} // Remove item from cart
          >
            <Trash2Icon size={16} className="mr-1" />
            <span className="text-sm">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};
