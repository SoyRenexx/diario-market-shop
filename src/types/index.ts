
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  originalPrice?: number;
  discountPercentage?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
