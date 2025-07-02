import React, { createContext, useContext, useEffect, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { CartAction, Product } from '../utils/interface';
import { loadCartFromCookies, saveCartToCookies } from '../utils/cartStorage';

interface CartItem extends Product {
  quantity: number;
}

type CartState = CartItem[];

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  cart: [],
  dispatch: () => {},
});

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const { product, qty } = action.payload;
      const existing = state.find(i => i.id === product.id);
      if (existing) {
        return state.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...state, { ...product, quantity: qty }];
    }
    case 'INC':
      return state.map(i =>
        i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    case 'DEC':
      return state.map(i =>
        i.id === action.payload.id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
    case 'REMOVE':
      return state.filter(i => i.id !== action.payload.id);
    default:
      return state;
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => loadCartFromCookies());

  useEffect(() => {
  saveCartToCookies(cart);
}, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
