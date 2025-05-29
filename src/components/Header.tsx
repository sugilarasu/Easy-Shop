
import Link from 'next/link';
import { Package2 } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { HeaderCartIcon } from './HeaderCartIcon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold" aria-label="CharmShop Home">
          <Package2 size={32} />
          <span>CharmShop</span>
        </Link>
        
        <div className="flex-1 flex justify-center px-4">
          <SearchBar />
        </div>

        <nav className="flex items-center gap-4">
          {/* Placeholder for login/user actions, not part of current scope */}
          {/* <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">Login</Button> */}
          <HeaderCartIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
