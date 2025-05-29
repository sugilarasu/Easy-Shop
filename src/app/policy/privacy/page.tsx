import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shield, FileLock, Users, Cookie } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - E-Clone',
  description: 'Understand how E-Clone collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <FileLock className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Privacy Policy</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Effective Date: [Insert Current Date Here, e.g., November 10, 2023]
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none text-lg space-y-6 p-6 md:p-8">
          <p>
            E-Clone Internet Private Limited (&quot;E-Clone&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile applications, or interact with our services (collectively, the &quot;Platform&quot;).
          </p>

          <section>
            <h2 className="text-2xl font-semibold flex items-center"><Users className="h-6 w-6 mr-2 text-primary" />1. Information We Collect</h2>
            <p>We may collect personal information that you provide to us directly, such as when you create an account, place an order, or contact customer support. This may include:</p>
            <ul>
              <li>Contact details (name, email address, phone number, shipping address).</li>
              <li>Account login credentials.</li>
              <li>Payment information (processed securely by our payment partners).</li>
              <li>Order history and preferences.</li>
            </ul>
            <p>We may also collect certain information automatically when you use our Platform, such as your IP address, browser type, device information, and browsing activity through cookies and similar technologies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>To provide, operate, and maintain our Platform.</li>
              <li>To process your transactions and fulfill your orders.</li>
              <li>To personalize your shopping experience and recommend products.</li>
              <li>To communicate with you, including responding to your inquiries and sending service-related updates.</li>
              <li>To improve our Platform, products, and services.</li>
              <li>For marketing and promotional purposes, with your consent where required.</li>
              <li>To prevent fraud and ensure the security of our Platform.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
            <p>
              We may share your information with third parties in certain circumstances, such as:
            </p>
            <ul>
              <li>With sellers on our marketplace to fulfill your orders.</li>
              <li>With service providers who perform functions on our behalf (e.g., payment processors, delivery partners, marketing agencies).</li>
              <li>If required by law or in response to valid legal processes.</li>
              <li>To protect the rights, property, or safety of E-Clone, our users, or others.</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold flex items-center"><Cookie className="h-6 w-6 mr-2 text-primary" />4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing behavior, enhance your user experience, and analyze Platform traffic. 
              You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center"><Shield className="h-6 w-6 mr-2 text-primary" />5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure. 
              Please see our <a href="/policy/security" className="text-primary hover:underline">Security Policy</a> for more details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Your Choices and Rights</h2>
            <p>
              You may have certain rights regarding your personal information, such as the right to access, correct, or delete your data, subject to applicable laws. You can usually manage your account information and communication preferences through your account settings.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the &quot;Effective Date&quot;. 
              We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <p className="mt-8">
            If you have any questions or concerns about this Privacy Policy or our data practices, please <a href="/contact-us" className="text-primary hover:underline">contact us</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
