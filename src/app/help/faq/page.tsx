import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, User, ShoppingCart, Search } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Help Center - E-Clone',
  description: 'Find answers to frequently asked questions about shopping on E-Clone.',
};

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
           <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <HelpCircle className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Frequently Asked Questions (FAQ)</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Find quick answers to common questions.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Popular Topics</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-center">
            <Link href="/help/payments" className="block p-4 bg-card hover:shadow-md rounded-lg border">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-medium">Payments</p>
            </Link>
            <Link href="/help/shipping" className="block p-4 bg-card hover:shadow-md rounded-lg border">
              <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-medium">Shipping</p>
            </Link>
            <Link href="/help/cancellation-returns" className="block p-4 bg-card hover:shadow-md rounded-lg border">
              <Undo className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-medium">Cancellations & Returns</p>
            </Link>
          </div>


          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                <User className="h-5 w-5 mr-2 shrink-0" /> How do I create an account?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Creating an account on E-Clone is easy! Click on the &quot;Login&quot; or &quot;Sign Up&quot; button usually found at the top right of the page. 
                  You can sign up using your email address and creating a password, or by using your Google/Facebook account if that option is available.
                </p>
                <p>Having an account allows you to track orders, save addresses, manage wishlists, and enjoy a faster checkout process.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                <Search className="h-5 w-5 mr-2 shrink-0" /> How do I search for products?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Use the search bar located at the top of every page. You can enter keywords, product names, brand names, or categories. 
                  Our search will provide relevant results. You can then use filters (like price, brand, rating) to narrow down your search.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                <ShoppingCart className="h-5 w-5 mr-2 shrink-0" /> How do I place an order?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <ol>
                  <li>Find the product(s) you want to buy.</li>
                  <li>Select the desired quantity, size, color, etc., if applicable.</li>
                  <li>Click the &quot;Add to Cart&quot; button.</li>
                  <li>Once you have added all items, go to your Shopping Cart (usually an icon at the top right).</li>
                  <li>Review your items and click &quot;Proceed to Checkout&quot;.</li>
                  <li>Enter your shipping address and select a payment method.</li>
                  <li>Confirm your order and complete the payment.</li>
                </ol>
                <p>You will receive an order confirmation via email and/or SMS.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                Can I change my shipping address after placing an order?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  If your order has not yet been shipped, you might be able to change the shipping address. 
                  Please go to &quot;My Orders&quot;, select the order, and look for an option to modify the address.
                </p>
                <p>
                  If the order is already shipped, or if the option is not available, please <a href="/contact-us" className="text-primary hover:underline">contact our support team</a> as soon as possible. 
                  We&apos;ll do our best to assist, but changes may not always be possible at that stage.
                </p>
              </AccordionContent>
            </AccordionItem>
            
             <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                What if an item is out of stock?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  If an item is out of stock, you may see an option to &quot;Notify Me&quot;. By clicking this, you can register to be informed via email or SMS when the item is back in stock.
                </p>
                <p>
                  Stock availability is updated regularly, but popular items can sell out quickly.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-10">
            <p className="text-lg text-muted-foreground">Can&apos;t find what you&apos;re looking for?</p>
            <Button asChild size="lg" className="mt-2 bg-primary hover:bg-primary/90">
              <Link href="/contact-us">Contact Support</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Re-export icons if needed by other components, or ensure they are imported directly
// For FAQ page specific local use:
import { CreditCard, Truck, Undo } from 'lucide-react';
