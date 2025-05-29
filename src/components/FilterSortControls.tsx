'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import type { Product } from '@/types';

interface FilterSortControlsProps {
  categories: string[];
  brands: string[];
  onFilterChange: (filters: AppliedFilters) => void;
  onSortChange: (sortKey: string) => void;
  maxPrice: number;
}

export interface AppliedFilters {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  rating: number;
}

const FilterSortControls: React.FC<FilterSortControlsProps> = ({
  categories,
  brands,
  onFilterChange,
  onSortChange,
  maxPrice,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<string[]>(searchParams.getAll('category') || []);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(searchParams.getAll('brand') || []);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get('minPrice') || 0),
    Number(searchParams.get('maxPrice') || maxPrice),
  ]);
  const [selectedRating, setSelectedRating] = useState<number>(Number(searchParams.get('rating') || 0));
  const [sortKey, setSortKey] = useState<string>(searchParams.get('sort') || 'popularity');

  useEffect(() => {
    // Initialize price range from URL or default to full range
    const minPriceParam = searchParams.get('minPrice');
    const maxPriceParam = searchParams.get('maxPrice');
    setPriceRange([
        minPriceParam ? Number(minPriceParam) : 0,
        maxPriceParam ? Number(maxPriceParam) : maxPrice,
    ]);
    setSelectedCategories(searchParams.getAll('category') || []);
    setSelectedBrands(searchParams.getAll('brand') || []);
    setSelectedRating(Number(searchParams.get('rating') || 0));
    setSortKey(searchParams.get('sort') || 'popularity');
  }, [searchParams, maxPrice]);
  

  const handleFilterApply = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    params.delete('category');
    selectedCategories.forEach(cat => params.append('category', cat));
    
    params.delete('brand');
    selectedBrands.forEach(brand => params.append('brand', brand));

    params.set('minPrice', priceRange[0].toString());
    params.set('maxPrice', priceRange[1].toString());
    params.set('rating', selectedRating.toString());
    
    router.push(`/?${params.toString()}`);
    onFilterChange({ categories: selectedCategories, brands: selectedBrands, priceRange, rating: selectedRating });
  };

  const handleSortChange = (value: string) => {
    setSortKey(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    router.push(`/?${params.toString()}`);
    onSortChange(value);
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(prev => 
      checked ? [...prev, category] : prev.filter(c => c !== category)
    );
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    setSelectedBrands(prev => 
      checked ? [...prev, brand] : prev.filter(b => b !== brand)
    );
  };
  
  const handlePriceInputChange = (index: 0 | 1, value: string) => {
    const newPrice = parseFloat(value);
    if (!isNaN(newPrice)) {
      const newRange = [...priceRange] as [number, number];
      newRange[index] = newPrice;
      // Ensure min <= max
      if (index === 0 && newRange[0] > newRange[1]) newRange[1] = newRange[0];
      if (index === 1 && newRange[1] < newRange[0]) newRange[0] = newRange[1];
      setPriceRange(newRange);
    }
  };

  return (
    <div className="w-full md:w-64 lg:w-72 space-y-6 p-4 border rounded-lg shadow-sm bg-card">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button onClick={handleFilterApply} size="sm">Apply</Button>
      </div>
      
      <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="text-base">Category</AccordionTrigger>
          <AccordionContent className="space-y-2 max-h-60 overflow-y-auto">
            {categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`cat-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
                />
                <Label htmlFor={`cat-${category}`} className="font-normal">{category}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger className="text-base">Brand</AccordionTrigger>
          <AccordionContent className="space-y-2 max-h-60 overflow-y-auto">
            {brands.map(brand => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={(checked) => handleBrandChange(brand, !!checked)}
                />
                <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-base">Price Range</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <Slider
              min={0}
              max={maxPrice}
              step={10}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="my-4"
            />
            <div className="flex justify-between items-center space-x-2">
              <Input 
                type="number" 
                value={priceRange[0]} 
                onChange={(e) => handlePriceInputChange(0, e.target.value)}
                className="w-1/2"
                aria-label="Minimum price"
              />
              <span>-</span>
              <Input 
                type="number" 
                value={priceRange[1]} 
                onChange={(e) => handlePriceInputChange(1, e.target.value)}
                className="w-1/2"
                aria-label="Maximum price"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="text-base">Rating</AccordionTrigger>
          <AccordionContent className="space-y-2">
            {[4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={selectedRating === rating}
                  onCheckedChange={(checked) => setSelectedRating(checked ? rating : 0)}
                />
                <Label htmlFor={`rating-${rating}`} className="font-normal">{rating} Stars & Up</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div>
        <Label htmlFor="sort-by" className="text-base font-semibold mb-2 block">Sort By</Label>
        <Select value={sortKey} onValueChange={handleSortChange}>
          <SelectTrigger id="sort-by" className="w-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">Popularity</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Avg. Customer Rating</SelectItem>
            {/* <SelectItem value="newest">Newest</SelectItem> */}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterSortControls;
