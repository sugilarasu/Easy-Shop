
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Truck, MapPin, Clock, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping Information - Help Center - EasyShope',
  description: 'Learn about shipping times, charges, tracking, and policies on EasyShope.',
};

export default function ShippingHelpPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
           <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <Truck className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Shipping Information</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Everything you need to know about how we get your orders to you.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                <Clock className="h-5 w-5 mr-2 shrink-0" /> How long does delivery take?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Delivery times vary depending on your location, the seller, and the type of product. 
                  Estimated delivery times are usually displayed on the product page and during checkout.
                </p>
                <ul>
                  <li><strong>Metro Cities:</strong> Typically 2-5 business days.</li>
                  <li><strong>Other Cities:</strong> Typically 4-7 business days.</li>
                  <li><strong>Remote Locations:</strong> May take up to 7-10 business days.</li>
                </ul>
                <p>Business days exclude public holidays and Sundays. Delivery times may be affected by unforeseen circumstances like weather conditions or logistical disruptions.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                <MapPin className="h-5 w-5 mr-2 shrink-0" /> How can I track my order?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Once your order is shipped, you will receive an email and/or SMS with the tracking information, including the courier partner and tracking ID.
                </p>
                <p>You can also track your order from your EasyShope account:</p>
                <ol>
                  <li>Log in to your EasyShope account.</li>
                  <li>Go to &quot;My Orders&quot; section.</li>
                  <li>Select the order you wish to track.</li>
                  <li>Click on the &quot;Track Order&quot; button or link.</li>
                </ol>
                <p>Please note that it might take up to 24 hours for the tracking information to be updated by the courier partner after shipping.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                <Package className="h-5 w-5 mr-2 shrink-0" /> What are the shipping charges?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Shipping charges may vary depending on the product, seller, and your location. 
                  Some products might have free shipping, while others may incur a shipping fee.
                </p>
                <p>
                  The applicable shipping charges will be clearly displayed at checkout before you make the payment. 
                  We often offer free shipping on orders above a certain value. Look out for such promotions!
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                 Do you ship internationally?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Currently, EasyShope primarily ships within India. International shipping availability may depend on specific sellers or products. 
                  If international shipping is available for an item, it will be indicated on the product page or during checkout.
                </p>
              </AccordionContent>
            </AccordionItem>

             <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                 What if I miss my delivery?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Our courier partners usually make 2-3 attempts to deliver your order. If you miss a delivery, they will typically contact you to reschedule or leave a notice with further instructions.
                </p>
                <p>
                  If you are unavailable, you can sometimes authorize someone else to receive the package on your behalf, provided they can present a valid ID if required by the courier.
                </p>
                <p>
                  If all delivery attempts fail, the product might be returned to the seller. In such cases, please <a href="/contact-us" className="text-primary hover:underline">contact our support team</a> for assistance.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
