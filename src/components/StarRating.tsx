import type { Star } from 'lucide-react';
import { Star as StarIcon, StarHalf, StarOff } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 16,
  className,
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} fill="currentColor" size={size} className="text-accent" />
      ))}
      {hasHalfStar && <StarHalf key="half" fill="currentColor" size={size} className="text-accent" />}
      {[...Array(emptyStars < 0 ? 0 : emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} size={size} className="text-muted-foreground" />
      ))}
    </div>
  );
};

export default StarRating;
