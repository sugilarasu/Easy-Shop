
import ProductGrid from '@/components/ProductGrid';
import { getAllProducts } from '@/lib/products';
import type { Metadata } from 'next';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Refrigerator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Appliances - EasyShope',
  description: 'Shop for kitchen and home appliances at EasyShope.',
};

export default function AppliancesPage() {
  const allProducts = getAllProducts();
  const applianceProducts = allProducts.filter(p => p.category.toLowerCase() === 'appliances');

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center mb-8">
        <Refrigerator className="h-10 w-10 mr-3 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">Home Appliances</h1>
      </div>
      
      {applianceProducts.length > 0 ? (
        <ProductGrid products={applianceProducts} />
      ) : (
        <Alert>
          <Refrigerator className="h-4 w-4" />
          <AlertTitle>New Appliances Arriving Soon!</AlertTitle>
          <AlertDescription>
            We are updating our range of home and kitchen appliances. Please check back later!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
