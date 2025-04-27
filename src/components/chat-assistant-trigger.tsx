
"use client";

import * as React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatAssistantModal } from '@/components/chat-assistant-modal';

export function ChatAssistantTrigger() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <>
            <Button
                variant="default"
                size="icon"
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
                onClick={() => setIsModalOpen(true)}
                aria-label="Open Chat Assistant"
            >
                <MessageSquare className="h-6 w-6 text-primary-foreground" />
            </Button>
            <ChatAssistantModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
        </>
    );
}
