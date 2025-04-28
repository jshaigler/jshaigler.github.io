
'use client'; // Required for Framer Motion client components

import type { Metadata } from 'next'; // Metadata type can still be used
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster";
import { ChatAssistantTrigger } from '@/components/chat-assistant-trigger';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Needed for AnimatePresence key

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Metadata object (remains server-side construct)
// Note: While the component is 'use client', metadata export is handled by Next.js build process
export const metadataObj: Metadata = {
  title: 'Phoenix Lifesciences',
  description: 'Pioneering the Next Generation of mRNA Life Extension Therapies',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

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
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname} // Unique key for triggering animations on route change
              initial={{ opacity: 0, y: 15 }} // Slightly reduced y offset
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }} // Slightly reduced y offset
              transition={{ duration: 0.25, ease: 'easeInOut' }} // Faster duration
              className="flex-1"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          {/* Footer could be added here */}
        </div>
        <ChatAssistantTrigger />
        <Toaster />
      </body>
    </html>
  );
}
