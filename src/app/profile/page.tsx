
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User as UserIcon, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const router = useRouter();
  const { isLoggedIn, user, logoutUser } = useAuthStore();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/login');
    }
  }, [isLoggedIn, router]);

  const handleLogout = () => {
    logoutUser();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    router.push('/');
  };

  if (!isLoggedIn || !user) {
    // This should ideally be handled by the useEffect redirect,
    // but as a fallback, show a loading or minimal state.
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-10rem)] items-center justify-center px-4 py-12">
        <p>Loading profile or redirecting...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-24 w-24 mb-4">
            <AvatarImage src={`https://placehold.co/100x100.png?text=${user.name.charAt(0)}`} alt={user.name} data-ai-hint="profile avatar" />
            <AvatarFallback><UserIcon size={48} /></AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-bold">{user.name}</CardTitle>
          <CardDescription>Welcome to your CharmShop profile.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Age:</strong> {user.age}</p>
            </div>
          </div>
          
          {/* Placeholder for more profile sections if needed in future */}
          {/* 
          <div>
            <h3 className="text-lg font-semibold mb-2">Order History</h3>
            <p className="text-sm text-muted-foreground">Your past orders will appear here. (Not Implemented)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Saved Addresses</h3>
            <p className="text-sm text-muted-foreground">Manage your shipping addresses. (Not Implemented)</p>
          </div> 
          */}

          <Button onClick={handleLogout} variant="destructive" className="w-full mt-6">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
