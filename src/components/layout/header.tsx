
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FlaskConical, Home, Info, Presentation, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/solution', label: 'Our Solution', icon: FlaskConical },
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/prototype', label: 'Prototype', icon: Presentation },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed 'group' class from Link and 'group-hover' styles from children */}
        <Link href="/" className="flex items-center gap-2">
           {/* Phoenix Logo SVG */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
            <path d="M12 2C8.2 6.2 6 10.5 6 15c0 3.9 3.1 7 7 7s7-3.1 7-7c0-4.5-2.2-8.8-6-13z" />
            <path d="M9 18c-1.4 0-2.6-.6-3.5-1.5" />
            <path d="M15 18c1.4 0 2.6-.6 3.5-1.5" />
            <path d="M12 15s-1-2-3-2" />
            <path d="M12 15s1-2 3-2" />
         </svg>
          <span className="font-bold text-lg text-foreground">Phoenix Lifesciences</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                'transition-colors hover:text-primary hover:bg-primary/10', // Keep hover effect on button itself
                pathname === item.href
                  ? 'text-primary bg-primary/10 font-semibold' // Active state
                  : 'text-muted-foreground' // Inactive state
              )}
            >
              <Link href={item.href} className="flex items-center gap-2 px-4 py-2">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        {/* Add Mobile Menu Trigger if needed later */}
        <div className="md:hidden">
          {/* Placeholder for mobile menu button */}
        </div>
      </div>
    </header>
  );
}
