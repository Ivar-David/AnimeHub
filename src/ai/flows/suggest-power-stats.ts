'use server';

/**
 * @fileOverview AI agent that suggests complementary power stats for new characters or skills.
 *
 * - suggestPowerStats - A function that suggests power stats based on character race or skill class.
 * - SuggestPowerStatsInput - The input type for the suggestPowerStats function.
 * - SuggestPowerStatsOutput - The return type for the suggestPowerStats function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPowerStatsInputSchema = z.object({
  entityType: z
    .enum(['character', 'skill'])
    .describe('The type of entity to suggest power stats for.'),
  entityDescription: z
    .string()
    .describe('A description of the character or skill.'),
  raceOrClass: z.string().describe('The race of the character or class of the skill.'),
});
export type SuggestPowerStatsInput = z.infer<typeof SuggestPowerStatsInputSchema>;

const PowerStatsSchema = z.object({
  magiculeLevel: z.string().describe('The magicule level of the entity (e.g., Low, Intermediate, High).'),
  intelligence: z.string().describe('The intelligence level of the entity (e.g., Low, Intermediate, High).'),
  combatSkill: z.string().describe('The combat skill level of the entity (e.g., Low, Intermediate, High).'),
});

const SuggestPowerStatsOutputSchema = z.object({
  powerStats: PowerStatsSchema.describe('Suggested power stats for the entity.'),
  reasoning: z.string().describe('The reasoning behind the suggested power stats.'),
});
export type SuggestPowerStatsOutput = z.infer<typeof SuggestPowerStatsOutputSchema>;

export async function suggestPowerStats(input: SuggestPowerStatsInput): Promise<SuggestPowerStatsOutput> {
  return suggestPowerStatsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPowerStatsPrompt',
  input: {schema: SuggestPowerStatsInputSchema},
  output: {schema: SuggestPowerStatsOutputSchema},
  prompt: `You are an expert game balance designer for the Tensei Slime Wiki.

You are suggesting power stats for a new {{entityType}} based on its description and race/class.

Description: {{{entityDescription}}}
Race/Class: {{{raceOrClass}}}

Consider the typical power levels and abilities associated with the given race or class.

Provide power stats for magiculeLevel, intelligence, and combatSkill, each rated as Low, Intermediate, or High.
Also explain the reasoning behind the power stat suggestions.

Output the powerStats and reasoning in the following JSON format:
{
  "powerStats": {
    "magiculeLevel": "...",
    "intelligence": "...",
    "combatSkill": "..."
  },
  "reasoning": "..."
}
`,
});

const suggestPowerStatsFlow = ai.defineFlow(
  {
    name: 'suggestPowerStatsFlow',
    inputSchema: SuggestPowerStatsInputSchema,
    outputSchema: SuggestPowerStatsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
