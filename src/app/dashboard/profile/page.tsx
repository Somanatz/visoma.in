
"use client";

import { useState, useEffect } from 'react';
import { useUser, useDoc, useMemoFirebase, setDocumentNonBlocking, useCollection } from '@/firebase';
import { doc, collection } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Loader2, Save, User, Briefcase, GraduationCap, Code, FolderGit2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProfileManagementPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const defaultTab = searchParams.get('tab') || 'general';

  const profileRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'freelancerProfiles', user.uid);
  }, [firestore, user]);

  const { data: profile, isLoading: isProfileLoading } = useDoc(profileRef);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    headline: '',
    bio: '',
    availabilityStatus: 'Available',
    hourlyRate: 0,
    location: ''
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        headline: profile.headline || '',
        bio: profile.bio || '',
        availabilityStatus: profile.availabilityStatus || 'Available',
        hourlyRate: profile.hourlyRate || 0,
        location: profile.location || ''
      });
    }
  }, [profile]);

  const handleSaveGeneral = () => {
    if (!profileRef || !user) return;
    setDocumentNonBlocking(profileRef, {
      ...formData,
      userId: user.uid,
      email: user.email,
      updatedAt: new Date().toISOString(),
      id: user.uid,
      skillIds: profile?.skillIds || []
    }, { merge: true });
    toast({ title: "Profile Updated", description: "Your basic information has been saved." });
  };

  if (isUserLoading || isProfileLoading) {
    return <div className="min-h-screen pt-32 px-6 flex justify-center">Loading settings...</div>;
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-[#0B0F0E] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-headline font-bold mb-4">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your professional presence and portfolio.</p>
        </div>

        <Tabs defaultValue={defaultTab} className="space-y-8">
          <TabsList className="bg-white/5 border border-white/10 p-1 rounded-xl h-auto flex flex-wrap">
            <TabsTrigger value="general" className="gap-2 px-4 py-2"><User className="w-4 h-4" /> General</TabsTrigger>
            <TabsTrigger value="experience" className="gap-2 px-4 py-2"><Briefcase className="w-4 h-4" /> Experience</TabsTrigger>
            <TabsTrigger value="education" className="gap-2 px-4 py-2"><GraduationCap className="w-4 h-4" /> Education</TabsTrigger>
            <TabsTrigger value="projects" className="gap-2 px-4 py-2"><FolderGit2 className="w-4 h-4" /> Projects</TabsTrigger>
            <TabsTrigger value="skills" className="gap-2 px-4 py-2"><Code className="w-4 h-4" /> Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Visible on your public talent profile.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input 
                      value={formData.firstName} 
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input 
                      value={formData.lastName} 
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Headline</Label>
                  <Input 
                    value={formData.headline} 
                    onChange={(e) => setFormData({...formData, headline: e.target.value})}
                    placeholder="e.g. Senior AI Data Engineer"
                    className="bg-white/5 border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Bio</Label>
                  <Textarea 
                    value={formData.bio} 
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    placeholder="Tell us about your background and AI expertise..."
                    className="bg-white/5 border-white/10 min-h-[150px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>Availability</Label>
                    <Select 
                      value={formData.availabilityStatus} 
                      onValueChange={(val) => setFormData({...formData, availabilityStatus: val})}
                    >
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Busy">Busy</SelectItem>
                        <SelectItem value="Not Accepting New Projects">Offline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Hourly Rate ($)</Label>
                    <Input 
                      type="number"
                      value={formData.hourlyRate} 
                      onChange={(e) => setFormData({...formData, hourlyRate: Number(e.target.value)})}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Input 
                      value={formData.location} 
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="City, Country"
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                <Button onClick={handleSaveGeneral} className="w-full h-12 bg-primary text-primary-foreground gold-glow">
                  <Save className="w-4 h-4 mr-2" /> Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <ExperienceList userId={user.uid} />
          </TabsContent>

          <TabsContent value="education">
            <EducationList userId={user.uid} />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsList userId={user.uid} />
          </TabsContent>

          <TabsContent value="skills">
            <div className="glass p-12 rounded-3xl text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Skill Management Coming Soon</h3>
              <p className="text-muted-foreground">We are indexing thousands of AI/ML skills to better match you with projects.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ExperienceList({ userId }: { userId: string }) {
  const firestore = useFirestore();
  const expQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'freelancerProfiles', userId, 'experience');
  }, [firestore, userId]);

  const { data: experiences } = useCollection(expQuery);

  return (
    <Card className="glass border-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Work Experience</CardTitle>
          <CardDescription>Your professional history.</CardDescription>
        </div>
        <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20">Add New</Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {experiences?.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground border border-dashed border-white/10 rounded-2xl">
            No experience records found.
          </div>
        ) : (
          experiences?.map((exp: any) => (
            <div key={exp.id} className="p-4 bg-white/5 rounded-xl border border-white/5">
              <h4 className="font-bold">{exp.jobTitle}</h4>
              <p className="text-sm text-primary">{exp.companyName}</p>
              <p className="text-xs text-muted-foreground mt-1">{exp.startDate} - {exp.isCurrent ? 'Present' : exp.endDate}</p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

function EducationList({ userId }: { userId: string }) {
  const firestore = useFirestore();
  const eduQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'freelancerProfiles', userId, 'education');
  }, [firestore, userId]);

  const { data: education } = useCollection(eduQuery);

  return (
    <Card className="glass border-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Education</CardTitle>
          <CardDescription>Academic background.</CardDescription>
        </div>
        <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20">Add New</Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {education?.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground border border-dashed border-white/10 rounded-2xl">
            No education records found.
          </div>
        ) : (
          education?.map((edu: any) => (
            <div key={edu.id} className="p-4 bg-white/5 rounded-xl border border-white/5">
              <h4 className="font-bold">{edu.degree} in {edu.fieldOfStudy}</h4>
              <p className="text-sm text-primary">{edu.institutionName}</p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

function ProjectsList({ userId }: { userId: string }) {
  const firestore = useFirestore();
  const projQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'freelancerProfiles', userId, 'projects');
  }, [firestore, userId]);

  const { data: projects } = useCollection(projQuery);

  return (
    <Card className="glass border-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Portfolio Projects</CardTitle>
          <CardDescription>Showcase your best AI/ML work.</CardDescription>
        </div>
        <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20">Add Project</Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects?.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground border border-dashed border-white/10 rounded-2xl">
            No projects added to your portfolio yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects?.map((proj: any) => (
              <div key={proj.id} className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="font-bold mb-1">{proj.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{proj.description}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
