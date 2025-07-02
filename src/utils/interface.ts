export interface Product {
  id: number;
  prod_name: string;
  description: string;
  price: string;
  img: string;
  quantity?: number; 
}

export interface CartItem extends Product {
  quantity: number;
}

export type CartAction =
  | { type: "ADD"; payload: { product: Product; qty: number } }
  | { type: "INC"; payload: { id: number } }
  | { type: "DEC"; payload: { id: number } }
  | { type: "REMOVE"; payload: { id: number } };