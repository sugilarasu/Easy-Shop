
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-card text-muted-foreground py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h5 className="font-semibold text-foreground mb-3">ABOUT</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="hover:text-primary hover:underline">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-primary hover:underline">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary hover:underline">Careers</Link></li>
              <li><Link href="/stories" className="hover:text-primary hover:underline">EasyShope Stories</Link></li>
              <li><Link href="/press" className="hover:text-primary hover:underline">Press</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">HELP</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/payments" className="hover:text-primary hover:underline">Payments</Link></li>
              <li><Link href="/help/shipping" className="hover:text-primary hover:underline">Shipping</Link></li>
              <li><Link href="/help/cancellation-returns" className="hover:text-primary hover:underline">Cancellation & Returns</Link></li>
              <li><Link href="/help/faq" className="hover:text-primary hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">POLICY</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/policy/return-policy" className="hover:text-primary hover:underline">Return Policy</Link></li>
              <li><Link href="/policy/terms-of-use" className="hover:text-primary hover:underline">Terms Of Use</Link></li>
              <li><Link href="/policy/security" className="hover:text-primary hover:underline">Security</Link></li>
              <li><Link href="/policy/privacy" className="hover:text-primary hover:underline">Privacy</Link></li>
              <li><Link href="/sitemap" className="hover:text-primary hover:underline">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">CATEGORIES</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mobiles" className="hover:text-primary hover:underline">Mobiles</Link></li>
              <li><Link href="/fashion" className="hover:text-primary hover:underline">Fashion</Link></li>
              <li><Link href="/electronics" className="hover:text-primary hover:underline">Electronics</Link></li>
              <li><Link href="/home-decor" className="hover:text-primary hover:underline">Home & Decor</Link></li>
              <li><Link href="/appliances" className="hover:text-primary hover:underline">Appliances</Link></li>
              <li><Link href="/travel" className="hover:text-primary hover:underline">Travel</Link></li>
              <li><Link href="/grocery" className="hover:text-primary hover:underline">Grocery</Link></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h5 className="font-semibold text-foreground mb-3">Mail Us</h5>
            <address className="text-sm not-italic">
              EasyShope Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </address>
          </div>
        </div>
        <div className="border-t pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EasyShope. All rights reserved.
          </p>
          <p className="text-xs mt-1">
            This is a demo application for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
