
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Ban, Undo, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cancellation & Returns - Help Center - EasyShope',
  description: 'Understand the process for order cancellations, returns, and refunds on EasyShope.',
};

export default function CancellationReturnsHelpPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
           <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <Undo className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Cancellation & Returns</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Information on managing your orders, returns, and refunds.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                <Ban className="h-5 w-5 mr-2 shrink-0" /> How can I cancel my order?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  You can cancel your order if it has not yet been shipped. To cancel an order:
                </p>
                <ol>
                  <li>Log in to your EasyShope account.</li>
                  <li>Go to the &quot;My Orders&quot; section.</li>
                  <li>Find the order you wish to cancel.</li>
                  <li>If the order is eligible for cancellation, you will see a &quot;Cancel Order&quot; button or option.</li>
                  <li>Follow the on-screen instructions to complete the cancellation.</li>
                </ol>
                <p>
                  If the order has already been shipped, you may not be able to cancel it. In such cases, you might have the option to refuse delivery or initiate a return once you receive the item (subject to the return policy).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                <Undo className="h-5 w-5 mr-2 shrink-0" /> What is the return policy?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Our return policy varies depending on the product category and seller. Most items are eligible for return within a specific timeframe (e.g., 7-30 days) from the date of delivery, provided they meet the return conditions (e.g., unused, in original packaging, with tags).
                </p>
                <p>
                  Some items, such as personal care products, innerwear, and digital downloads, may not be eligible for return due to hygiene or copyright reasons.
                </p>
                <p>
                  Please check the return policy mentioned on the product page at the time of purchase. You can find detailed information in our <a href="/policy/return-policy" className="text-primary hover:underline">Return Policy</a> page.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                How do I initiate a return?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>To initiate a return:</p>
                <ol>
                  <li>Log in to your EasyShope account.</li>
                  <li>Go to the &quot;My Orders&quot; section.</li>
                  <li>Find the order containing the item you wish to return.</li>
                  <li>Select the &quot;Return Item&quot; or similar option.</li>
                  <li>Choose the reason for return and provide any necessary details or images.</li>
                  <li>Follow the instructions for scheduling a pickup or shipping the item back.</li>
                </ol>
                <p>Ensure the item is packed securely, preferably in its original packaging.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                 When will I get my refund?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Once your returned item is received and inspected by the seller, the refund process will be initiated.
                </p>
                <p>The time taken for the refund to reflect in your account depends on the payment method:</p>
                <ul>
                  <li><strong>Credit/Debit Card, Net Banking, UPI:</strong> Typically 5-7 business days after the refund is processed.</li>
                  <li><strong>EasyShope Wallet:</strong> Usually instant or within 24 hours.</li>
                  <li><strong>Cash on Delivery:</strong> Refunds may be processed via bank transfer (NEFT) or to your EasyShope Wallet, which might take 3-5 business days after providing necessary details.</li>
                </ul>
                <p>You will be notified via email or SMS once the refund is processed.</p>
              </AccordionContent>
            </AccordionItem>
            
             <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                <FileText className="h-5 w-5 mr-2 shrink-0" /> What if I received a damaged or incorrect item?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  We apologize for the inconvenience. If you have received a damaged, defective, or incorrect item, please contact us immediately or initiate a return within the specified timeframe (usually within 24-48 hours of delivery for damaged/defective items).
                </p>
                <p>
                  When initiating the return, please select the appropriate reason (e.g., &quot;Damaged Item&quot;, &quot;Incorrect Item Received&quot;) and provide clear photos of the item and packaging. This will help us resolve the issue quickly.
                </p>
                <p>
                  We will arrange for a replacement or a full refund, as applicable, according to our policy.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
