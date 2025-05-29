'use client';

import { useState, useEffect } from 'react';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, Minus, Plus } from 'lucide-react';
import { useBrowsingHistory } from '@/hooks/useBrowsingHistory';

interface ProductDetailsClientBlockProps {
  product: Product;
}

const ProductDetailsClientBlock: React.FC<ProductDetailsClientBlockProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const addItemToCart = useCartStore((state) => state.addItem);
  const { toast } = useToast();
  const { addProductToHistory } = useBrowsingHistory();

  useEffect(() => {
    if (product) {
      addProductToHistory(product.name);
    }
  }, [product, addProductToHistory]);


  const handleAddToCart = () => {
    if (product.stock < quantity ) {
      toast({
        title: "Out of Stock",
        description: `Only ${product.stock} items available.`,
        variant: "destructive",
      });
      setQuantity(product.stock > 0 ? product.stock : 1);
      return;
    }
    if (quantity <= 0) {
      toast({
        title: "Invalid Quantity",
        description: "Please enter a quantity greater than 0.",
        variant: "destructive",
      });
      return;
    }
    addItemToCart(product, quantity);
    toast({
      title: "Added to Cart",
      description: `${product.name} (x${quantity}) has been added to your cart.`,
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, product.stock));
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1) {
      val = 1;
    }
    if (val > product.stock) {
      val = product.stock;
      toast({
        title: "Stock Limit Reached",
        description: `Maximum ${product.stock} items can be added.`,
        variant: "default",
      });
    }
    setQuantity(val);
  };


  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Label htmlFor="quantity" className="text-sm font-medium">Quantity:</Label>
        <div className="flex items-center border rounded-md">
          <Button variant="ghost" size="icon" onClick={decrementQuantity} disabled={quantity <= 1} aria-label="Decrease quantity">
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max={product.stock}
            className="w-16 text-center border-0 focus-visible:ring-0"
            aria-label="Product quantity"
          />
          <Button variant="ghost" size="icon" onClick={incrementQuantity} disabled={quantity >= product.stock} aria-label="Increase quantity">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {product.stock > 0 ? (
         <p className="text-sm text-green-600">{product.stock} items in stock</p>
       ) : (
         <p className="text-sm text-red-600">Out of stock</p>
       )}
      <Button 
        size="lg" 
        onClick={handleAddToCart} 
        className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
        disabled={product.stock === 0}
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  );
};

// Simple Label component, can be moved to ui/label if not already there with this exact style
const Label = ({ htmlFor, className, children }: {htmlFor?: string, className?: string, children: React.ReactNode}) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}>
    {children}
  </label>
);


export default ProductDetailsClientBlock;
