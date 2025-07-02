// src/components/CartItem.tsx
import React from "react";
import { Trash2 } from "lucide-react";
import type { Product } from "../utils/interface";

interface Props {
  item: Product & { quantity: number };
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem: React.FC<Props> = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      {/* Left: Image + Info */}
      <div className="flex items-center gap-4">
        <img
          src={item.img}
          alt={item.prod_name}
          className="w-20 h-20 object-cover rounded"
        />
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold">{item.prod_name}</h2>
          <p className="text-sm text-left text-gray-600 line-clamp-2">{item.description}</p>
          <p className="text-sm font-bold text-gray-600">${item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded">
          <button onClick={onDecrease} className="px-1 md:px-2 py-1 text-lg cursor-pointer">-</button>
          <span className="px-1 md:px-3">{item.quantity}</span>
          <button onClick={onIncrease} className="px-1 md:px-2 py-1 text-lg cursor-pointer">+</button>
        </div>
        <button onClick={onRemove} className="text-red-500 hover:text-red-700 cursor-pointer">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
