
import ProductGrid from '@/components/ProductGrid';
import { getAllProducts } from '@/lib/products';
import type { Metadata } from 'next';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HardDrive } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electronics - CharmShop',
  description: 'Shop for TVs, laptops, audio devices, and more electronics at CharmShop.',
};

export default function ElectronicsPage() {
  const allProducts = getAllProducts();
  // Includes products explicitly categorized as 'Electronics' AND also 'Mobiles' as they are a subset.
  // Or, if 'Mobiles' category should be exclusive, then filter only for 'Electronics'.
  // For this page, let's assume 'Electronics' means non-mobile electronics primarily, and mobiles have their own page.
  const electronicProducts = allProducts.filter(p => p.category.toLowerCase() === 'electronics');

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center mb-8">
        <HardDrive className="h-10 w-10 mr-3 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">Electronics Store</h1>
      </div>
      
      {electronicProducts.length > 0 ? (
        <ProductGrid products={electronicProducts} />
      ) : (
        <Alert>
          <HardDrive className="h-4 w-4" />
          <AlertTitle>More Gadgets Coming Soon!</AlertTitle>
          <AlertDescription>
            We are expanding our electronics selection. Keep an eye out for new arrivals!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
