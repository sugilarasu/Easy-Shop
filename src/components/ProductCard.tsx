
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StarRating from './StarRating';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg group">
      <Link href={`/products/${product.id}`} className="flex flex-col h-full">
        <CardHeader className="p-0 relative">
          <div className="aspect-square w-full relative overflow-hidden rounded-t-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.dataAiHint}
            />
            {discountPercentage > 0 && (
              <Badge variant="destructive" className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs px-2 py-0.5">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-lg font-semibold leading-tight mb-1 h-12 overflow-hidden group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground mb-2 h-10 overflow-hidden">
            {product.description}
          </CardDescription>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xl font-bold text-foreground">
              ${product.price.toFixed(2)}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm">
            <StarRating rating={product.rating} size={16} />
            <span className="text-muted-foreground">({product.reviewsCount})</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary-foreground focus-visible:ring-primary">
            View Details
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
