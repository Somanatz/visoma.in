
"use client";

import { useState } from 'react';
import { useAuth, initiateEmailSignIn, initiateEmailSignUp } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import { Sparkles, Loader2 } from 'lucide-react';
import { useUser } from '@/firebase';
import { useEffect } from 'react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleSignIn = () => {
    if (!email || !password) return;
    setIsLoading(true);
    initiateEmailSignIn(auth, email, password);
  };

  const handleSignUp = () => {
    if (!email || !password) return;
    setIsLoading(true);
    initiateEmailSignUp(auth, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-20" />
      </div>

      <Card className="w-full max-w-md glass border-white/10 relative z-10 shadow-2xl rounded-3xl overflow-hidden">
        <CardHeader className="text-center pb-8 pt-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Talent Portal</CardTitle>
          <CardDescription>Join our network of elite AI freelancers.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/5 mb-8">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-white/5 border-white/10 h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  className="bg-white/5 border-white/10 h-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <TabsContent value="signin" className="mt-0">
                <Button 
                  onClick={handleSignIn} 
                  className="w-full h-12 bg-primary text-primary-foreground gold-glow font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Enter Portal'}
                </Button>
              </TabsContent>

              <TabsContent value="signup" className="mt-0">
                <Button 
                  onClick={handleSignUp} 
                  className="w-full h-12 bg-primary text-primary-foreground gold-glow font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Create Account'}
                </Button>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
