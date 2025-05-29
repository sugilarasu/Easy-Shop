
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import QuantitySelector from './QuantitySelector';
import { Trash2, ShoppingBag, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const ShoppingCartClient: React.FC = () => {
  const { items, removeItem, updateItemQuantity, getTotalPrice, clearCart, getItemCount } = useCartStore();
  const { toast } = useToast();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <ShoppingBag className="h-24 w-24 text-muted-foreground mb-6" />
        <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg">
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  const handleRemoveItem = (productId: string, productName: string) => {
    removeItem(productId);
    toast({
      title: "Item Removed",
      description: `${productName} has been removed from your cart.`,
    });
  };
  
  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart Cleared",
      description: "Your shopping cart has been emptied.",
    });
  };

  const handleProceedToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Your Shopping Cart ({getItemCount()})</h1>
          {items.length > 0 && (
            <Button variant="outline" onClick={handleClearCart} className="text-destructive border-destructive hover:bg-destructive/10">
              <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
            </Button>
          )}
        </div>
        {items.map(item => (
          <Card key={item.id} className="flex flex-col md:flex-row gap-4 p-4 shadow-sm">
            <div className="relative w-full md:w-32 h-32 aspect-square rounded-md overflow-hidden self-center md:self-start">
              <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint || 'product image'}/>
            </div>
            <div className="flex-grow space-y-2">
              <Link href={`/products/${item.id}`} className="hover:underline">
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground">{item.brand} - {item.category}</p>
              <p className="text-lg font-semibold text-primary">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-col items-end justify-between gap-2 md:gap-0">
              <QuantitySelector
                quantity={item.quantity}
                maxQuantity={item.stock}
                onQuantityChange={(newQuantity) => updateItemQuantity(item.id, newQuantity)}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveItem(item.id, item.name)}
                className="text-muted-foreground hover:text-destructive"
                aria-label={`Remove ${item.name} from cart`}
              >
                <Trash2 className="h-4 w-4 mr-1 md:mr-0" /> <span className="md:hidden">Remove</span>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="md:col-span-1">
        <Card className="sticky top-24 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal ({getItemCount()} items)</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={handleProceedToCheckout}
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </Button>
          </CardFooter>
        </Card>
         <p className="text-xs text-center text-muted-foreground mt-4">
           Payment processing is not implemented in this demo.
         </p>
      </div>
    </div>
  );
};

export default ShoppingCartClient;
