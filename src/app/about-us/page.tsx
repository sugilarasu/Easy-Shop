
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - CharmShop',
  description: 'Learn more about CharmShop, our mission, vision, and values.',
};

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <Users className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">About CharmShop</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Your trusted partner in online shopping.
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none text-lg space-y-6 p-6 md:p-8">
          <p>
            Welcome to CharmShop! We are a passionate team dedicated to revolutionizing your online shopping
            experience. Inspired by the convenience and variety of leading e-commerce platforms, 
            CharmShop aims to provide a seamless, enjoyable, and secure platform for all your needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex items-center">
                  <Target className="h-8 w-8 mr-3 text-primary" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  To offer a diverse range of high-quality products at competitive prices, 
                  coupled with exceptional customer service and a user-friendly shopping environment. 
                  We strive to make online shopping accessible, reliable, and delightful for everyone.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex items-center">
                  <Eye className="h-8 w-8 mr-3 text-primary" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  To become a leading e-commerce destination known for innovation, customer trust, and 
                  a commitment to sustainable practices. We envision a future where CharmShop is synonymous 
                  with a superior online retail experience.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mt-8">Why Choose CharmShop?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Wide Selection:</strong> From electronics to fashion, groceries to travel, find everything you need in one place.</li>
            <li><strong>Quality Assurance:</strong> We partner with trusted brands and sellers to ensure product quality.</li>
            <li><strong>User-Friendly Platform:</strong> Easy navigation, secure payments, and a smooth checkout process.</li>
            <li><strong>Customer Focus:</strong> Our dedicated support team is here to assist you every step of the way.</li>
          </ul>
          <p>
            Thank you for choosing CharmShop. We look forward to serving you!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
