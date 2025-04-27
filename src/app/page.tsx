import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, Zap, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-secondary/50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
           {/* Subtle background pattern or graphic */}
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="patt" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="hsl(var(--primary))"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#patt)"></rect></svg>
        </div>
         {/* Placeholder for a 3D element - Could integrate react-three-fiber here */}
         {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           Add 3D component here
         </div> */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            Phoenix Longevity
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-muted-foreground">
            Pioneering the Next Generation of mRNA Life Extension Therapies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/solution">
                Explore Our Solution <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
            Extending Healthspan Through Science
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Target className="h-6 w-6 text-primary" />
                 </div>
                <CardTitle className="text-xl">Targeted Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focusing on key hallmarks of aging like telomere attrition and mitochondrial dysfunction.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                 </div>
                <CardTitle className="text-xl">mRNA Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leveraging next-gen mRNA delivery for precise and transient therapeutic action.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Microscope className="h-6 w-6 text-primary" />
                 </div>
                <CardTitle className="text-xl">Synergistic Effect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Combining multiple strategies for a comprehensive impact on the aging process.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-12 text-center text-lg text-muted-foreground max-w-4xl mx-auto">
            The longevity industry is booming, projected to reach $63 billion by 2035. Phoenix Lifesciences is at the forefront, developing Phoenix, a novel therapy designed to translate cutting-edge research into tangible solutions for healthier, longer lives.
          </p>
           <div className="mt-12 text-center">
             <Button variant="link" asChild>
                <Link href="/prototype">
                  See the Prototype <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
             </Button>
           </div>
        </div>
      </section>

        {/* You can add more sections here as needed */}

    </div>
  );
}
