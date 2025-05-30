
import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Map, Home, ShoppingBag, Info, HelpCircle, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap - EasyShope',
  description: 'Explore the sitemap of EasyShope to easily navigate through our website.',
};

export default function SitemapPage() {
  const mainCategories = [
    { name: 'Home', href: '/', icon: <Home className="h-5 w-5 mr-2" /> },
    { name: 'Login / Register', href: '/login', icon: <User className="h-5 w-5 mr-2" /> },
    { name: 'Your Cart', href: '/cart', icon: <ShoppingBag className="h-5 w-5 mr-2" /> },
  ];

  const productCategories = [
    { name: 'Mobiles', href: '/mobiles' },
    { name: 'Fashion', href: '/fashion' },
    { name: 'Electronics', href: '/electronics' },
    { name: 'Home & Decor', href: '/home-decor' },
    { name: 'Appliances', href: '/appliances' },
    { name: 'Travel', href: '/travel' },
    { name: 'Grocery', href: '/grocery' },
  ];

  const aboutLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Careers', href: '/careers' },
    { name: 'EasyShope Stories', href: '/stories' },
    { name: 'Press', href: '/press' },
  ];

  const helpLinks = [
    { name: 'Payments', href: '/help/payments' },
    { name: 'Shipping', href: '/help/shipping' },
    { name: 'Cancellation & Returns', href: '/help/cancellation-returns' },
    { name: 'FAQ', href: '/help/faq' },
  ];

  const policyLinks = [
    { name: 'Return Policy', href: '/policy/return-policy' },
    { name: 'Terms Of Use', href: '/policy/terms-of-use' },
    { name: 'Security', href: '/policy/security' },
    { name: 'Privacy', href: '/policy/privacy' },
  ];


  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
           <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <Map className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Sitemap</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Navigate through EasyShope with ease.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Home className="h-6 w-6 mr-2 text-primary" /> Main Pages
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 list-none p-0">
              {mainCategories.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center text-primary hover:underline p-2 rounded hover:bg-muted transition-colors">
                    {link.icon} {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <ShoppingBag className="h-6 w-6 mr-2 text-primary" /> Product Categories
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 list-none p-0">
              {productCategories.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="block text-primary hover:underline p-2 rounded hover:bg-muted transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Info className="h-5 w-5 mr-2 text-primary" /> About EasyShope
              </h2>
              <ul className="space-y-2 list-none p-0">
                {aboutLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="block text-primary hover:underline p-1 rounded hover:bg-muted transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" /> Help Center
              </h2>
              <ul className="space-y-2 list-none p-0">
                {helpLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="block text-primary hover:underline p-1 rounded hover:bg-muted transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" /> Our Policies
              </h2>
              <ul className="space-y-2 list-none p-0">
                {policyLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="block text-primary hover:underline p-1 rounded hover:bg-muted transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Re-export User if needed, or import directly
import { User } from 'lucide-react';
