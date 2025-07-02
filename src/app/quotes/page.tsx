'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type QuoteCategory = 'All' | 'Motivational' | 'Emotional' | 'Funny' | 'Battle';

const quotes = [
  {
    text: 'I\'ll protect my people—no matter the cost.',
    character: 'Rimuru Tempest',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: "slime human anime",
    category: 'Motivational',
  },
  {
    text: 'Power is meaningless without purpose.',
    character: 'Rimuru Tempest',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: "slime human anime",
    category: 'Motivational',
  },
  {
    text: 'My devotion knows no bounds.',
    character: 'Diablo',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: "butler demon anime",
    category: 'Emotional',
  },
  {
    text: 'This isn’t rage. This is playtime.',
    character: 'Milim Nava',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: "pink hair girl anime",
    category: 'Battle',
  },
  {
    text: 'Even monsters have principles.',
    character: 'Hinata Sakaguchi',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: "holy knight woman anime",
    category: 'Motivational',
  },
  {
    text: 'Kufufufu. How foolish.',
    character: 'Diablo',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: "butler demon anime",
    category: 'Funny',
  },
    {
    text: 'To underestimate me is to court death!',
    character: 'Veldora Tempest',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: "dragon anime blonde man",
    category: 'Battle',
  },
  {
    text: 'Rimuru-sama\'s cooking is the best in the world!',
    character: 'Shion',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: "purple hair warrior",
    category: 'Funny',
  }
];

export default function QuotesPage() {
  const [filter, setFilter] = useState<QuoteCategory>('All');

  const filteredQuotes = filter === 'All' ? quotes : quotes.filter((q) => q.category === filter);
  const categories: QuoteCategory[] = ['All', 'Motivational', 'Emotional', 'Funny', 'Battle'];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">Wisdom Repository</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          An archive of memorable, insightful, and humorous quotes from across the world.
        </p>
      </div>

      <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
            className={cn('glowing-button', filter === category ? 'variant-primary' : 'variant-accent border-accent hover:border-accent text-accent-foreground')}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredQuotes.map((quote, index) => (
          <Card key={index} className="relative overflow-hidden glowing-card border-accent/30 group">
             <Image
                src={quote.image}
                alt={`Image of ${quote.character}`}
                fill
                className="object-cover object-top opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                data-ai-hint={quote.dataAiHint}
              />
            <CardContent className="relative z-10 flex flex-col justify-center items-center text-center h-64 p-6 bg-gradient-to-t from-card via-card/80 to-transparent">
              <blockquote className="text-xl italic text-foreground/90 flex-grow flex items-center">
                “{quote.text}”
              </blockquote>
              <p className="mt-4 font-semibold text-primary">— {quote.character}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
