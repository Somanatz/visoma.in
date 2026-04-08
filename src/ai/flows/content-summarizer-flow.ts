// Server action disabled for static export - requires Node.js runtime
// 'use server';
/**
 * @fileOverview An internal AI tool for content creators to generate concise summaries and compelling taglines for service offerings and case studies.
 *
 * - contentSummarizer - A function that handles the content summarization and tagline generation process.
 * - ContentSummarizerInput - The input type for the contentSummarizer function.
 * - ContentSummarizerOutput - The return type for the contentSummarizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentSummarizerInputSchema = z.object({
  rawContent: z
    .string()
    .describe(
      'The raw content of a service offering or case study to be summarized and tagged.'
    ),
});
export type ContentSummarizerInput = z.infer<typeof ContentSummarizerInputSchema>;

const ContentSummarizerOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise, compelling, and brand-aligned summary (2-3 sentences) of the provided content, reflecting Visoma\'s futuristic, minimal, and high-trust brand voice.'
    ),
  tagline: z
    .string()
    .describe(
      'A short, impactful, and memorable tagline (5-10 words) for the provided content, aligning with Visoma\'s premium and innovative identity.'
    ),
});
export type ContentSummarizerOutput = z.infer<typeof ContentSummarizerOutputSchema>;

export async function contentSummarizer(
  input: ContentSummarizerInput
): Promise<ContentSummarizerOutput> {
  return contentSummarizerFlow(input);
}

const contentSummarizerPrompt = ai.definePrompt({
  name: 'contentSummarizerPrompt',
  input: {schema: ContentSummarizerInputSchema},
  output: {schema: ContentSummarizerOutputSchema},
  prompt: `You are an expert marketing copywriter for Visoma, a premium AI, Data, and Automation services company. Your goal is to generate a concise summary and a compelling tagline for the provided raw content.

Summary requirements:
- 2-3 sentences long.
- Reflect Visoma's futuristic, minimal, and high-trust brand voice.

Tagline requirements:
- Short (5-10 words).
- Impactful and memorable.
- Align with Visoma's premium and innovative identity.

Raw Content:
{{{rawContent}}}`,
});

const contentSummarizerFlow = ai.defineFlow(
  {
    name: 'contentSummarizerFlow',
    inputSchema: ContentSummarizerInputSchema,
    outputSchema: ContentSummarizerOutputSchema,
  },
  async input => {
    const {output} = await contentSummarizerPrompt(input);
    return output!;
  }
);
