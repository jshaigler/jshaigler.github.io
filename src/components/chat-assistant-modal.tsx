
"use client";

import * as React from 'react';
import Image from 'next/image'; // Import Image component
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, Loader2 } from 'lucide-react';
import { askQuestion } from '@/ai/flows/website-content-assistant'; // Assuming flow exists
import { useToast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
}

export function ChatAssistantModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [inputValue, setInputValue] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [websiteContent, setWebsiteContent] = React.useState('');
    const { toast } = useToast();
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);

    // Fetch content from all relevant pages when the modal opens
    React.useEffect(() => {
        const fetchAllContent = async () => {
          setIsLoading(true); // Indicate loading while fetching content
          setWebsiteContent(''); // Clear previous content
          console.log("Fetching website content...");
          try {
            let fullContent = '';
            // List of routes to fetch content from (adjust if routes change)
            const routes = ['/', '/about', '/solution', '/prototype'];
            const fetchPromises = routes.map(route =>
              fetch(route)
                .then(res => {
                  if (!res.ok) {
                    console.error(`Failed to fetch content from ${route}: ${res.status} ${res.statusText}`);
                    return ''; // Return empty string on failure
                  }
                  return res.text();
                })
                .catch(err => {
                  console.error(`Network error fetching ${route}:`, err);
                  return ''; // Return empty string on network error
                })
            );

            const htmlContents = await Promise.all(fetchPromises);

            htmlContents.forEach((html, index) => {
              if (html) {
                try {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(html, 'text/html');
                  // Try to get main content area, fallback to body
                  const mainContent = doc.querySelector('main')?.innerText || doc.body.innerText || '';
                  if(mainContent) {
                      // Add a separator and the route path for context
                      fullContent += `\n\n--- Content from ${routes[index]} ---\n\n${mainContent}`;
                  } else {
                      console.warn(`No main content found for ${routes[index]}`);
                  }
                } catch(parseError) {
                  console.error(`Error parsing HTML from ${routes[index]}:`, parseError);
                }
              }
            });


            if (!fullContent) {
                throw new Error("Could not extract any content from the site.");
            }

            // Clean and limit content size - Increased limit for more context
            // Using a larger limit as LLMs can handle more context now. Still important for performance/cost.
            const MAX_CONTENT_LENGTH = 50000; // Increased limit significantly
            let cleanedContent = fullContent.replace(/\s\s+/g, ' ').trim();
            if (cleanedContent.length > MAX_CONTENT_LENGTH) {
                console.warn(`Content length ${cleanedContent.length} exceeds limit ${MAX_CONTENT_LENGTH}. Truncating.`);
                cleanedContent = cleanedContent.substring(0, MAX_CONTENT_LENGTH);
                toast({
                    title: "Context Limit Reached",
                    description: `Website content has been truncated to ${MAX_CONTENT_LENGTH} characters. Answers may be based on partial information.`,
                    variant: "default",
                    duration: 5000,
                });
            }

            setWebsiteContent(cleanedContent);
            console.log(`Website content fetched successfully. Length: ${cleanedContent.length}`);
          } catch (error) {
            console.error("Could not get website content:", error);
            setWebsiteContent("Error retrieving website content. The assistant might not have full context.");
            toast({
                title: "Content Fetch Error",
                description: "Could not fetch all website content for the assistant.",
                variant: "destructive",
            });
          } finally {
            setIsLoading(false); // Stop loading indicator
          }
        };

        if (isOpen && !websiteContent) { // Fetch only if open and content isn't already loaded
          fetchAllContent();
        }
      }, [isOpen, websiteContent, toast]); // Add websiteContent and toast to dependency array


    React.useEffect(() => {
        // Scroll to bottom when messages change
        if (scrollAreaRef.current) {
             const scrollableViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
             if(scrollableViewport){
                 scrollableViewport.scrollTop = scrollableViewport.scrollHeight;
             }
        }
    }, [messages]);


    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = { id: Date.now().toString(), text: inputValue, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
             if (!websiteContent) {
                 console.warn("Website content is empty, AI might lack context.");
                // Optionally inform user or proceed with caution
                toast({
                    title: "Limited Context",
                    description: "Website content might not be fully loaded. Answers may be incomplete.",
                    variant: "default",
                });
             }
            const response = await askQuestion({ question: userMessage.text, websiteContent: websiteContent || "No website content available." });
            const aiMessage: Message = { id: (Date.now() + 1).toString(), text: response.answer, sender: 'ai' };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error calling AI flow:', error);
             const errorMessage: Message = { id: (Date.now() + 1).toString(), text: "Sorry, I encountered an error trying to process that request. Please check the console or try again later.", sender: 'ai' };
            setMessages((prev) => [...prev, errorMessage]);
            toast({
                title: "Assistant Error",
                description: "Failed to get response from the assistant.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] h-[70vh] flex flex-col p-0">
                <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="flex items-center gap-2">
                         {/* Replace SVG with the company logo Image component */}
                         <Image
                           src="/Logo-removebg-preview.png" // Path to the logo in /public
                           alt="Phoenix Lifesciences Logo"
                           width={24} // Adjust size as needed (similar to original SVG h-6 w-6)
                           height={24}
                           className="object-contain rounded-sm" // Adjust styling as needed
                         />
                        Phoenix Lifesciences Assistant
                    </DialogTitle>
                    <DialogDescription>
                        Ask questions about Phoenix Lifesciences and our technology based on the website content.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="flex-1 px-6 pb-4" ref={scrollAreaRef}>
                    <div className="space-y-4 pr-4">
                         {messages.length === 0 && !isLoading && (
                            <p className="text-sm text-muted-foreground text-center py-8">
                                {websiteContent ? "Ask me anything about the content on this website!" : "Loading website content..."}
                            </p>
                        )}
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={cn(
                                    'flex items-start gap-3',
                                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                                )}
                            >
                                {message.sender === 'ai' && (
                                    <Avatar className="h-8 w-8">
                                        {/* Use a simple AI fallback */}
                                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                                    </Avatar>
                                )}
                                <div
                                    className={cn(
                                        'max-w-[75%] rounded-lg p-3 text-sm shadow-sm',
                                        message.sender === 'user'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-secondary text-secondary-foreground' // Keep AI response distinct
                                    )}
                                >
                                    {/* Basic markdown rendering (bold, italics) - can be expanded */}
                                    {message.text.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, index) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={index}>{part.slice(2, -2)}</strong>;
                                        }
                                        if (part.startsWith('*') && part.endsWith('*')) {
                                            return <em key={index}>{part.slice(1, -1)}</em>;
                                        }
                                        // Replace potential newline characters from markdown with <br />
                                        return part.split('\n').map((line, lineIndex) => (
                                          <React.Fragment key={`${index}-${lineIndex}`}>
                                            {line}
                                            {lineIndex < part.split('\n').length - 1 && <br />}
                                          </React.Fragment>
                                        ));
                                    })}
                                </div>
                                {message.sender === 'user' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className="bg-accent text-accent-foreground text-xs">U</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                         {isLoading && messages.length > 0 && messages[messages.length - 1].sender === 'user' && ( // Show loader only when AI is thinking
                            <div className="flex justify-start items-center gap-3">
                                <Avatar className="h-8 w-8">
                                     <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                                </Avatar>
                                <div className="bg-secondary rounded-lg p-3 text-sm shadow-sm">
                                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                <DialogFooter className="p-6 pt-2 border-t">
                    <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                        <Input
                            id="message"
                            placeholder={isLoading ? "Thinking..." : "Type your question..."}
                            className="flex-1"
                            autoComplete="off"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isLoading || (!websiteContent && messages.length === 0)} // Disable input while loading initial content or while responding
                        />
                        <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim() || (!websiteContent && messages.length === 0)}>
                            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                            <span className="sr-only">Send message</span>
                        </Button>
                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
