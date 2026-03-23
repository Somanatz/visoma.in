
"use client";

import { useUser, useDoc, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { doc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutDashboard, User, Briefcase, GraduationCap, Plus, ChevronRight, Settings } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();

  const profileRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'freelancerProfiles', user.uid);
  }, [firestore, user]);

  const { data: profile } = useDoc(profileRef);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/auth');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return <div className="min-h-screen pt-32 px-6 flex justify-center">Loading portal...</div>;
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-[#0B0F0E] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20 border-2 border-primary/20 p-1 bg-white/5">
              <AvatarImage src={profile?.profileImageUrl} />
              <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                {user.email?.[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-headline font-bold">Welcome back, {profile?.firstName || 'Innovator'}</h1>
              <p className="text-muted-foreground">{profile?.headline || 'AI Freelancer at Visoma'}</p>
            </div>
          </div>
          <Link href="/dashboard/profile">
            <Button className="bg-white/5 hover:bg-white/10 border border-white/10">
              <Settings className="w-4 h-4 mr-2" />
              Manage Profile
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass border-white/5 md:col-span-2">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>Track your gig performance and active applications.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-sm text-muted-foreground mb-2">Active Projects</div>
                  <div className="text-3xl font-headline font-bold">0</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-sm text-muted-foreground mb-2">Applied Roles</div>
                  <div className="text-3xl font-headline font-bold text-primary">2</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-sm text-muted-foreground mb-2">Earned (MTD)</div>
                  <div className="text-3xl font-headline font-bold">$0.00</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-white/5">
            <CardHeader>
              <CardTitle>Availability</CardTitle>
              <CardDescription>Your current visibility status.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold">{profile?.availabilityStatus || 'Available'}</span>
                </div>
                <Link href="/dashboard/profile">
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/20">Update</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/dashboard/profile?tab=experience">
              <Card className="glass border-white/5 hover:border-primary/20 transition-all group">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <span className="font-bold">Experience</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/dashboard/profile?tab=education">
              <Card className="glass border-white/5 hover:border-primary/20 transition-all group">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="font-bold">Education</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/dashboard/profile?tab=projects">
              <Card className="glass border-white/5 hover:border-primary/20 transition-all group">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                      <Plus className="w-6 h-6" />
                    </div>
                    <span className="font-bold">Portfolio</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/dashboard/profile?tab=skills">
              <Card className="glass border-white/5 hover:border-primary/20 transition-all group">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                      <LayoutDashboard className="w-6 h-6" />
                    </div>
                    <span className="font-bold">Skills</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
