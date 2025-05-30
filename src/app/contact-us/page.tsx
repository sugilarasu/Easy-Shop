
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - EasyShope',
  description: 'Get in touch with the EasyShope support team.',
};

export default function ContactUsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <Mail className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Contact Us</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            We&apos;d love to hear from you! Reach out with any questions or feedback.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Regarding my order" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Our Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-muted-foreground">
                    EasyShope Internet Private Limited,<br />
                    Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
                    Outer Ring Road, Devarabeesanahalli Village,<br />
                    Bengaluru, 560103, Karnataka, India
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">
                    Customer Support: <a href="tel:+910000000000" className="hover:underline text-primary">+91 (000) 000-0000</a> (Placeholder)
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    Support: <a href="mailto:support@easyshope.example.com" className="hover:underline text-primary">support@easyshope.example.com</a> (Placeholder)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Operating Hours</h4>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
              <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM (IST)</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
