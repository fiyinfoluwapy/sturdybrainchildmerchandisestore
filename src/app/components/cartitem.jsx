// cartitem.jsx
import React, { useState } from 'react';
import { Minus, Plus, Trash2Icon } from 'lucide-react';

export const CartItem = ({ item, removeItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="p-6 flex flex-col sm:flex-row items-start gap-6">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-medium text-lg">{item.name}</h3>
            <p className="text-[#BCB2B1] text-sm">{item.description}</p>
          </div>
          <div className="mt-2 sm:mt-0 text-right">
            <p className="font-medium">₦{(item.price * quantity).toFixed(2)}</p>
            <p className="text-[#BCB2B1] text-sm">₦{item.price.toFixed(2)} each</p>
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
            onClick={() => removeItem(item.id)} // Assumes removeItem is passed as a prop
          >
            <Trash2Icon size={16} className="mr-1" />
            <span className="text-sm">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};
