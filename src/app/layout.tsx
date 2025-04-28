
'use client'; // Required for Framer Motion client components

import type { Metadata } from 'next'; // Metadata type can still be used
// Removed Inter font import
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster";
import { ChatAssistantTrigger } from '@/components/chat-assistant-trigger';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Needed for AnimatePresence key
import { Suspense } from 'react'; // Import Suspense
import { LoadingSpinner } from '@/components/loading-spinner'; // Import the loading spinner

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
          // Removed font variable class
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
           {/* Wrap the main content area with Suspense */}
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <motion.main
                key={pathname} // Unique key for triggering animations on route change
                 initial="initial" // Use initial state from variants
                 animate="animate" // Use animate state from variants
                 exit="exit" // Use exit state from variants
                 variants={{ // Define inline variants for page transitions
                   initial: { opacity: 0, y: 15 },
                   animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
                   exit: { opacity: 0, y: -15, transition: { duration: 0.25, ease: 'easeInOut' } },
                 }}
                className="flex-1"
              >
                {children}
              </motion.main>
            </AnimatePresence>
          </Suspense>
          {/* Footer could be added here */}
        </div>
        <ChatAssistantTrigger />
        <Toaster />
      </body>
    </html>
  );
}

