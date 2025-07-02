import { BrainCircuit, GitMerge, Crown, BookOpen, Shield, Sun } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';

const icons = {
  BrainCircuit,
  GitMerge,
  Crown,
  BookOpen,
  Shield,
  Sun
};

const skills = [
  {
    name: 'Great Sage',
    type: 'Unique Skill',
    description: 'An analytical skill that provides immense processing and information capabilities.',
    icon: 'BrainCircuit',
  },
  {
    name: 'Predator',
    type: 'Unique Skill',
    description: 'Allows the user to absorb and analyze any target, replicating their skills.',
    icon: 'GitMerge',
  },
  {
    name: 'Beelzebuth, Lord of Gluttony',
    type: 'Ultimate Skill',
    description: 'An evolution of Predator, consuming everything, including souls and magic.',
    icon: 'Crown',
  },
  {
    name: 'Raphael, Lord of Wisdom',
    type: 'Ultimate Skill',
    description: 'An evolution of Great Sage, with absolute defensive and predictive capabilities.',
    icon: 'BookOpen',
  },
  {
    name: 'Uriel, Lord of Vows',
    type: 'Ultimate Skill',
    description: 'Creates absolute defensive barriers and allows spatial domination.',
    icon: 'Shield',
  },
  {
    name: 'Megiddo',
    type: 'Magic',
    description: 'A powerful magic attack that uses focused sunlight to pierce targets.',
    icon: 'Sun',
  },
];

const getSkillTypeVariant = (type: string): "default" | "secondary" | "destructive" => {
    switch (type) {
        case 'Ultimate Skill':
            return 'destructive';
        case 'Unique Skill':
            return 'secondary';
        default:
            return 'default';
    }
}

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">Skill Index</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          A comprehensive list of skills, from common magic to Ultimate abilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => {
            const Icon = icons[skill.icon as keyof typeof icons];
            return (
                <Card key={skill.name} className="glowing-card flex flex-col transition-transform duration-300 hover:scale-105">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-lg font-headline text-primary">{skill.name}</CardTitle>
                        {Icon && <Icon className="h-6 w-6 text-accent" />}
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <Badge variant={getSkillTypeVariant(skill.type)}>{skill.type}</Badge>
                        <p className="mt-4 text-sm text-foreground/80 min-h-[60px]">{skill.description}</p>
                    </CardContent>
                </Card>
            )
        })}
      </div>
    </div>
  );
}