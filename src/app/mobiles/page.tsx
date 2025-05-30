
import ProductGrid from '@/components/ProductGrid';
import { getAllProducts } from '@/lib/products';
import type { Metadata } from 'next';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobiles - EasyShope',
  description: 'Find the latest smartphones and mobile accessories at EasyShope.',
};

export default function MobilesPage() {
  const allProducts = getAllProducts();
  const mobileProducts = allProducts.filter(p => p.category.toLowerCase() === 'mobiles');

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center mb-8">
        <Smartphone className="h-10 w-10 mr-3 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">Latest Mobiles</h1>
      </div>
      
      {mobileProducts.length > 0 ? (
        <ProductGrid products={mobileProducts} />
      ) : (
        <Alert>
          <Smartphone className="h-4 w-4" />
          <AlertTitle>Coming Soon!</AlertTitle>
          <AlertDescription>
            Exciting new mobile phones and accessories are on their way. Stay tuned!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
