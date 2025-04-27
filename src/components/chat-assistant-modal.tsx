
"use client";

import * as React from 'react';
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

            // Clean and limit content size
            const cleanedContent = fullContent.replace(/\s\s+/g, ' ').trim().substring(0, 25000); // Increased limit slightly
            setWebsiteContent(cleanedContent);
            console.log("Website content fetched successfully.");
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
                         {/* Using the new logo SVG */}
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                            <path d="M12 2C8.2 6.2 6 10.5 6 15c0 3.9 3.1 7 7 7s7-3.1 7-7c0-4.5-2.2-8.8-6-13z" />
                            <path d="M9 18c-1.4 0-2.6-.6-3.5-1.5" />
                            <path d="M15 18c1.4 0 2.6-.6 3.5-1.5" />
                            <path d="M12 15s-1-2-3-2" />
                            <path d="M12 15s1-2 3-2" />
                        </svg>
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
                                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                                    </Avatar>
                                )}
                                <div
                                    className={cn(
                                        'max-w-[75%] rounded-lg p-3 text-sm shadow-sm',
                                        message.sender === 'user'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-secondary text-secondary-foreground' // Use primary color for AI response background
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
                                        return part;
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
