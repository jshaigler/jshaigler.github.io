import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter for a modern feel
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster";
import { ChatAssistantTrigger } from '@/components/chat-assistant-trigger';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Changed variable name if using Geist elsewhere
});

export const metadata: Metadata = {
  title: 'Phoenix Longevity',
  description: 'Pioneering the Next Generation of mRNA Life Extension Therapies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          {/* Footer could be added here */}
        </div>
        <ChatAssistantTrigger />
        <Toaster />
      </body>
    </html>
  );
}
