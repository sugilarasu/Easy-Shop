
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, Lock, Key, Fingerprint } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security - EasyShope',
  description: 'Learn about the security measures EasyShope takes to protect your data and transactions.',
};

export default function SecurityPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Security at EasyShope</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Your trust and safety are our top priorities.
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none text-lg space-y-8 p-6 md:p-8">
          <p>
            At EasyShope, we are committed to ensuring a secure shopping environment for all our users. We implement a variety of security measures to protect your personal information and transaction data.
          </p>

          <section>
            <h2 className="text-2xl font-semibold flex items-center"><Lock className="h-6 w-6 mr-2 text-primary" />Secure Transactions</h2>
            <p>
              All online payment transactions on EasyShope are processed through secure payment gateways that use industry-standard encryption technologies like SSL (Secure Sockets Layer). 
              This means your sensitive payment information (such as credit card details) is encrypted during transmission, protecting it from unauthorized access. We do not store your full credit card numbers on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center"><Key className="h-6 w-6 mr-2 text-primary" />Account Protection</h2>
            <p>
              We encourage you to create a strong, unique password for your EasyShope account and keep it confidential. Avoid using easily guessable passwords or sharing your login credentials with anyone.
              EasyShope may offer features like two-factor authentication (2FA) for an added layer of security on your account.
            </p>
            <p>
              Be wary of phishing attempts. EasyShope will never ask for your password, OTP (One-Time Password), or sensitive financial information via unsolicited email or phone calls. Always ensure you are on the official EasyShope website or app before entering your credentials.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold flex items-center"><Fingerprint className="h-6 w-6 mr-2 text-primary" />Data Security</h2>
            <p>
              We have implemented technical and organizational measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, or disclosure. 
              However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
              For more details, please refer to our <a href="/policy/privacy" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Safe Shopping Tips</h2>
            <ul>
              <li>Always use a secure internet connection when shopping online.</li>
              <li>Keep your device operating system and browser updated.</li>
              <li>Regularly review your account activity and bank statements for any suspicious transactions.</li>
              <li>Log out of your EasyShope account when using a shared computer.</li>
              <li>Report any suspicious activity or security concerns to us immediately.</li>
            </ul>
          </section>
          
          <p className="mt-8">
            If you have any security concerns or believe your account has been compromised, please <a href="/contact-us" className="text-primary hover:underline">contact our support team</a> immediately.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
