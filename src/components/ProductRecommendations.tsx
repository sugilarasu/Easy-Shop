
'use client';

import { useEffect, useState } from 'react';
import { getProductRecommendations, ProductRecommendationsInput } from '@/ai/flows/product-recommendations';
import { useBrowsingHistory } from '@/hooks/useBrowsingHistory';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { getAllProducts, Product } from '@/lib/products'; // Assuming products data is available for linking

const ProductRecommendations: React.FC = () => {
  const { browsingHistory, isHistoryLoaded } = useBrowsingHistory();
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    setAllProducts(getAllProducts());
  }, []);

  useEffect(() => {
    if (isHistoryLoaded && browsingHistory.length > 0) {
      fetchRecommendations();
    } else if (isHistoryLoaded && browsingHistory.length === 0) {
      setRecommendations([]); // Clear recommendations if history is empty
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [browsingHistory, isHistoryLoaded]);

  const fetchRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const input: ProductRecommendationsInput = {
        browsingHistory: browsingHistory.join(', '),
      };
      const result = await getProductRecommendations(input);
      setRecommendations(result.recommendations || []);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      setError('Failed to load recommendations. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const getProductByName = (name: string) => {
    return allProducts.find(p => p.name.toLowerCase() === name.toLowerCase());
  }

  if (!isHistoryLoaded) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-accent" />
            Recommended For You
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }
  
  if (browsingHistory.length === 0 && recommendations.length === 0 && !isLoading) {
     return (
       <Card className="bg-muted/30">
         <CardHeader>
           <CardTitle className="text-xl font-semibold flex items-center">
             <Lightbulb className="mr-2 h-6 w-6 text-accent" />
             Recommended For You
           </CardTitle>
         </CardHeader>
         <CardContent>
           <p className="text-muted-foreground">Browse some products to see personalized recommendations here!</p>
         </CardContent>
       </Card>
     );
  }

  if (isLoading) {
     return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-accent" />
            Recommended For You
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-32 w-full rounded-md" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  
  if (recommendations.length === 0) {
    return null; // Or some placeholder if no recommendations but history exists
  }


  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Lightbulb className="mr-2 h-6 w-6 text-accent" />
          Recommended For You
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommendations.map((recName, index) => {
            const product = getProductByName(recName);
            if (!product) return null; // Or a placeholder for unknown product

            return (
              <Link key={index} href={`/products/${product.id}`} passHref>
                <a className="block group">
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-square relative w-full">
                       <Image 
                        src={product.imageUrl} 
                        alt={product.name} 
                        layout="fill" 
                        objectFit="cover" 
                        className="transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={product.dataAiHint} 
                       />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-sm truncate group-hover:text-primary">{product.name}</h4>
                      <p className="text-xs text-muted-foreground">₹{product.price.toFixed(2)}</p>
                    </div>
                  </Card>
                </a>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductRecommendations;

    