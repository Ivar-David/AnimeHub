import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const storyArcs = [
  {
    title: 'Reincarnation Arc',
    reference: 'LN Vol. 1 / Anime Ep. 1-8',
    summary: 'A 37-year-old salaryman is reincarnated as a slime in a new world. He befriends the Storm Dragon Veldora, gains immense power, and begins his journey.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fantasy world anime',
  },
  {
    title: 'Orc Disaster Arc',
    reference: 'LN Vol. 1-2 / Anime Ep. 9-14',
    summary: 'Rimuru and his growing nation face the threat of the Orc Lord and his rampaging army. He unites the Lizardmen and Ogres to confront this disaster.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'orc army battle',
  },
  {
    title: 'Demon Lord Awakening Arc',
    reference: 'LN Vol. 5 / Anime Season 2 Part 1',
    summary: 'The Kingdom of Falmuth invades Tempest, leading to a tragic loss. To protect his people, Rimuru makes the ultimate choice to become a Demon Lord.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dark lord throne',
  },
  {
    title: 'Walpurgis Banquet Arc',
    reference: 'LN Vol. 6 / Anime Season 2 Part 2',
    summary: 'Now a Demon Lord, Rimuru attends Walpurgis, the banquet of the Demon Lords, to settle his score with Clayman and establish his place among the world\'s most powerful beings.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fantasy banquet evil',
  },
  {
    title: 'Holy Empire Arc',
    reference: 'LN Vol. 7 / Not yet adapted',
    summary: 'Tempest faces a new threat from the Holy Empire of Lubelius, led by the formidable Hinata Sakaguchi. A battle of ideals, power, and diplomacy unfolds.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'holy knight fantasy',
  },
  {
    title: 'Eastern Empire Arc',
    reference: 'LN Vol. 13-16 / Not yet adapted',
    summary: 'The powerful Eastern Empire finally makes its move against the Jura Tempest Federation, leading to a full-scale war that tests the limits of Rimuru and his subordinates.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fantasy empire war',
  },
];

export default function StoryArcsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-bold text-primary">Story Arc Navigator</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Follow Rimuru's epic journey from a simple slime to a world-changing leader.
        </p>
      </div>

      <div className="timeline">
        {storyArcs.map((arc, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <BookOpen className="h-4 w-4" />
            </div>
            <div className="timeline-content-wrapper">
              <Card className="glowing-card border-primary/30">
                <CardHeader>
                  <CardTitle className="font-headline text-primary text-2xl">{arc.title}</CardTitle>
                  <CardDescription>{arc.reference}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="relative aspect-video overflow-hidden rounded-md">
                     <Image
                        src={arc.image}
                        alt={`Image for ${arc.title}`}
                        fill
                        className="object-cover"
                        data-ai-hint={arc.dataAiHint}
                     />
                   </div>
                  <p className="text-foreground/80">{arc.summary}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
