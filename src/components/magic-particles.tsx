'use client';
import React from 'react';

export function MagicParticles({ count = 50 }: { count?: number }) {
  const [particles, setParticles] = React.useState<React.ReactNode[]>([]);
  
  React.useEffect(() => {
    // This effect runs only on the client after hydration
    const newParticles = Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          '--x': `${Math.random() * 100}vw`,
          '--y': `${Math.random() * 100}vh`,
          '--d': `${Math.random() * 10 + 10}s`, // longer duration
          '--s': `${Math.random() * 2 + 1}px`,
          '--c': Math.random() > 0.5 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
          'animationDelay': `${Math.random() * -20}s` // negative delay to start at different points
        } as React.CSSProperties}
      />
    ));
    setParticles(newParticles);
  }, [count]);

  if (particles.length === 0) {
    return null; // Don't render anything on the server
  }

  return <div className="absolute inset-0 z-[-1] overflow-hidden">{particles}</div>;
}
