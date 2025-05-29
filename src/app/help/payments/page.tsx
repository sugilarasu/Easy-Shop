import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CreditCard, ShieldCheck, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Payments - Help Center - E-Clone',
  description: 'Find information about payment methods, security, and troubleshooting on E-Clone.',
};

export default function PaymentsHelpPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
           <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <CreditCard className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Payments Help</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            All you need to know about making payments on E-Clone.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">What payment methods are accepted?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>We accept a variety of payment methods for your convenience:</p>
                <ul>
                  <li>Credit Cards (Visa, MasterCard, American Express, Discover)</li>
                  <li>Debit Cards</li>
                  <li>Net Banking (most major banks)</li>
                  <li>UPI (Unified Payments Interface)</li>
                  <li>E-Clone Wallet (if applicable)</li>
                  <li>Cash on Delivery (COD) - available for eligible orders and locations.</li>
                </ul>
                <p>Availability of certain payment methods may vary depending on your order or location.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Is it safe to use my card on E-Clone?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p className="flex items-center"><ShieldCheck className="h-5 w-5 mr-2 text-green-600" /> Yes, absolutely!</p>
                <p>
                  We take your security very seriously. All online transactions on E-Clone are processed through secure and encrypted payment gateways. 
                  We use industry-standard SSL (Secure Sockets Layer) technology to protect your card information. 
                  We do not store your full card details on our servers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">How does Cash on Delivery (COD) work?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>
                  Cash on Delivery (COD) allows you to pay for your order in cash at the time of delivery. 
                  If COD is available for your order and pincode, you will see it as a payment option during checkout.
                </p>
                <p>Please ensure you have the exact amount ready for the delivery executive, as they may not always have change.</p>
                <p>Note: COD may not be available for all products or for high-value orders due to security reasons.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">I&apos;m having trouble with my payment. What should I do?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                <p>If your payment is failing, please try the following steps:</p>
                <ul>
                  <li>Double-check your card details (card number, expiry date, CVV).</li>
                  <li>Ensure your card is enabled for online transactions.</li>
                  <li>Check if you have sufficient funds or credit limit.</li>
                  <li>Try a different payment method or card.</li>
                  <li>Clear your browser cache and cookies, or try a different browser/device.</li>
                  <li>Contact your bank to ensure there are no issues from their end.</li>
                </ul>
                <p>If the problem persists, please <a href="/contact-us" className="text-primary hover:underline">contact our support team</a> with the error message and details of the issue.</p>
              </AccordionContent>
            </AccordionItem>

             <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">What is UPI and how do I use it?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                 <p className="flex items-center"><Smartphone className="h-5 w-5 mr-2 text-blue-600" /> UPI (Unified Payments Interface) is an instant real-time payment system developed by National Payments Corporation of India (NPCI).</p>
                <p>To pay using UPI:</p>
                <ol>
                  <li>Select UPI as your payment option at checkout.</li>
                  <li>Enter your VPA (Virtual Payment Address), e.g., yourname@bank.</li>
                  <li>Open your UPI-enabled mobile app (like Google Pay, PhonePe, Paytm, etc.).</li>
                  <li>You will receive a payment request from E-Clone.</li>
                  <li>Authorize the payment in your UPI app using your MPIN.</li>
                </ol>
                <p>Once the payment is successful, your order will be confirmed.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
