export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export type ProductDetails = {
  id: number;
  sz:string;
  color:string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getCartTotal: () => number;
}