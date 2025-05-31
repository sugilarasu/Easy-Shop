
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order Confirmed - EasyShope',
  description: 'Your order has been successfully placed with EasyShope.',
};

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] items-center justify-center px-4 py-12 md:px-6">
      <Card className="w-full max-w-lg text-center shadow-xl">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold">Order Confirmed!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Thank you for your purchase from EasyShope.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Your order has been successfully placed and is being processed. 
            You will receive an email confirmation shortly with your order details.
            (This is a simulated confirmation for demo purposes).
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </Button>
            {/* <Button variant="outline" size="lg" className="w-full sm:w-auto" disabled>
              View Order Details (Not Implemented)
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
