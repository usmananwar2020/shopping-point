import Cookies from "js-cookie";
import type { CartItem } from "./interface";

const CART_COOKIE_KEY = "cart";

export const saveCartToCookies = (cart: CartItem[]) => {
  Cookies.set(CART_COOKIE_KEY, JSON.stringify(cart), { expires: 1 }); // expires in 1 day
};

export const loadCartFromCookies = (): CartItem[] => {
  const cookieData = Cookies.get(CART_COOKIE_KEY);
  try {
    return cookieData ? JSON.parse(cookieData) : [];
  } catch (e) {
    console.error("Failed to parse cart cookies:", e);
    return [];
  }
};

export const clearCartFromCookies = () => {
  Cookies.remove(CART_COOKIE_KEY);
};
