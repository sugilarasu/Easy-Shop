
'use client'

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import PromotionalBanner from '@/components/PromotionalBanner';
import ProductGrid from '@/components/ProductGrid';
import FilterSortControls, { AppliedFilters } from '@/components/FilterSortControls';
import ProductRecommendations from '@/components/ProductRecommendations';
import { getAllProducts, Product } from '@/lib/products';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Sparkles } from 'lucide-react';

// Helper component for product card skeleton
const ProductCardSkeleton = () => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
    <div className="p-0 relative">
      <Skeleton className="aspect-square w-full rounded-t-md" />
    </div>
    <div className="p-4 flex-grow space-y-2">
      <Skeleton className="h-5 w-4/5" /> {/* Title */}
      <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
      <Skeleton className="h-4 w-3/4" /> {/* Description line 2 / Price */}
      <Skeleton className="h-4 w-1/2 mt-1" /> {/* Rating */}
    </div>
    <div className="p-4 pt-0">
      <Skeleton className="h-9 w-full" /> {/* Button */}
    </div>
  </div>
);

const ProductGridSkeleton = ({ count = 4 }: { count?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
    {[...Array(count)].map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);


export default function HomePage() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const searchParams = useSearchParams();

  // Memoize filter values from URL
  const currentFilters = useMemo(() => {
    const categories = searchParams.getAll('category') || [];
    const brands = searchParams.getAll('brand') || [];
    const minPrice = Number(searchParams.get('minPrice') || 0);
    const initialMaxPrice = allProducts.length > 0 ? Math.max(...allProducts.map(p => p.price), 0) : 1000;
    const maxPrice = Number(searchParams.get('maxPrice') || initialMaxPrice);
    const rating = Number(searchParams.get('rating') || 0);
    const searchTerm = searchParams.get('q')?.toLowerCase() || '';
    const sortKey = searchParams.get('sort') || 'popularity';
    return { categories, brands, minPrice, maxPrice, rating, searchTerm, sortKey };
  }, [searchParams, allProducts]);


  useEffect(() => {
    const products = getAllProducts();
    setAllProducts(products);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    let tempProducts = [...allProducts];

    if (currentFilters.searchTerm) {
      tempProducts = tempProducts.filter(product =>
        product.name.toLowerCase().includes(currentFilters.searchTerm) ||
        product.description.toLowerCase().includes(currentFilters.searchTerm) ||
        product.brand.toLowerCase().includes(currentFilters.searchTerm) ||
        product.category.toLowerCase().includes(currentFilters.searchTerm)
      );
    }
    
    if (currentFilters.categories.length > 0) {
      tempProducts = tempProducts.filter(p => currentFilters.categories.includes(p.category));
    }
    if (currentFilters.brands.length > 0) {
      tempProducts = tempProducts.filter(p => currentFilters.brands.includes(p.brand));
    }
    tempProducts = tempProducts.filter(p => p.price >= currentFilters.minPrice && p.price <= currentFilters.maxPrice);
    if (currentFilters.rating > 0) {
      tempProducts = tempProducts.filter(p => p.rating >= currentFilters.rating);
    }

    switch (currentFilters.sortKey) {
      case 'price-asc':
        tempProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        tempProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        tempProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity': 
      default:
        // A simple popularity sort might be based on reviewsCount and rating
        tempProducts.sort((a, b) => (b.rating * b.reviewsCount) - (a.rating * a.reviewsCount));
        break;
    }
    
    setFilteredProducts(tempProducts);

  }, [allProducts, isLoading, currentFilters]);

  const uniqueCategories = useMemo(() => [...new Set(allProducts.map(p => p.category))], [allProducts]);
  const uniqueBrands = useMemo(() => [...new Set(allProducts.map(p => p.brand))], [allProducts]);
  const maxProductPrice = useMemo(() => Math.max(...allProducts.map(p => p.price), 0), [allProducts]);

  const dealOfTheDayProducts = useMemo(() => {
    if (allProducts.length === 0) return [];
    return allProducts.filter(p => p.originalPrice && p.originalPrice > p.price).slice(0, 10)
           .concat(allProducts.filter(p => p.rating >= 4.8).slice(0, 10))
           .sort(() => 0.5 - Math.random()) 
           .slice(0, 10); 
  }, [allProducts]);

  const bestOfElectronicsProducts = useMemo(() => {
    if (allProducts.length === 0) return [];
    return allProducts.filter(p => p.category.toLowerCase() === 'electronics' && p.rating >= 4.6).sort((a,b) => b.reviewsCount - a.reviewsCount).slice(0, 10);
  }, [allProducts]);

  const fashionTopDealsProducts = useMemo(() => {
    if (allProducts.length === 0) return [];
    return allProducts.filter(p => p.category.toLowerCase() === 'fashion' && p.originalPrice).sort((a,b) => (b.originalPrice! - b.price) - (a.originalPrice! - a.price)).slice(0, 10);
  }, [allProducts]);


  const handleFilterChange = (filters: AppliedFilters) => {
    // Logic is in useEffect based on searchParams
  };

  const handleSortChange = (sortKey: string) => {
    // Logic is in useEffect based on searchParams
  };


  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <PromotionalBanner
          imageUrl="https://placehold.co/1200x400.png"
          altText="Big Billion Days Sale"
          linkUrl="/sales/big-billion-days" 
          title="Big Savings Event!"
          description="Up to 70% off on electronics, fashion, and more. Shop now!"
          dataAiHint="sale event"
        />
      </div>

      {/* Deal of the Day Section */}
      { (isLoading || dealOfTheDayProducts.length > 0) && (
        <section className="mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Zap className="mr-2 h-7 w-7 text-accent" /> Deal of the Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? <ProductGridSkeleton count={5} /> : <ProductGrid products={dealOfTheDayProducts} />}
            </CardContent>
          </Card>
        </section>
      )}

      {/* Best of Electronics Section */}
      { (isLoading || bestOfElectronicsProducts.length > 0) && (
        <section className="mb-12">
           <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <TrendingUp className="mr-2 h-7 w-7 text-primary" /> Best of Electronics
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? <ProductGridSkeleton count={5} /> : <ProductGrid products={bestOfElectronicsProducts} />}
            </CardContent>
          </Card>
        </section>
      )}

      {/* Fashion Top Deals Section */}
      { (isLoading || fashionTopDealsProducts.length > 0) && (
        <section className="mb-12">
           <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                 <Sparkles className="mr-2 h-7 w-7 text-pink-500" /> Fashion Top Deals
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? <ProductGridSkeleton count={5} /> : <ProductGrid products={fashionTopDealsProducts} />}
            </CardContent>
          </Card>
        </section>
      )}

      <div className="space-y-8">
        {/* Filter and Sort Controls Section */}
        <section>
          {isLoading && !allProducts.length ? ( // Show filter skeleton only on initial full load
            <div className="space-y-4 p-4 border rounded-lg shadow-sm bg-card">
              <Skeleton className="h-8 w-3/4" />
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2 pt-2">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
              <Skeleton className="h-10 w-full mt-4" />
            </div>
          ) : (
             allProducts.length > 0 && ( // Render filters only if products have loaded
                <FilterSortControls
                  categories={uniqueCategories}
                  brands={uniqueBrands}
                  onFilterChange={handleFilterChange}
                  onSortChange={handleSortChange}
                  maxPrice={maxProductPrice}
                />
             )
          )}
        </section>

        {/* All Products Section */}
        <section>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">All Products</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading && !filteredProducts.length ? ( // Show grid skeleton if loading and no products yet
                <ProductGridSkeleton count={10} />
              ) : (
                <ProductGrid products={filteredProducts} />
              )}
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="mt-12">
        <ProductRecommendations />
      </div>
    </div>
  );
}
