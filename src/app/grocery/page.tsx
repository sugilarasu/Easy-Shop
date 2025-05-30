
import ProductGrid from '@/components/ProductGrid';
import { getAllProducts } from '@/lib/products';
import type { Metadata } from 'next';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShoppingBasket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Grocery - EasyShope',
  description: 'Shop for fresh groceries online at EasyShope.',
};

export default function GroceryPage() {
  const allProducts = getAllProducts();
  const groceryProducts = allProducts.filter(p => p.category.toLowerCase() === 'grocery');

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center mb-8">
        <ShoppingBasket className="h-10 w-10 mr-3 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">Fresh Groceries</h1>
      </div>
      
      {groceryProducts.length > 0 ? (
        <ProductGrid products={groceryProducts} />
      ) : (
        <Alert>
          <ShoppingBasket className="h-4 w-4" />
          <AlertTitle>Coming Soon!</AlertTitle>
          <AlertDescription>
            Our grocery section is being stocked up. Check back soon for fresh produce, pantry staples, and more!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
