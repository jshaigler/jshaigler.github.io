
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
  // Increased max length description for Zod schema, though actual limit is handled in the component
  websiteContent: z.string().max(50000, "Website content exceeds maximum length").describe('The combined text content extracted from the website pages.'),
});
export type AskQuestionInput = z.infer<typeof AskQuestionInputSchema>;

const AskQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about the website content, potentially formatted using simple markdown (bold, italics).'),
});
export type AskQuestionOutput = z.infer<typeof AskQuestionOutputSchema>;

export async function askQuestion(input: AskQuestionInput): Promise<AskQuestionOutput> {
  // Basic input validation (more robust validation can be added)
  if (!input.question || !input.websiteContent) {
    console.error("Missing question or website content for AI assistant.");
    return { answer: "I apologize, but I need both a question and the website content to provide an answer." };
  }
  console.log(`Asking question: ${input.question.substring(0, 50)}... with input content length: ${input.websiteContent.length}`);
  return askQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askQuestionPrompt',
  input: {
    schema: z.object({
      question: z.string().describe('The user\'s question about the website content.'),
      websiteContent: z.string().describe('The extracted text content from *all* pages of the Phoenix Lifesciences website, concatenated together. Different pages are separated by markers like "--- Content from /about ---".'),
    }),
  },
  output: {
    schema: z.object({
      answer: z.string().describe('A concise and informative answer to the user\'s question based *only* on the provided website content. Search the *entire* provided text thoroughly, as it contains information from multiple pages (Home, About Us, Our Solution, Prototype). Use simple markdown like **bold** and *italics* for emphasis where appropriate. If the answer cannot be found in the content, state that explicitly.'),
    }),
  },
  // Updated prompt to emphasize searching the *entire* content across pages.
  prompt: `You are a helpful AI assistant for the Phoenix Lifesciences website. Your goal is to answer user questions based *solely* on the provided website content below. This content is a concatenation of text from multiple pages (Home, About Us, Our Solution, Prototype), separated by markers (e.g., '--- Content from /about ---').

Search the *entire* provided text thoroughly to find the answer. Do not invent information or use external knowledge.

--- START WEBSITE CONTENT (All Pages) ---
{{{websiteContent}}}
--- END WEBSITE CONTENT (All Pages) ---

Now, please answer the following user question based *only* on the information above. If the information is not present in the provided content, clearly state that you cannot find the answer in the website information. Use simple markdown like **bold** and *italics* for emphasis if needed.

Question: {{{question}}}

Answer:`,
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
    try {
        // Server-side truncation as a fallback (Component handles primary limit)
        // Increased limit slightly to match schema description
        const MAX_CONTENT_LENGTH = 50000;
        let truncatedContent = input.websiteContent;
        if (input.websiteContent.length > MAX_CONTENT_LENGTH) {
            console.warn(`Server-side truncation: Original content length ${input.websiteContent.length} exceeded limit ${MAX_CONTENT_LENGTH}.`);
            truncatedContent = input.websiteContent.substring(0, MAX_CONTENT_LENGTH) + "... [Content Truncated on Server]";
        }

        console.log(`Content length sent to prompt: ${truncatedContent.length}`); // Log final length

        const {output} = await prompt({ question: input.question, websiteContent: truncatedContent });

        if (!output?.answer) {
            console.warn("AI assistant returned empty output.");
            return { answer: "I apologize, I couldn't generate a response based on the provided information." };
        }
        return output;
    } catch (error) {
        console.error("Error in askQuestionFlow:", error);
        // Provide a more user-friendly error message
        return { answer: "Sorry, there was an issue communicating with the AI assistant. Please try again later." };
    }
  }
);

