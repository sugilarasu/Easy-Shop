
import Link from 'next/link';
import { Package2 } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import { HeaderCartIcon } from './HeaderCartIcon';
import { AuthNavMenu } from './AuthNavMenu'; // Import the new component

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold" aria-label="EasyShope Home">
          <Package2 size={32} />
          <span>EasyShope</span>
        </Link>
        
        <div className="flex-1 flex justify-center px-4">
          <SearchBar />
        </div>

        <nav className="flex items-center gap-2 md:gap-4">
          <AuthNavMenu /> {/* Use the new AuthNavMenu component */}
          <HeaderCartIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
