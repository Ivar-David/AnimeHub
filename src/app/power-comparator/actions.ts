'use server';

import { suggestPowerStats, type SuggestPowerStatsInput } from '@/ai/flows/suggest-power-stats';

export async function handleSuggestStats(input: SuggestPowerStatsInput) {
  try {
    const output = await suggestPowerStats(input);
    return output;
  } catch (error) {
    console.error("Error in suggestPowerStats flow:", error);
    // Let the client component handle displaying the error message.
    throw new Error("Failed to get suggestions from the AI. Please try again later.");
  }
}
