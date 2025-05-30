
"use client";

import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { usePathname } from 'next/navigation';
import { FlaskConical, Home, Presentation, Users, BookOpen, Microscope } from 'lucide-react'; // Added BookOpen, Microscope
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle'; // Import ThemeToggle

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/solution', label: 'Our Solution', icon: FlaskConical },
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/prototype', label: 'Prototype', icon: Presentation },
  // Consider adding these if dedicated pages are created:
  // { href: '/science', label: 'Science', icon: BookOpen },
  // { href: '/clinical-evidence', label: 'Clinical Evidence', icon: Microscope },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Replace SVG with Image component */}
        <Link href="/" className="flex items-center gap-3 group"> {/* Increased gap */}
           <Image
             // Paths in /public should be relative to the root
             src="/Logo-removebg-preview.png" // Updated path
             alt="Phoenix Lifesciences Logo"
             width={40} // Increased size
             height={40} // Increased size
             className="object-contain rounded-md" // Added rounded-md for consistency
             priority // Add priority to potentially improve LCP
           />
          <span className="font-bold text-lg text-foreground transition-colors duration-300 group-hover:text-primary">Phoenix Lifesciences</span>
        </Link>
        <div className="flex items-center space-x-1"> {/* Wrapper for nav and theme toggle */}
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
            <ThemeToggle /> {/* Add ThemeToggle button here */}
        </div>
        {/* Add Mobile Menu Trigger if needed later */}
        <div className="md:hidden">
          {/* Placeholder for mobile menu button, could include theme toggle here too */}
           <ThemeToggle /> {/* Include toggle in mobile view as well for now */}
        </div>
      </div>
    </header>
  );
}
