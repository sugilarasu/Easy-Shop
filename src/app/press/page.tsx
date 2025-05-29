import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, Download, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press & Media - E-Clone',
  description: 'Find press releases, media kits, and contact information for E-Clone.',
};

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: 'E-Clone Launches New AI-Powered Recommendation Engine',
      date: 'November 5, 2023',
      link: '#', // Placeholder link
      summary: 'E-Clone today announced the launch of its advanced AI recommendation engine, promising a more personalized shopping experience for its users.'
    },
    {
      id: 2,
      title: 'E-Clone Reports Record Growth in Q3 2023',
      date: 'October 18, 2023',
      link: '#',
      summary: 'The company reported a 40% increase in user acquisition and a significant rise in gross merchandise value for the third quarter.'
    },
    {
      id: 3,
      title: 'E-Clone Expands into Grocery Delivery Service',
      date: 'September 10, 2023',
      link: '#',
      summary: 'E-Clone is set to revolutionize the online grocery market with its new rapid delivery service in major metropolitan areas.'
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <Newspaper className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Press & Media</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Stay updated with the latest news and announcements from E-Clone.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Recent Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <Card key={release.id} className="bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-xl hover:text-primary">
                      <Link href={release.link}>{release.title}</Link>
                    </CardTitle>
                    <CardDescription>{release.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{release.summary}</p>
                    <Button variant="link" asChild className="px-0 h-auto">
                      <Link href={release.link}>Read Full Release (Not Implemented)</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Download className="h-5 w-5 mr-2 text-primary" />
                  Media Kit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download our official media kit including logos, company information, and executive bios.
                </p>
                <Button disabled className="w-full md:w-auto">
                  Download Media Kit (Not Available)
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Media Inquiries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For all media and press-related inquiries, please contact our communications team.
                </p>
                <Button asChild className="w-full md:w-auto bg-primary hover:bg-primary/90">
                  <Link href="mailto:press@eclone.example.com">Contact Press Team</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
          
          <div className="text-center">
             <p className="text-muted-foreground">
               Follow us on social media for more updates (links not implemented).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
