'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

type Character = {
  name: string;
  race: string;
  image: string;
  dataAiHint: string;
  shortQuote: string;
  fullQuote: string;
  role: string;
  abilities: string[];
  group: 'Tempest Allies' | 'Demon Lords' | 'Otherworlders';
};

const characters: Character[] = [
  // Tempest Allies
  {
    name: 'Rimuru Tempest',
    race: 'Ultimate Slime',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'slime human anime',
    shortQuote: 'I’ll protect my people...',
    fullQuote: 'I’ll protect my people—no matter the cost.',
    role: 'King of Tempest, Demon Lord',
    abilities: ['Great Sage', 'Predator', 'Beelzebuth', 'Raphael'],
    group: 'Tempest Allies',
  },
  {
    name: 'Benimaru',
    race: 'Kijin',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'red demon anime',
    shortQuote: 'I am Rimuru-sama\'s loyal shadow.',
    fullQuote: 'I am Rimuru-sama\'s loyal shadow. I will eliminate any who stand in his way.',
    role: 'Commander-in-Chief of Tempest',
    abilities: ['Hell Flare', 'Aura Blade', 'Generalissimo'],
    group: 'Tempest Allies',
  },
  {
    name: 'Shion',
    race: 'Kijin',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'purple hair warrior',
    shortQuote: 'Rimuru-sama is everything!',
    fullQuote: 'My loyalty and my cooking are both dedicated to Rimuru-sama!',
    role: 'First Secretary, Bodyguard',
    abilities: ['Hercules\' Edge', 'Cook', 'Chaotic Fate'],
    group: 'Tempest Allies',
  },
  {
    name: 'Shuna',
    race: 'Kijin',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'pink hair priestess',
    shortQuote: 'Diplomacy is a battlefield too.',
    fullQuote: 'Diplomacy is a battlefield too. One where smiles are sharper than swords.',
    role: 'Prime Minister, High Priestess',
    abilities: ['Holy Magic', 'Creator', 'Analyst'],
    group: 'Tempest Allies',
  },
  {
    name: 'Souei',
    race: 'Kijin',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'ninja spy anime',
    shortQuote: 'Mission complete.',
    fullQuote: 'I operate in the shadows to ensure the light of Tempest never fades. Mission complete.',
    role: 'Spy, Special Operations',
    abilities: ['Shadow Movement', 'Steel Thread', 'One-Hit Kill'],
    group: 'Tempest Allies',
  },
  {
    name: 'Diablo',
    race: 'Primordial Demon',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'butler demon anime',
    shortQuote: 'Kufufufu... a wonderful soul.',
    fullQuote: 'Kufufufu... serving Lord Rimuru is the greatest pleasure imaginable.',
    role: 'Second Secretary, Head Butler',
    abilities: ['Temptation World', 'Great Wiseman', 'Demonic Magic'],
    group: 'Tempest Allies',
  },
  // Demon Lords
  {
    name: 'Milim Nava',
    race: 'Dragonoid',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'pink hair girl anime',
    shortQuote: 'This is playtime!',
    fullQuote: 'This isn’t rage. This is playtime. And you\'re my new toy!',
    role: 'Demon Lord, Bestie',
    abilities: ['Drago-Nova', 'Wrathful King Satan', 'Immense Magicules'],
    group: 'Demon Lords',
  },
  {
    name: 'Veldora Tempest',
    race: 'True Dragon',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'dragon anime blonde man',
    shortQuote: 'Kwahahaha! Fear me!',
    fullQuote: 'Kwahahaha! I am the Storm Dragon Veldora! To underestimate me is to court death!',
    role: 'Storm Dragon, Sworn Friend',
    abilities: ['Storm of Destruction', 'Investigation King Faust', 'Parallel Existence'],
    group: 'Demon Lords',
  },
  {
    name: 'Clayman',
    race: 'Deathman',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'evil jester anime',
    shortQuote: 'It was all part of my plan.',
    fullQuote: 'Everything is a puppet on my strings. It was all part of my grand plan!',
    role: 'Former Demon Lord, Puppeteer',
    abilities: ['Marionette Master', 'Demon Puppeteer', 'Brute Force'],
    group: 'Demon Lords',
  },
  // Otherworlders
  {
    name: 'Shizue Izawa',
    race: 'Human',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'female hero anime',
    shortQuote: 'Please... devour me.',
    fullQuote: 'My only wish is to rest within someone from my homeland. Please... devour me.',
    role: 'Summoned Hero, Conqueror of Flames',
    abilities: ['Ifrit', 'Shapeshift', 'Degenerate'],
    group: 'Otherworlders',
  },
  {
    name: 'Hinata Sakaguchi',
    race: 'Human',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'holy knight woman anime',
    shortQuote: 'Even monsters have principles.',
    fullQuote: 'I will eliminate all monsters for the sake of humanity. That is my justice.',
    role: 'Captain of the Holy Knights',
    abilities: ['Astral Bind', 'Disintegration', 'Usurper'],
    group: 'Otherworlders',
  },
];

const characterGroups = ['Tempest Allies', 'Demon Lords', 'Otherworlders'];

export default function CharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold text-primary">
            Significant Characters
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Meet the allies, antagonists, and key figures shaping the world.
          </p>
        </div>

        {characterGroups.map((group) => (
          <div key={group} className="mb-16">
            <h2 className="font-headline text-3xl font-bold text-accent mb-8 text-center">{group}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {characters
                .filter((c) => c.group === group)
                .map((character) => (
                  <Card
                    key={character.name}
                    className="glowing-card overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col cursor-pointer"
                    onClick={() => setSelectedCharacter(character)}
                  >
                    <CardContent className="p-0 flex-grow">
                      <div className="relative aspect-square">
                        <Image
                          src={character.image}
                          alt={`Image of ${character.name}`}
                          fill
                          className="object-cover"
                          data-ai-hint={character.dataAiHint}
                        />
                      </div>
                      <div className="p-4">
                        <CardTitle className="text-primary font-headline text-xl">
                          {character.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-foreground/70">
                          {character.race}
                        </CardDescription>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <p className="text-sm italic text-foreground/80">
                        “{character.shortQuote}”
                      </p>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedCharacter} onOpenChange={(isOpen) => !isOpen && setSelectedCharacter(null)}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] bg-background/95 border-primary">
          {selectedCharacter && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-3xl text-primary">{selectedCharacter.name}</DialogTitle>
                <DialogDescription>{selectedCharacter.race} - {selectedCharacter.role}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                 <div className="relative aspect-video overflow-hidden rounded-md">
                   <Image
                      src={selectedCharacter.image}
                      alt={`Image of ${selectedCharacter.name}`}
                      fill
                      className="object-cover object-top"
                      data-ai-hint={selectedCharacter.dataAiHint}
                   />
                 </div>
                 <blockquote className="italic text-center text-accent text-lg border-y border-accent/20 py-4">
                  “{selectedCharacter.fullQuote}”
                 </blockquote>
                 <div>
                  <h4 className="font-headline text-lg text-primary mb-2">Abilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCharacter.abilities.map(ability => (
                      <Badge key={ability} variant="secondary">{ability}</Badge>
                    ))}
                  </div>
                 </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
