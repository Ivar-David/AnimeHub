import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { BackToTop } from '@/components/layout/back-to-top';

export const metadata: Metadata = {
  title: 'Tempest Grimoire',
  description: 'A fan-made wiki for That Time I Got Reincarnated as a Slime.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased min-h-screen flex flex-col bg-background")}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}
