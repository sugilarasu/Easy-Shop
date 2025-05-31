
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllProducts, getProductById, getReviewsByProductId, Product, Review } from '@/lib/products';
import StarRating from '@/components/StarRating';
import ProductDetailsClientBlock from '@/components/ProductDetailsClientBlock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {format} from 'date-fns';
import ProductGrid from '@/components/ProductGrid'; // Import ProductGrid
import { Lightbulb } from 'lucide-react'; // Import an icon for the section title

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  // In a real app, fetch all product IDs
  // For now, using mockProducts
  const products = (await import('@/lib/products')).mockProducts;
  return products.map((product) => ({
    id: product.id,
  }));
}


const ProductDetailsPage = ({ params }: ProductDetailsPageProps) => {
  const product = getProductById(params.id);
  
  if (!product) {
    notFound();
  }

  const reviews = getReviewsByProductId(params.id);
  const discountPercentage = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 5); // Get up to 5 related products

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
           <div className="relative aspect-square w-full overflow-hidden rounded-lg border shadow-md">
            <Image
              src={product.images[0] || product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="bg-white"
              data-ai-hint={product.dataAiHint}
            />
            {discountPercentage > 0 && (
              <Badge variant="destructive" className="absolute top-3 right-3 bg-accent text-accent-foreground text-base px-3 py-1">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <div key={index} className="relative aspect-square w-full overflow-hidden rounded-md border hover:border-primary cursor-pointer">
                  <Image src={img} alt={`${product.name} thumbnail ${index + 1}`} layout="fill" objectFit="cover" data-ai-hint={product.dataAiHint}/>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} size={20} />
            <span className="text-muted-foreground">({product.reviewsCount} reviews)</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-3xl font-bold text-primary">₹{product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-lg text-muted-foreground line-through">
                ₹{product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>

          <p className="text-foreground/80 text-base">{product.description}</p>
          
          <div className="flex gap-2">
            {product.tags?.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
          
          <Separator />

          <ProductDetailsClientBlock product={product} />
        </div>
      </div>

      {/* Tabs for Long Description, Specifications, Reviews */}
      <Tabs defaultValue="description" className="mt-12">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6 prose max-w-none dark:prose-invert">
          <Card>
            <CardContent className="p-6">
             <p>{product.longDescription}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium text-foreground/80">{key}:</span>
                    <span className="text-foreground">{value}</span>
                  </li>
                ))}
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium text-foreground/80">Brand:</span>
                  <span className="text-foreground">{product.brand}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium text-foreground/80">Category:</span>
                  <span className="text-foreground">{product.category}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {reviews.length > 0 ? (
                reviews.map(review => (
                  <div key={review.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold">{review.author}</h4>
                      <span className="text-xs text-muted-foreground">{format(new Date(review.date), "MMMM d, yyyy")}</span>
                    </div>
                    <StarRating rating={review.rating} size={16} />
                    <p className="mt-2 text-foreground/90">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No reviews yet for this product.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mt-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Lightbulb className="mr-2 h-7 w-7 text-accent" />
                You Might Also Like
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProductGrid products={relatedProducts} />
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
};

export default ProductDetailsPage;
