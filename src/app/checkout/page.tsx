
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCartStore } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Smartphone, Truck, ShoppingBag, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next'; // Cannot be used in client component directly

// Note: Metadata should be handled in a parent layout or a dedicated metadata export if this remains a client component.
// For now, we'll focus on the component logic. We can create a generateMetadata function if needed.

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart, getItemCount } = useCartStore();
  const { toast } = useToast();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('credit-card');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (items.length === 0) {
      // Redirect to cart or home if cart is empty, to prevent direct access to checkout without items
      toast({
        title: "Your cart is empty",
        description: "Please add items to your cart before proceeding to checkout.",
        variant: "destructive"
      });
      router.push('/cart');
    }
  }, [items, router, toast]);

  const handlePlaceOrder = () => {
    // Simulate order placement
    toast({
      title: "Order Placing...",
      description: "Processing your order with " + selectedPaymentMethod.replace('-', ' ') + ".",
    });
    
    // In a real app, you'd send this to a backend.
    // For now, we just clear the cart and redirect.
    setTimeout(() => {
      clearCart();
      router.push('/checkout/success');
    }, 1500);
  };
  
  if (!isClient || items.length === 0) {
    // Render nothing or a loading indicator until client-side check completes or if cart is empty
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 min-h-[calc(100vh-10rem)] flex items-center justify-center">
        <p className="text-muted-foreground">Loading checkout or cart is empty...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-6">
        <Button variant="outline" onClick={() => router.back()} size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
              <CardDescription>Review your order and select a payment method.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Order Items ({getItemCount()})</h3>
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex items-start gap-4 p-3 border rounded-md bg-muted/20">
                      <div className="relative w-20 h-20 aspect-square rounded-md overflow-hidden">
                        <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint} />
                      </div>
                      <div className="flex-grow">
                        <Link href={`/products/${item.id}`} className="font-semibold hover:underline">{item.name}</Link>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        <p className="text-sm text-muted-foreground">Price: ₹{item.price.toFixed(2)}</p>
                      </div>
                      <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-4">Choose Payment Method</h3>
                <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod} className="space-y-3">
                  <Label
                    htmlFor="credit-card"
                    className="flex items-center gap-3 rounded-md border p-3 hover:bg-muted/50 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all"
                  >
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <CreditCard className="h-6 w-6 text-primary" />
                    <span>Credit/Debit Card</span>
                  </Label>
                  <Label
                    htmlFor="upi"
                    className="flex items-center gap-3 rounded-md border p-3 hover:bg-muted/50 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all"
                  >
                    <RadioGroupItem value="upi" id="upi" />
                    <Smartphone className="h-6 w-6 text-primary" />
                    <span>UPI (Google Pay, PhonePe, etc.)</span>
                  </Label>
                  <Label
                    htmlFor="cod"
                    className="flex items-center gap-3 rounded-md border p-3 hover:bg-muted/50 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all"
                  >
                    <RadioGroupItem value="cod" id="cod" />
                    <Truck className="h-6 w-6 text-primary" />
                    <span>Cash on Delivery</span>
                  </Label>
                </RadioGroup>
                <p className="text-xs text-muted-foreground mt-3">
                  Actual payment processing is not implemented in this demo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card className="sticky top-24 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>₹{(getTotalPrice() * 0.05).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>₹{(getTotalPrice() * 1.05).toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90" 
                onClick={handlePlaceOrder}
                disabled={items.length === 0}
              >
                Place Order
              </Button>
               <Button size="lg" variant="outline" className="w-full" asChild>
                <Link href="/">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
