
'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// export const metadata: Metadata = { // Cannot use metadata in client component
//   title: 'Login - CharmShop',
// };

export default function LoginPage() {
  const [step, setStep] = useState(1); // 1 for details, 2 for OTP
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: In a real app, send OTP to `phone`
    console.log('Sending OTP to:', phone);
    setIsOtpSent(true);
    // Simulate OTP sending and move to OTP step or show OTP field
    // For demo, we'll just enable OTP input and change button text
    setStep(2); // Or manage OTP input visibility differently
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: In a real app, verify OTP and log in
    console.log('Logging in with OTP:', otp, { name, age, email, phone });
    alert('Login functionality (including OTP verification) is not implemented in this demo.');
  };

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] items-center justify-center px-4 py-12 md:px-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Login to CharmShop</CardTitle>
          <CardDescription>
            {step === 1 ? 'Enter your details to proceed.' : 'Enter the OTP sent to your phone.'}
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
                <p className="text-sm text-muted-foreground">An OTP has been sent to {phone}.</p>
                <Label htmlFor="otp">Enter OTP</Label>
                <Input id="otp" type="text" placeholder="123456" value={otp} onChange={(e) => setOtp(e.target.value)} required maxLength={6} />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Login
              </Button>
              <Button variant="link" onClick={() => { setStep(1); setIsOtpSent(false); setOtp(''); }} className="w-full">
                Change Phone Number
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
          <Link href="#" className="underline hover:text-primary" onClick={(e) => { e.preventDefault(); alert('Sign up not implemented.');}}>
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
