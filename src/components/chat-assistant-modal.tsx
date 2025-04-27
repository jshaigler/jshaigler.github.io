
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

    // Fetch website content on mount (simplified - ideally fetch dynamically or pass)
    // In a real app, you might scrape the current page or relevant sections.
    // For this example, we'll use a simplified placeholder or could potentially
    // scrape the main content areas of the rendered pages if running client-side heavy.
    // A server-side approach to gather content might be more robust.
    React.useEffect(() => {
        // Simplified: Capture basic text content of the body.
        // This is NOT a robust way to get structured content for Q&A.
        // A better approach would involve structured data or specific content fetching.
        try {
           const content = document.body.innerText || '';
           // Basic cleanup (remove excessive whitespace)
           const cleanedContent = content.replace(/\s\s+/g, ' ').trim().substring(0, 10000); // Limit length
           setWebsiteContent(cleanedContent);
        } catch (error) {
            console.error("Could not get website content:", error);
            setWebsiteContent("Error retrieving website content. Please try again later.");
        }
    }, [isOpen]); // Re-fetch if modal reopens


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
                throw new Error("Website content not available.");
             }
            const response = await askQuestion({ question: userMessage.text, websiteContent });
            const aiMessage: Message = { id: (Date.now() + 1).toString(), text: response.answer, sender: 'ai' };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error calling AI flow:', error);
             const errorMessage: Message = { id: (Date.now() + 1).toString(), text: "Sorry, I couldn't process that request. Please try again.", sender: 'ai' };
            setMessages((prev) => [...prev, errorMessage]);
            toast({
                title: "Error",
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                            <path d="M2 12l10 5 10-5"/>
                        </svg>
                        Phoenix Lifesciences Assistant
                    </DialogTitle>
                    <DialogDescription>
                        Ask questions about Phoenix Lifesciences and our technology.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="flex-1 px-6 pb-4" ref={scrollAreaRef}>
                    <div className="space-y-4 pr-4">
                         {messages.length === 0 && !isLoading && (
                            <p className="text-sm text-muted-foreground text-center py-8">
                                Ask me anything about the content on this website!
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
                                        {/* Placeholder AI avatar */}
                                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                                    </Avatar>
                                )}
                                <div
                                    className={cn(
                                        'max-w-[75%] rounded-lg p-3 text-sm shadow-sm',
                                        message.sender === 'user'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-secondary text-secondary-foreground'
                                    )}
                                >
                                    {message.text}
                                </div>
                                {message.sender === 'user' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className="bg-accent text-accent-foreground text-xs">U</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                         {isLoading && (
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
                            placeholder="Type your question..."
                            className="flex-1"
                            autoComplete="off"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isLoading}
                        />
                        <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                            <span className="sr-only">Send message</span>
                        </Button>
                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
