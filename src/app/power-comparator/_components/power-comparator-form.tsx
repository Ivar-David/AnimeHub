'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { handleSuggestStats } from '../actions';
import { type SuggestPowerStatsOutput } from "@/ai/flows/suggest-power-stats";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  entityType: z.enum(['character', 'skill'], {
    required_error: "You need to select an entity type.",
  }),
  entityDescription: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }).max(500, {
    message: "Description must not be longer than 500 characters."
  }),
  raceOrClass: z.string().min(2, {
    message: "Race/Class must be at least 2 characters.",
  }),
})

type PowerComparatorFormProps = {
  setResult: (result: SuggestPowerStatsOutput | null) => void;
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  isLoading: boolean;
};

export function PowerComparatorForm({ setResult, setIsLoading, setError, isLoading }: PowerComparatorFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entityType: 'character',
      entityDescription: "",
      raceOrClass: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const result = await handleSuggestStats(values);
      if (result) {
        setResult(result);
      } else {
        throw new Error("Failed to get suggestions. The AI might be busy.");
      }
    } catch (e: any) {
      const errorMessage = e.message || "An unexpected error occurred.";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Error Generating Stats",
        description: errorMessage,
      })
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="glowing-card border-accent/50">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-accent">Create Your Entity</CardTitle>
        <CardDescription>Describe your creation to get balanced power stats.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="entityType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Entity Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="character" />
                        </FormControl>
                        <FormLabel className="font-normal">Character</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="skill" />
                        </FormControl>
                        <FormLabel className="font-normal">Skill</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="raceOrClass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Race or Class</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Kijin, Primordial Demon, Unique Skill" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the character's race or the skill's class.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="entityDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the character or skill. e.g., A powerful ogre swordsman with mastery over black flames."
                      className="resize-none"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide enough detail for the AI to understand the entity's concept.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full glowing-button variant-accent" disabled={isLoading} size="lg">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Suggest Power Stats
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
