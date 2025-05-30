
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Lightbulb, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers - EasyShope',
  description: 'Explore career opportunities at EasyShope and join our innovative team.',
};

export default function CareersPage() {
  const jobOpenings = [
    { id: 1, title: 'Senior Software Engineer', location: 'Bengaluru, India', department: 'Technology' },
    { id: 2, title: 'Product Manager - Mobile Apps', location: 'Remote', department: 'Product' },
    { id: 3, title: 'Digital Marketing Specialist', location: 'Bengaluru, India', department: 'Marketing' },
    { id: 4, title: 'Customer Support Executive', location: 'Work From Home', department: 'Operations' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 md:p-12 text-center">
           <div className="inline-flex items-center justify-center bg-primary-foreground/20 text-primary-foreground rounded-full p-3 mb-4">
            <Briefcase className="h-12 w-12" />
          </div>
          <CardTitle className="text-3xl md:text-5xl font-bold">Join Our Team</CardTitle>
          <CardDescription className="text-xl md:text-2xl mt-2 text-primary-foreground/90 max-w-3xl mx-auto">
            Be a part of EasyShope and help shape the future of e-commerce. We&apos;re looking for talented individuals to grow with us.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <section className="my-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Why Work at EasyShope?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovate & Create</h3>
                <p className="text-muted-foreground">Work on challenging projects and contribute to cutting-edge solutions in a dynamic environment.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-muted-foreground">Join a diverse and supportive team that values collaboration, learning, and mutual respect.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p className="text-muted-foreground">We invest in our employees&apos; development and offer opportunities for professional advancement.</p>
              </div>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Current Openings</h2>
            {jobOpenings.length > 0 ? (
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription>{job.department} &middot; {job.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        We are looking for a talented {job.title} to join our {job.department} team. 
                        This role is based in {job.location}.
                      </p>
                      <Button asChild variant="outline">
                        <Link href="#">Learn More & Apply (Not Implemented)</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                We don&apos;t have any open positions at the moment, but we are always looking for talent. 
                Feel free to send your resume to <a href="mailto:careers@easyshope.example.com" className="text-primary hover:underline">careers@easyshope.example.com</a>.
              </p>
            )}
          </section>
          
          <div className="text-center mt-12">
             <p className="text-lg text-muted-foreground">
               Can&apos;t find a suitable role?
            </p>
            <Button size="lg" className="mt-2 bg-primary hover:bg-primary/90">
              <Link href="mailto:careers@easyshope.example.com">Submit Your Resume</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
