import { PowerComparatorClient } from './_components/power-comparator-client';

export default function PowerComparatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary">Power Stats Suggester</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Use our AI to generate balanced power stats for your new characters or skills. Inspired by the world of Tensei Slime, this tool helps you create entities that fit right in.
        </p>
      </div>
      <PowerComparatorClient />
    </div>
  );
}
