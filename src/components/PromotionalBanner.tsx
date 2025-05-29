import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface PromotionalBannerProps {
  imageUrl: string;
  altText: string;
  linkUrl: string;
  title?: string;
  description?: string;
  dataAiHint?: string;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ 
  imageUrl, 
  altText, 
  linkUrl, 
  title, 
  description,
  dataAiHint
}) => {
  return (
    <Link href={linkUrl} passHref legacyBehavior>
      <a className="block group" aria-label={altText}>
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-0 relative aspect-[3/1] md:aspect-[4/1]">
            <Image
              src={imageUrl}
              alt={altText}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={dataAiHint}
            />
            {(title || description) && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                {title && <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{title}</h3>}
                {description && <p className="text-sm md:text-base text-gray-200">{description}</p>}
              </div>
            )}
          </CardContent>
        </Card>
      </a>
    </Link>
  );
};

export default PromotionalBanner;
