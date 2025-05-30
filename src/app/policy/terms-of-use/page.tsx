
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Gavel, UserCheck, Shield, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use - EasyShope',
  description: 'Read the Terms of Use governing your access and use of the EasyShope platform.',
};

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <Gavel className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Terms of Use</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Effective Date: [Insert Current Date Here, e.g., November 10, 2023]
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none text-lg space-y-6 p-6 md:p-8">
          <p>
            Welcome to EasyShope! These Terms of Use (&quot;Terms&quot;) govern your access to and use of the EasyShope website, mobile applications, and services (collectively, the &quot;Platform&quot;) provided by EasyShope Internet Private Limited (&quot;EasyShope&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). 
            By accessing or using the Platform, you agree to be bound by these Terms.
          </p>

          <section>
            <h2 className="text-2xl font-semibold flex items-center"><UserCheck className="h-6 w-6 mr-2 text-primary" />1. Your Account</h2>
            <p>
              To use certain features of the Platform, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. 
              You agree to provide accurate and complete information when creating your account and to update it promptly if any information changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center"><Shield className="h-6 w-6 mr-2 text-primary" />2. Use of the Platform</h2>
            <p>
              You agree to use the Platform only for lawful purposes and in accordance with these Terms. You will not use the Platform:
            </p>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>To engage in any fraudulent activity or to impersonate any person or entity.</li>
              <li>To transmit any unsolicited or unauthorized advertising or promotional materials.</li>
              <li>To interfere with or disrupt the integrity or performance of the Platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Product Listings and Purchases</h2>
            <p>
              EasyShope acts as a marketplace for sellers to list and sell their products. While we strive to ensure the accuracy of product information, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. 
              All purchases made through the Platform are subject to our <a href="/policy/return-policy" className="text-primary hover:underline">Return Policy</a> and other applicable policies.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
            <p>
              The Platform and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by EasyShope, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, EasyShope shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Platform; (b) any conduct or content of any third party on the Platform; or (c) unauthorized access, use, or alteration of your transmissions or content.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold flex items-center"><FileText className="h-6 w-6 mr-2 text-primary" />6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the &quot;Effective Date&quot; at the top. 
              Your continued use of the Platform after any such change constitutes your acceptance of the new Terms.
            </p>
          </section>

          <p className="mt-8">
            If you have any questions about these Terms, please <a href="/contact-us" className="text-primary hover:underline">contact us</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
