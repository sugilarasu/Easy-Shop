
import ProductGrid from '@/components/ProductGrid';
import { getAllProducts } from '@/lib/products';
import type { Metadata } from 'next';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Plane } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Travel - CharmShop',
  description: 'Book flights, hotels, and holiday packages at CharmShop.',
};

export default function TravelPage() {
  const allProducts = getAllProducts();
  const travelProducts = allProducts.filter(p => p.category.toLowerCase() === 'travel');

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center mb-8">
        <Plane className="h-10 w-10 mr-3 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">Travel Deals</h1>
      </div>
      
      {travelProducts.length > 0 ? (
        <ProductGrid products={travelProducts} />
      ) : (
        <Alert>
          <Plane className="h-4 w-4" />
          <AlertTitle>Exciting Destinations Await!</AlertTitle>
          <AlertDescription>
            Our travel section is currently under construction. Amazing deals on flights, hotels, and packages coming soon!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
