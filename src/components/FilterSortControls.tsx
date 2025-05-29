
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
// Removed type import for Product as it's not used here.

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
        (maxPriceParam && Number(maxPriceParam) <= maxPrice) ? Number(maxPriceParam) : maxPrice,
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
    
    router.push(`/?${params.toString()}`, { scroll: false }); // Prevent scroll to top
    onFilterChange({ categories: selectedCategories, brands: selectedBrands, priceRange, rating: selectedRating });
  };

  const handleSortChange = (value: string) => {
    setSortKey(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    router.push(`/?${params.toString()}`, { scroll: false }); // Prevent scroll to top
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
      // Ensure min <= max and within overall bounds
      if (index === 0) {
        newRange[0] = Math.max(0, Math.min(newRange[0], priceRange[1]));
      }
      if (index === 1) {
        newRange[1] = Math.min(maxPrice, Math.max(newRange[1], priceRange[0]));
      }
      setPriceRange(newRange);
    }
  };
  
  const handlePriceSliderChange = (value: [number, number]) => {
    // Ensure min is not greater than max coming from slider
    const newRange: [number, number] = [Math.min(value[0], value[1]), Math.max(value[0], value[1])];
    setPriceRange(newRange);
  };


  return (
    <div className="w-full space-y-6 p-4 border rounded-lg shadow-sm bg-card">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="flex-grow sm:flex-grow-0">
            <Label htmlFor="sort-by" className="text-sm font-medium mb-1 sm:mb-0 sm:mr-2 sr-only sm:not-sr-only">Sort By</Label>
            <Select value={sortKey} onValueChange={handleSortChange}>
              <SelectTrigger id="sort-by" className="w-full sm:w-auto min-w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Avg. Customer Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleFilterApply} size="sm" className="w-full sm:w-auto">Apply Filters</Button>
        </div>
      </div>
      
      <Accordion type="multiple" className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AccordionItem value="category" className="border-b-0">
          <AccordionTrigger className="text-base py-2 hover:no-underline border rounded-md px-3 data-[state=open]:bg-muted">Category</AccordionTrigger>
          <AccordionContent className="mt-2 p-3 border rounded-md space-y-2 max-h-60 overflow-y-auto">
            {categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`cat-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
                />
                <Label htmlFor={`cat-${category}`} className="font-normal text-sm">{category}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand" className="border-b-0">
          <AccordionTrigger className="text-base py-2 hover:no-underline border rounded-md px-3 data-[state=open]:bg-muted">Brand</AccordionTrigger>
          <AccordionContent className="mt-2 p-3 border rounded-md space-y-2 max-h-60 overflow-y-auto">
            {brands.map(brand => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={(checked) => handleBrandChange(brand, !!checked)}
                />
                <Label htmlFor={`brand-${brand}`} className="font-normal text-sm">{brand}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border-b-0">
          <AccordionTrigger className="text-base py-2 hover:no-underline border rounded-md px-3 data-[state=open]:bg-muted">Price Range</AccordionTrigger>
          <AccordionContent className="mt-2 p-3 border rounded-md space-y-4">
            <Slider
              min={0}
              max={maxPrice > 0 ? maxPrice : 1000} // Ensure max is not 0
              step={10}
              value={priceRange}
              onValueChange={handlePriceSliderChange}
              className="my-4"
            />
            <div className="flex justify-between items-center space-x-2">
              <Input 
                type="number" 
                value={priceRange[0]} 
                onChange={(e) => handlePriceInputChange(0, e.target.value)}
                className="w-1/2 text-sm h-9"
                aria-label="Minimum price"
                min={0}
                max={priceRange[1]}
              />
              <span className="text-muted-foreground">-</span>
              <Input 
                type="number" 
                value={priceRange[1]} 
                onChange={(e) => handlePriceInputChange(1, e.target.value)}
                className="w-1/2 text-sm h-9"
                aria-label="Maximum price"
                min={priceRange[0]}
                max={maxPrice > 0 ? maxPrice : 1000}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating" className="border-b-0">
          <AccordionTrigger className="text-base py-2 hover:no-underline border rounded-md px-3 data-[state=open]:bg-muted">Customer Rating</AccordionTrigger>
          <AccordionContent className="mt-2 p-3 border rounded-md space-y-2">
            {[4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={selectedRating === rating}
                  onCheckedChange={(checked) => setSelectedRating(checked ? rating : 0)}
                />
                <Label htmlFor={`rating-${rating}`} className="font-normal text-sm">{rating} Stars & Up</Label>
              </div>
            ))}
             <div className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-clear`}
                  checked={selectedRating === 0}
                  onCheckedChange={(checked) => setSelectedRating(0)}
                />
                <Label htmlFor={`rating-clear`} className="font-normal text-sm text-muted-foreground">Any Rating</Label>
              </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterSortControls;
