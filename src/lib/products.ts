import type { Product, Review } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Smartphone Pro X',
    description: 'Latest model with AI camera and long battery life.',
    longDescription: 'Experience the future with Smartphone Pro X. Featuring a stunning 6.7-inch OLED display, the new A17 Bionic chip, and an advanced triple-camera system with LiDAR. Enjoy all-day battery life and 5G connectivity. Perfect for professionals and tech enthusiasts.',
    price: 799.99,
    originalPrice: 899.99,
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'smartphone tech',
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Electronics',
    brand: 'TechCorp',
    rating: 4.5,
    reviewsCount: 120,
    stock: 50,
    tags: ['smartphone', 'mobile', 'tech'],
    specifications: {
      Screen: '6.7" OLED',
      Processor: 'A17 Bionic',
      RAM: '8GB',
      Storage: '256GB',
      Camera: '48MP Triple-Lens',
    },
  },
  {
    id: '2',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Immersive sound quality with active noise cancellation.',
    longDescription: 'Dive into pure sound with these premium wireless headphones. Featuring industry-leading noise cancellation, crystal-clear audio, and up to 30 hours of battery life. Comfortable over-ear design for extended listening sessions.',
    price: 249.99,
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'headphones audio',
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Electronics',
    brand: 'AudioPhonic',
    rating: 4.8,
    reviewsCount: 250,
    stock: 100,
    tags: ['audio', 'headphones', 'music'],
    specifications: {
      Type: 'Over-ear',
      Connectivity: 'Bluetooth 5.2',
      BatteryLife: '30 hours',
      NoiseCancellation: 'Active',
    },
  },
  {
    id: '3',
    name: 'Ultra HD Smart TV 55"',
    description: 'Stunning 4K resolution with smart features.',
    longDescription: 'Transform your viewing experience with this 55-inch 4K Ultra HD Smart TV. Enjoy vibrant colors, sharp details, and access to all your favorite streaming apps. Slim design that complements any living space.',
    price: 499.00,
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'smart tv',
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Electronics',
    brand: 'VisionMax',
    rating: 4.6,
    reviewsCount: 95,
    stock: 30,
    tags: ['tv', 'home entertainment', 'smart tv'],
     specifications: {
      ScreenSize: '55 inch',
      Resolution: '4K Ultra HD',
      SmartFeatures: 'Yes, WebOS',
      HDR: 'HDR10, Dolby Vision',
    },
  },
  {
    id: '4',
    name: 'Espresso Coffee Machine',
    description: 'Barista-quality espresso at home.',
    longDescription: 'Start your day right with the perfect espresso. This machine features a 15-bar pressure pump, milk frother, and easy-to-use controls. Durable stainless steel construction.',
    price: 199.50,
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'coffee machine',
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Home Appliances',
    brand: 'CafeHome',
    rating: 4.3,
    reviewsCount: 75,
    stock: 60,
    tags: ['coffee', 'kitchen', 'appliances'],
    specifications: {
      PumpPressure: '15 Bar',
      Material: 'Stainless Steel',
      MilkFrother: 'Yes',
      WaterTank: '1.5L',
    },
  },
  {
    id: '5',
    name: 'Men\'s Classic Leather Wallet',
    description: 'Genuine leather wallet with multiple compartments.',
    longDescription: 'A timeless accessory, this classic wallet is crafted from genuine leather. It features multiple card slots, a bill compartment, and an ID window. Slim and durable design.',
    price: 45.00,
    originalPrice: 55.00,
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'leather wallet',
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Fashion',
    brand: 'GentStyle',
    rating: 4.7,
    reviewsCount: 150,
    stock: 200,
    tags: ['wallet', 'mens fashion', 'accessories'],
    specifications: {
      Material: 'Genuine Leather',
      Color: 'Black',
      CardSlots: '8',
      IDWindow: 'Yes',
    },
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    description: 'Eco-friendly, non-slip yoga mat for all practices.',
    longDescription: 'Enhance your yoga practice with this premium, eco-friendly mat. Made from natural tree rubber, it offers excellent grip and cushioning. Lightweight and easy to carry.',
    price: 39.99,
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'yoga mat',
    images: [
      'https://placehold.co/600x600.png',
    ],
    category: 'Sports & Outdoors',
    brand: 'ZenFlow',
    rating: 4.9,
    reviewsCount: 300,
    stock: 120,
    tags: ['yoga', 'fitness', 'sports'],
    specifications: {
      Material: 'Natural Tree Rubber',
      Thickness: '5mm',
      Dimensions: '72" x 24"',
      EcoFriendly: 'Yes',
    },
  },
];

export const mockReviews: Review[] = [
  { id: 'r1', productId: '1', author: 'John D.', rating: 5, comment: 'Amazing phone, super fast and great camera!', date: '2023-10-01' },
  { id: 'r2', productId: '1', author: 'Jane S.', rating: 4, comment: 'Good phone, battery could be slightly better.', date: '2023-10-05' },
  { id: 'r3', productId: '2', author: 'Mike B.', rating: 5, comment: 'Best headphones I have ever owned. Noise cancellation is superb.', date: '2023-09-15' },
  { id: 'r4', productId: '2', author: 'Lisa K.', rating: 4, comment: 'Very comfortable and great sound, a bit pricey though.', date: '2023-09-20' },
];

export function getAllProducts(): Product[] {
  return mockProducts;
}

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(product => product.id === id);
}

export function getReviewsByProductId(productId: string): Review[] {
  return mockReviews.filter(review => review.productId === productId);
}
