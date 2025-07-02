'use client';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { GrimoireLogo } from './grimoire-logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/characters', label: 'Characters' },
  { href: '/story-arcs', label: 'Story Arcs' },
  { href: '/skills', label: 'Skills' },
  { href: '/quotes', label: 'Quotes' },
  { href: '/gallery', label: 'Fan Art' },
  { href: '/power-comparator', label: 'Power Comparator' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <GrimoireLogo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary">Tempest Grimoire</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                  <GrimoireLogo className="h-8 w-8 text-primary" />
                  <span className="text-xl font-bold font-headline text-primary">Tempest Grimoire</span>
                </Link>
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block rounded-md px-3 py-2 text-base font-medium hover:bg-accent/50 hover:text-primary',
                        pathname === link.href ? 'bg-accent text-primary' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
