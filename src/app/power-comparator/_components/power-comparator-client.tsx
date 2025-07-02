'use client';
import { useState } from 'react';
import { PowerComparatorForm } from './power-comparator-form';
import { PowerStatResult } from './power-stat-result';
import type { SuggestPowerStatsOutput } from '@/ai/flows/suggest-power-stats';

export function PowerComparatorClient() {
  const [result, setResult] = useState<SuggestPowerStatsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
      <PowerComparatorForm
        setResult={setResult}
        setIsLoading={setIsLoading}
        setError={setError}
        isLoading={isLoading}
      />
      <PowerStatResult result={result} isLoading={isLoading} error={error} />
    </div>
  );
}
