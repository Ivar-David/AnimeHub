import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const characters = [
  {
    name: "Rimuru Tempest",
    description:
      "The protagonist, a powerful slime who builds a nation of monsters.",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "slime anime",
  },
  {
    name: "Veldora Tempest",
    description:
      "A mighty Storm Dragon, one of the four True Dragons, and Rimuru's first friend.",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "dragon anime",
  },
  {
    name: "Shizue Izawa",
    description:
      "A heroic summoned Japanese girl who was a mentor figure to Rimuru.",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "female hero anime",
  },
  {
    name: "Benimaru",
    description:
      "The leader of the Kijin, a loyal and powerful commander in Tempest.",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "red demon anime",
  },
  {
    name: "Shuna",
    description:
      "A Kijin princess skilled in holy magic, weaving, and diplomacy.",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "pink hair priestess",
  },
  {
    name: "Shion",
    description:
      "Rimuru's over-enthusiastic, self-proclaimed secretary and bodyguard.",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "purple hair warrior",
  },
];

export default function CharactersPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">
          Character Compendium
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Explore the diverse cast of characters from the world of Tensei Slime.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((character) => (
          <Card key={character.name} className="glowing-card overflow-hidden transition-transform duration-300 hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={character.image}
                  alt={`Image of ${character.name}`}
                  fill
                  className="object-cover"
                  data-ai-hint={character.dataAiHint}
                />
              </div>
              <div className="p-6">
                <CardTitle className="text-primary font-headline text-2xl">
                  {character.name}
                </CardTitle>
                <CardDescription className="mt-2 text-foreground/80 min-h-[40px]">
                  {character.description}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}