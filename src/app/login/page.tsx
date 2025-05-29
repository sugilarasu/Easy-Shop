
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const { loginUser } = useAuthStore();
  const { toast } = useToast();

  const [step, setStep] = useState(1); // 1 for details, 2 for OTP
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all personal details.",
        variant: "destructive",
      });
      return;
    }
    // Placeholder: In a real app, send OTP to `phone`
    console.log('Sending OTP to:', phone);
    toast({
      title: "OTP Sent (Simulated)",
      description: `An OTP has been sent to ${phone}. (This is a simulation)`,
    });
    setStep(2);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: In a real app, verify OTP
    if (otp === '123456') { // Simulate OTP verification
      loginUser({ name, age, email, phone });
      toast({
        title: "Login Successful",
        description: `Welcome back, ${name}!`,
      });
      router.push('/profile'); // Redirect to profile page or homepage
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid OTP. Please try again. (Hint: try 123456)",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] items-center justify-center px-4 py-12 md:px-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Login to CharmShop</CardTitle>
          <CardDescription>
            {step === 1 ? 'Enter your details to proceed.' : `Enter the OTP sent to ${phone}.`}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="25" value={age} onChange={(e) => setAge(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+910000000000" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send OTP
              </Button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleLogin} className="space-y-4">
               <div className="space-y-2">
                <p className="text-sm text-muted-foreground">An OTP has been sent to {phone}. (Simulated: try 123456)</p>
                <Label htmlFor="otp">Enter OTP</Label>
                <Input id="otp" type="text" placeholder="123456" value={otp} onChange={(e) => setOtp(e.target.value)} required maxLength={6} />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Login
              </Button>
              <Button variant="link" onClick={() => { setStep(1); setOtp(''); }} className="w-full">
                Change Details / Resend OTP
              </Button>
            </form>
          )}
          
          <Separator className="my-4" />
          <Button variant="outline" className="w-full" onClick={() => alert('Google login not implemented.')}>
            Login with Google
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="#" className="underline hover:text-primary" onClick={(e) => { e.preventDefault(); alert('Sign up not implemented. Please use the login flow.');}}>
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
