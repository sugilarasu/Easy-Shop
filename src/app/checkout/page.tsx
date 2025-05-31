
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Added Image import
import { useCartStore } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Smartphone, Truck, ShoppingBag, ArrowLeft } from 'lucide-react';
import type { CartItem } from '@/types';


export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart, getItemCount } = useCartStore();
  const { toast } = useToast();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('credit-card');
  const [isClient, setIsClient] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (items.length === 0 && !isProcessing) { // Don't redirect if processing an order
      toast({
        title: "Your cart is empty",
        description: "Please add items to your cart before proceeding to checkout.",
        variant: "destructive"
      });
      router.push('/cart');
    }
  }, [items, router, toast, isProcessing]);

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    toast({
      title: "Placing Order...",
      description: "Processing your order with " + selectedPaymentMethod.replace('-', ' ') + ".",
    });

    const orderData = {
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        imageUrl: item.imageUrl, 
        dataAiHint: item.dataAiHint || '',
        category: item.category,
        brand: item.brand,
        description: item.description,
        longDescription: item.longDescription,
        images: item.images,
        rating: item.rating,
        reviewsCount: item.reviewsCount,
        stock: item.stock, 
      })),
      totalPrice: getTotalPrice() * 1.05, 
      paymentMethod: selectedPaymentMethod,
    };

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.message || 'Failed to place order');
      }
      
      clearCart();
      router.push('/checkout/success');

    } catch (error) {
      console.error('Order placement error:', error);
      toast({
        title: "Order Failed",
        description: (error as Error).message || "There was an issue placing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  if (!isClient || (items.length === 0 && !isProcessing)) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 min-h-[calc(100vh-10rem)] flex items-center justify-center">
        <p className="text-muted-foreground">Loading checkout or cart is empty...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-6">
        <Button variant="outline" onClick={() => router.back()} size="sm" disabled={isProcessing}>
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
                        <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint || ''} />
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
                <RadioGroup 
                  value={selectedPaymentMethod} 
                  onValueChange={(value) => !isProcessing && setSelectedPaymentMethod(value)} 
                  className="space-y-3"
                  disabled={isProcessing}
                >
                  <Label
                    htmlFor="credit-card"
                    className={`flex items-center gap-3 rounded-md border p-3 hover:bg-muted/50 transition-all ${isProcessing ? 'cursor-not-allowed opacity-50' : 'cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5'}`}
                  >
                    <RadioGroupItem value="credit-card" id="credit-card" disabled={isProcessing}/>
                    <CreditCard className="h-6 w-6 text-primary" />
                    <span>Credit/Debit Card</span>
                  </Label>
                  
                  <div>
                    <Label
                      htmlFor="upi"
                       className={`flex items-center gap-3 rounded-md border p-3 hover:bg-muted/50 transition-all ${isProcessing ? 'cursor-not-allowed opacity-50' : 'cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5'}`}
                    >
                      <RadioGroupItem value="upi" id="upi" disabled={isProcessing}/>
                      <Smartphone className="h-6 w-6 text-primary" />
                      <span>UPI (Google Pay, PhonePe, etc.)</span>
                    </Label>
                    {selectedPaymentMethod === 'upi' && (
                      <div className="mt-4 p-4 border rounded-md bg-muted/30 flex flex-col items-center">
                        <p className="mb-2 text-sm font-medium text-center">Scan to pay with UPI</p>
                        <div className="relative w-48 h-48 md:w-56 md:h-56">
                          <Image
                            src="/upi-qr-code.png"
                            alt="UPI QR Code"
                            layout="fill"
                            objectFit="contain"
                            data-ai-hint="upi payment"
                          />
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground text-center">
                          After scanning, complete the payment on your UPI app. <br />
                          Then click "Place Order" below.
                        </p>
                      </div>
                    )}
                  </div>

                  <Label
                    htmlFor="cod"
                     className={`flex items-center gap-3 rounded-md border p-3 hover:bg-muted/50 transition-all ${isProcessing ? 'cursor-not-allowed opacity-50' : 'cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5'}`}
                  >
                    <RadioGroupItem value="cod" id="cod" disabled={isProcessing}/>
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
                <span>Estimated Tax (5%)</span>
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
                disabled={items.length === 0 || isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </Button>
               <Button size="lg" variant="outline" className="w-full" asChild disabled={isProcessing}>
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
