'use client';
import { Twitter, Instagram, Disc, MessagesSquare } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/20 bg-background/50 py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-2 md:px-6 md:text-left">
        <div>
          <h3 className="font-headline text-lg font-bold text-primary">About This Grimoire</h3>
          <p className="mt-2 text-sm text-foreground/80">
            Tempest Grimoire is a fan tribute built with passion, not affiliated with the original creators. All content is for appreciation and educational purposes.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end">
           <h3 className="font-headline text-lg font-bold text-primary">Connect</h3>
          <div className="mt-2 flex space-x-4">
            <Link href="#" className="text-foreground/80 transition-colors hover:text-primary" aria-disabled="true" onClick={(e) => e.preventDefault()}><Twitter className="h-6 w-6" /></Link>
            <Link href="#" className="text-foreground/80 transition-colors hover:text-primary" aria-disabled="true" onClick={(e) => e.preventDefault()}><Instagram className="h-6 w-6" /></Link>
            <Link href="#" className="text-foreground/80 transition-colors hover:text-primary" aria-disabled="true" onClick={(e) => e.preventDefault()}><Disc className="h-6 w-6" /></Link>
            <Link href="#" className="text-foreground/80 transition-colors hover:text-primary" aria-disabled="true" onClick={(e) => e.preventDefault()}><MessagesSquare className="h-6 w-6" /></Link>
          </div>
           <p className="mt-4 text-sm text-foreground/80">
            Built With: <span className="text-accent">Firebase Studio</span> & <span className="text-primary">Anime Magic</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
