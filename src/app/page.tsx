'use client'

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import PromotionalBanner from '@/components/PromotionalBanner';
import ProductGrid from '@/components/ProductGrid';
import FilterSortControls, { AppliedFilters } from '@/components/FilterSortControls';
import ProductRecommendations from '@/components/ProductRecommendations';
import { getAllProducts, Product } from '@/lib/products';
import { Skeleton } from '@/components/ui/skeleton';

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
    // Determine max price from products after they load
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

    // Apply search term
    if (currentFilters.searchTerm) {
      tempProducts = tempProducts.filter(product =>
        product.name.toLowerCase().includes(currentFilters.searchTerm) ||
        product.description.toLowerCase().includes(currentFilters.searchTerm) ||
        product.brand.toLowerCase().includes(currentFilters.searchTerm) ||
        product.category.toLowerCase().includes(currentFilters.searchTerm)
      );
    }
    
    // Apply filters
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

    // Apply sort
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
      case 'popularity': // Default sort (can be a mix of rating and reviewsCount or just by order)
      default:
        tempProducts.sort((a, b) => (b.rating * b.reviewsCount) - (a.rating * a.reviewsCount));
        break;
    }
    
    setFilteredProducts(tempProducts);

  }, [allProducts, isLoading, currentFilters]);

  const uniqueCategories = useMemo(() => [...new Set(allProducts.map(p => p.category))], [allProducts]);
  const uniqueBrands = useMemo(() => [...new Set(allProducts.map(p => p.brand))], [allProducts]);
  const maxProductPrice = useMemo(() => Math.max(...allProducts.map(p => p.price), 0), [allProducts]);


  const handleFilterChange = (filters: AppliedFilters) => {
    // This function is mostly for FilterSortControls to inform its parent
    // The actual filtering logic is in the useEffect above based on searchParams
  };

  const handleSortChange = (sortKey: string) => {
    // Same as above, logic is in useEffect
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

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          {isLoading ? (
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
            </div>
          ) : (
            <FilterSortControls
              categories={uniqueCategories}
              brands={uniqueBrands}
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
              maxPrice={maxProductPrice}
            />
          )}
        </aside>

        <div className="w-full md:w-3/4 lg:w-4/5">
          {isLoading ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="border rounded-lg p-4 space-y-3 bg-card">
                  <Skeleton className="h-40 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-8 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </div>

      <div className="mt-12">
        <ProductRecommendations />
      </div>
    </div>
  );
}
