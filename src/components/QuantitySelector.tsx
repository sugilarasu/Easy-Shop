'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  maxQuantity: number;
  onQuantityChange: (newQuantity: number) => void;
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  maxQuantity,
  onQuantityChange,
  className,
}) => {
  const increment = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1) {
      val = 1;
    }
    if (val > maxQuantity) {
      val = maxQuantity;
    }
    onQuantityChange(val);
  };


  return (
    <div className={`flex items-center border rounded-md ${className}`}>
      <Button variant="ghost" size="icon" onClick={decrement} disabled={quantity <= 1} aria-label="Decrease quantity">
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="1"
        max={maxQuantity}
        className="w-12 text-center border-0 focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        aria-label="Item quantity"
      />
      <Button variant="ghost" size="icon" onClick={increment} disabled={quantity >= maxQuantity} aria-label="Increase quantity">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default QuantitySelector;
