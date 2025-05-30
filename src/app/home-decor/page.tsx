
import ProductGrid from '@/components/ProductGrid';
import { getAllProducts } from '@/lib/products';
import type { Metadata } from 'next';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lamp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home & Decor - EasyShope',
  description: 'Find furniture, lighting, and decor items to beautify your home at EasyShope.',
};

export default function HomeDecorPage() {
  const allProducts = getAllProducts();
  const homeDecorProducts = allProducts.filter(p => p.category.toLowerCase() === 'home & decor');

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center mb-8">
        <Lamp className="h-10 w-10 mr-3 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">Home & Decor</h1>
      </div>
      
      {homeDecorProducts.length > 0 ? (
        <ProductGrid products={homeDecorProducts} />
      ) : (
        <Alert>
          <Lamp className="h-4 w-4" />
          <AlertTitle>Stylish Home Goods Coming Soon!</AlertTitle>
          <AlertDescription>
            Our Home & Decor section is getting a makeover with beautiful new items. Visit us again soon!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
