
import ShoppingCartClient from '@/components/ShoppingCartClient';

export const metadata = {
  title: 'Your Shopping Cart - CharmShop',
};

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <ShoppingCartClient />
    </div>
  );
}
