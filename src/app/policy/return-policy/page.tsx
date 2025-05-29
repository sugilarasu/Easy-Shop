
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, PackageCheck, Clock, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Return Policy - CharmShop',
  description: 'Read the official CharmShop return policy for products purchased on our platform.',
};

export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <FileText className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Return Policy</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Understanding your rights and our procedures for product returns.
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none text-lg space-y-6 p-6 md:p-8">
          <p>
            At CharmShop, we strive to ensure your satisfaction with every purchase. This policy outlines the conditions under which returns are accepted and processed.
          </p>

          <section>
            <h2 className="text-2xl font-semibold flex items-center"><Clock className="h-6 w-6 mr-2 text-primary" />Return Window</h2>
            <p>
              Most items purchased from CharmShop are returnable within a specified return window, which is typically <strong>7 to 30 days</strong> from the date of delivery. 
              The exact return window for each product is mentioned on its respective product page. Please check this information before making a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center"><PackageCheck className="h-6 w-6 mr-2 text-primary" />Conditions for a Valid Return</h2>
            <p>To be eligible for a return, the item must meet the following conditions:</p>
            <ul>
              <li>The item must be in its original, unused, unaltered, and unsoiled condition.</li>
              <li>All original packaging, including brand/product boxes, tags, labels, and accessories (if any), must be intact and returned with the item.</li>
              <li>For electronics, the item must not have been installed or used, and original seals/warranty stickers should be intact.</li>
              <li>For fashion items, they should be unworn, unwashed, with all original tags attached.</li>
              <li>The item should not fall under the non-returnable category (see below).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center"><AlertTriangle className="h-6 w-6 mr-2 text-destructive" />Non-Returnable Items</h2>
            <p>Certain categories of items are generally not eligible for return due to hygiene, safety, or copyright reasons. These may include, but are not limited to:</p>
            <ul>
              <li>Personal care items (e.g., cosmetics, skincare, grooming products if opened or used).</li>
              <li>Innerwear, lingerie, and swimwear.</li>
              <li>Consumable items (e.g., food products, health supplements if opened).</li>
              <li>Digital products (e.g., software, e-books, gift cards).</li>
              <li>Items explicitly marked as &quot;non-returnable&quot; on the product page.</li>
              <li>Customized or made-to-order products.</li>
            </ul>
            <p>Exceptions may apply if the item received is damaged, defective, or incorrect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Reasons for Return</h2>
            <p>You can initiate a return for reasons such as:</p>
            <ul>
              <li>Received a damaged or defective product.</li>
              <li>Received an incorrect product (different from what you ordered).</li>
              <li>The product does not match the description or specifications on the website.</li>
              <li>Sizing issues (for fashion items, subject to specific product policy).</li>
              <li>You changed your mind (for eligible products within the return window).</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">Return Process & Refunds</h2>
            <p>
              To initiate a return, please visit the &quot;My Orders&quot; section of your CharmShop account. 
              Once your return request is approved and the item is received and verified by the seller, your refund will be processed. 
              Refunds are typically credited back to the original payment method. For Cash on Delivery orders, refunds may be processed via bank transfer or to your CharmShop wallet.
              Please refer to our <a href="/help/cancellation-returns" className="text-primary hover:underline">Cancellation & Returns help page</a> for more details on the process and timelines.
            </p>
          </section>

          <p className="mt-8">
            CharmShop reserves the right to amend this Return Policy at any time. The policy applicable to your purchase will be the one in effect at the time of your order.
            If you have any questions, please <a href="/contact-us" className="text-primary hover:underline">contact our support team</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
