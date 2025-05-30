
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CategoryNavigationProps {
  categories: string[];
  className?: string;
}

const categoryVisuals: Record<string, { imageUrl: string; dataAiHint: string; name: string; path: string }> = {
  'Mobiles': { name: 'Mobiles', imageUrl: 'https://placehold.co/200x150.png', dataAiHint: 'smartphone mobile', path: '/mobiles' },
  'Electronics': { name: 'Electronics', imageUrl: 'https://placehold.co/200x150.png', dataAiHint: 'electronics gadget', path: '/electronics' },
  'Fashion': { name: 'Fashion', imageUrl: 'https://placehold.co/200x150.png', dataAiHint: 'clothing fashion', path: '/fashion' },
  'Home & Decor': { name: 'Home', imageUrl: 'https://placehold.co/200x150.png', dataAiHint: 'home decor', path: '/home-decor' },
  'Appliances': { name: 'Appliances', imageUrl: 'https://placehold.co/200x150.png', dataAiHint: 'kitchen appliance', path: '/appliances' },
  'Grocery': { name: 'Grocery', imageUrl: 'https://placehold.co/200x150.png', dataAiHint: 'fresh food', path: '/grocery' },
  'Travel': { name: 'Travel', imageUrl: 'https://placehold.co/200x150.png', dataAiHint: 'travel luggage', path: '/travel' },
  'Sports & Outdoors': { name: 'Sports', imageUrl: 'https://placehold.co/200x150.png', dataAiHint: 'sports equipment', path: '/sports' }, // Assuming /sports might be a future page
};

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ categories, className }) => {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
        {categories.map((categoryName) => {
          const visual = categoryVisuals[categoryName] || {
            name: categoryName,
            imageUrl: 'https://placehold.co/200x150.png',
            dataAiHint: categoryName.toLowerCase().replace(/ & /g, ' '),
            path: `/${categoryName.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`
          };

          return (
            <Link key={visual.name} href={visual.path} passHref legacyBehavior>
              <a className="block group text-center">
                <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center p-2">
                  <div className="relative w-full aspect-[4/3] mb-2 rounded-md overflow-hidden">
                    <Image
                      src={visual.imageUrl}
                      alt={visual.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform"
                      data-ai-hint={visual.dataAiHint}
                    />
                  </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors truncate w-full">
                    {visual.name}
                  </p>
                </Card>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavigation;
