'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { type SuggestPowerStatsOutput } from "@/ai/flows/suggest-power-stats";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, BrainCircuit, Wand2, Swords } from 'lucide-react';

type PowerStatResultProps = {
  result: SuggestPowerStatsOutput | null;
  isLoading: boolean;
  error: string | null;
};

const powerLevelMap: Record<string, number> = {
  'Low': 33,
  'Intermediate': 66,
  'High': 100,
};

const StatDisplay = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => {
    const progressValue = powerLevelMap[value] || 0;
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
                {icon}
                <span className="font-medium">{label}</span>
                <span className="ml-auto font-semibold text-primary">{value}</span>
            </div>
            <Progress value={progressValue} className="h-2 [&>div]:bg-primary" />
        </div>
    );
};

export function PowerStatResult({ result, isLoading, error }: PowerStatResultProps) {
  
  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-2 w-full" />
          </div>
          <div className="space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-2 w-full" />
          </div>
          <div className="space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-2 w-full" />
          </div>
          <div className="space-y-2 pt-4">
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
        <Card className="h-full border-destructive/50 flex flex-col items-center justify-center bg-destructive/10">
            <CardContent className="text-center p-6">
                <AlertCircle className="mx-auto h-12 w-12 text-destructive" />
                <h3 className="mt-4 text-xl font-semibold text-destructive">An Error Occurred</h3>
                <p className="mt-2 text-muted-foreground">{error}</p>
            </CardContent>
        </Card>
    );
  }

  if (!result) {
    return (
        <Card className="h-full flex flex-col items-center justify-center bg-transparent border-dashed border-muted-foreground/30">
            <CardContent className="text-center p-6">
                <Wand2 className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-xl font-semibold text-muted-foreground">Awaiting Suggestions</h3>
                <p className="mt-2 text-muted-foreground">Fill out the form to generate power stats.</p>
            </CardContent>
        </Card>
    );
  }
  
  const { powerStats, reasoning } = result;

  return (
    <Card className="glowing-card h-full border-primary/50">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Suggested Stats</CardTitle>
        <CardDescription>Based on the provided entity details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <StatDisplay icon={<Wand2 className="h-5 w-5 text-primary" />} label="Magicule Level" value={powerStats.magiculeLevel} />
        <StatDisplay icon={<BrainCircuit className="h-5 w-5 text-primary" />} label="Intelligence" value={powerStats.intelligence} />
        <StatDisplay icon={<Swords className="h-5 w-5 text-primary" />} label="Combat Skill" value={powerStats.combatSkill} />
        
        <div>
          <h4 className="font-headline text-lg font-semibold text-primary">Reasoning</h4>
          <p className="mt-2 text-sm text-foreground/80">{reasoning}</p>
        </div>
      </CardContent>
    </Card>
  );
}
