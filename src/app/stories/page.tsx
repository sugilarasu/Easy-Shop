
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Newspaper, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EasyShope Stories - EasyShope',
  description: 'Read inspiring stories, news, and updates from the world of EasyShope.',
};

export default function EasyShopeStoriesPage() {
  const stories = [
    {
      id: 1,
      title: 'Empowering Local Artisans: How EasyShope is Making a Difference',
      excerpt: 'Discover how our platform is helping small businesses and local artisans reach a wider audience and grow their enterprises.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'artisans community',
      category: 'Community',
      date: 'October 26, 2023',
      slug: 'empowering-local-artisans'
    },
    {
      id: 2,
      title: 'Behind the Code: The Tech That Powers Your Seamless Shopping',
      excerpt: 'A sneak peek into the innovative technologies and dedicated team that make your EasyShope experience smooth and secure.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'technology code',
      category: 'Technology',
      date: 'October 15, 2023',
      slug: 'behind-the-code'
    },
    {
      id: 3,
      title: 'Our Commitment to Sustainability: Greener Shopping, Brighter Future',
      excerpt: 'Learn about EasyShope\'s initiatives to reduce environmental impact and promote sustainable practices in e-commerce.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'sustainability environment',
      category: 'Sustainability',
      date: 'September 28, 2023',
      slug: 'commitment-to-sustainability'
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
          <BookOpen className="h-12 w-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">EasyShope Stories</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-2 max-w-2xl mx-auto">
          Insights, updates, and inspiring narratives from the heart of EasyShope.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <Card key={story.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/stories/${story.slug}`} passHref legacyBehavior>
              <a className="block">
                <div className="relative aspect-video w-full">
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={story.dataAiHint}
                  />
                </div>
              </a>
            </Link>
            <CardHeader>
              <CardDescription className="text-sm text-primary font-medium">{story.category.toUpperCase()} &middot; {story.date}</CardDescription>
              <Link href={`/stories/${story.slug}`} passHref legacyBehavior>
                <a className="hover:underline">
                  <CardTitle className="text-xl font-semibold mt-1">{story.title}</CardTitle>
                </a>
              </Link>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm leading-relaxed">{story.excerpt}</p>
            </CardContent>
            <div className="p-4 pt-0">
              <Link href={`/stories/${story.slug}`} passHref legacyBehavior>
                <a className="text-primary hover:underline font-medium text-sm">
                  Read More &rarr;
                </a>
              </Link>
            </div>
          </Card>
        ))}
      </div>
      <p className="text-center text-muted-foreground mt-12">
        (Note: Individual story pages like `/stories/empowering-local-artisans` are not implemented in this step.)
      </p>
    </div>
  );
}
