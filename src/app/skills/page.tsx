import { BrainCircuit, GitMerge, Crown, BookOpen, Shield, Sun, Zap, Ghost, Eye } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const icons = {
  BrainCircuit,
  GitMerge,
  Crown,
  BookOpen,
  Shield,
  Sun,
  Zap,
  Ghost,
  Eye,
};

const skills = [
  {
    name: 'Great Sage',
    type: 'Unique Skill',
    user: 'Rimuru Tempest',
    description: 'An analytical skill that provides immense processing and information capabilities.',
    icon: 'BrainCircuit',
  },
  {
    name: 'Predator',
    type: 'Unique Skill',
    user: 'Rimuru Tempest',
    description: 'Allows the user to absorb and analyze any target, replicating their skills.',
    icon: 'GitMerge',
  },
  {
    name: 'Beelzebuth, Lord of Gluttony',
    type: 'Ultimate Skill',
    user: 'Rimuru Tempest',
    description: 'An evolution of Predator, consuming everything, including souls and magic.',
    icon: 'Crown',
  },
  {
    name: 'Raphael, Lord of Wisdom',
    type: 'Ultimate Skill',
    user: 'Rimuru Tempest',
    description: 'An evolution of Great Sage, with absolute defensive and predictive capabilities.',
    icon: 'BookOpen',
  },
  {
    name: 'Uriel, Lord of Vows',
    type: 'Ultimate Skill',
    user: 'Rimuru Tempest',
    description: 'Creates absolute defensive barriers and allows spatial domination.',
    icon: 'Shield',
  },
  {
    name: 'Void God Azathoth',
    type: 'Ultimate Skill',
    user: 'Rimuru Tempest',
    description: 'The ultimate skill born from multiple others, granting control over the void and imaginary energy.',
    icon: 'Zap',
  },
  {
    name: 'Megiddo',
    type: 'Extra Skill',
    user: 'Rimuru Tempest',
    description: 'A powerful magic attack that uses focused sunlight to pierce targets.',
    icon: 'Sun',
  },
  {
    name: 'Shadow Movement',
    type: 'Extra Skill',
    user: 'Souei & others',
    description: 'A high-speed movement technique that uses shadows for transportation.',
    icon: 'Ghost',
  },
  {
    name: 'Magic Sense',
    type: 'Extra Skill',
    user: 'Most Monsters',
    description: 'Allows the user to perceive the flow of magicules in the surrounding area.',
    icon: 'Eye',
  },
];

const getSkillTypeVariant = (type: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (type) {
        case 'Ultimate Skill':
            return 'destructive';
        case 'Unique Skill':
            return 'secondary';
        case 'Extra Skill':
            return 'default';
        default:
            return 'outline';
    }
}

export default function SkillsPage() {
  return (
    <TooltipProvider>
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold text-primary">Skills & Abilities</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A comprehensive index of skills, from common magic to Ultimate abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
              const Icon = icons[skill.icon as keyof typeof icons];
              return (
                  <Tooltip key={skill.name} delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Card className="glowing-card flex flex-col transition-transform duration-300 hover:scale-105">
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-lg font-headline text-primary">{skill.name}</CardTitle>
                              {Icon && <Icon className="h-6 w-6 text-accent" />}
                          </CardHeader>
                          <CardContent className="flex-grow">
                              <Badge variant={getSkillTypeVariant(skill.type)}>{skill.type}</Badge>
                              <p className="mt-4 text-sm text-foreground/80 min-h-[60px]">{skill.description}</p>
                          </CardContent>
                          <CardFooter>
                              <p className="text-xs text-muted-foreground">User: {skill.user}</p>
                          </CardFooter>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-popover text-popover-foreground border-accent/50">
                      <p>{skill.user} uses {skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
              )
          })}
        </div>
      </div>
    </TooltipProvider>
  );
}
