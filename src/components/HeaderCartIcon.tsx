'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/hooks/useCart';
import { useEffect, useState } from 'react';

export function HeaderCartIcon() {
  const itemCount = useCartStore((state) => state.getItemCount());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null during SSR/hydration mismatch phase
    return (
      <Button variant="ghost" size="icon" asChild aria-label="Shopping cart">
        <Link href="/cart">
          <ShoppingCart size={24} />
        </Link>
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="icon" asChild className="relative" aria-label={`Shopping cart with ${itemCount} items`}>
      <Link href="/cart">
        <ShoppingCart size={24} />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
            {itemCount}
          </span>
        )}
      </Link>
    </Button>
  );
}
