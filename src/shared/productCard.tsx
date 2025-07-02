import { useState } from "react";
import type { CartAction, Product } from "../utils/interface";
import { toast } from 'react-toastify';

interface CardProps {
  product: Product;
  dispatch: React.Dispatch<CartAction>;
}

const ProductCard = ({ product, dispatch }: CardProps) =>  {
  const [qty, setQty] = useState(1);

  return (
    <div className="border rounded-lg p-4 shadow flex flex-col">
      <img
        src={product.img}
        alt={product.prod_name}
        className="w-full h-48 object-cover rounded"
      />
      <div className="flex flex-col items-start">

            <h2 className="text-lg font-bold mt-2">{product.prod_name}</h2>
            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
            <p className="text-sm font-bold text-gray-700">${product.price}</p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4">
        <div className="flex items-center border rounded">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-1 text-lg text-blue-950 cursor-pointer"
          >
            –
          </button>
          <span className="px-4">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-1 text-lg text-blue-950 cursor-pointer"
          >
            +
          </button>
        </div>

        <button
          onClick={() => {
            dispatch({ type: "ADD", payload: { product, qty } });
            toast.success("Item added to cart!");
          }}
          className="bg-blue-950 text-white px-4 py-1 rounded cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard