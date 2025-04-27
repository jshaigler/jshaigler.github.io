// This file is machine-generated - do not edit!

'use server';

/**
 * @fileOverview An AI assistant that answers questions about the content on the website.
 *
 * - askQuestion - A function that handles the question answering process.
 * - AskQuestionInput - The input type for the askQuestion function.
 * - AskQuestionOutput - The return type for the askQuestion function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AskQuestionInputSchema = z.object({
  question: z.string().describe('The question to ask about the website content.'),
  websiteContent: z.string().describe('The content of the website to answer questions from.'),
});
export type AskQuestionInput = z.infer<typeof AskQuestionInputSchema>;

const AskQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about the website content.'),
});
export type AskQuestionOutput = z.infer<typeof AskQuestionOutputSchema>;

export async function askQuestion(input: AskQuestionInput): Promise<AskQuestionOutput> {
  return askQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askQuestionPrompt',
  input: {
    schema: z.object({
      question: z.string().describe('The question to ask about the website content.'),
      websiteContent: z.string().describe('The content of the website to answer questions from.'),
    }),
  },
  output: {
    schema: z.object({
      answer: z.string().describe('The answer to the question about the website content.'),
    }),
  },
  prompt: `You are a helpful AI assistant that answers questions about the content of a website.\n\nWebsite Content: {{{websiteContent}}}\n\nQuestion: {{{question}}}\n\nAnswer: `,
});

const askQuestionFlow = ai.defineFlow<
  typeof AskQuestionInputSchema,
  typeof AskQuestionOutputSchema
>(
  {
    name: 'askQuestionFlow',
    inputSchema: AskQuestionInputSchema,
    outputSchema: AskQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
