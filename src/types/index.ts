
export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewsCount: number;
  stock: number;
  tags?: string[];
  specifications?: Record<string, string>;
  dataAiHint: string; // Added dataAiHint as a required property
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
