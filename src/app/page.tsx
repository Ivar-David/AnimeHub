import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MagicParticles } from "@/components/magic-particles";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-20 text-center">
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Background of Tempest"
            fill
            priority
            className="object-cover opacity-10"
            data-ai-hint="slime human anime"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <MagicParticles />

        <div className="container z-10 mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Tempest Grimoire
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/90 md:text-xl">
            Unleashing the world of monsters, magic, and demon lords.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="glowing-button variant-primary text-base">
              <Link href="/characters">Explore Characters</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glowing-button variant-accent text-base border-accent hover:border-accent text-accent-foreground">
              <Link href="/story-arcs">Read the Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="glowing-card max-w-3xl mx-auto border-accent/50 bg-background/50">
            <CardContent className="p-8">
              <blockquote className="text-center text-xl italic text-foreground/90">
                “A monster with human emotions… That’s what I am.”
              </blockquote>
              <p className="mt-4 text-center font-semibold text-primary">— Rimuru Tempest</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
