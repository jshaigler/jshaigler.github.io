import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, Zap, Microscope, Eye } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-secondary/50 overflow-hidden">
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            {/* Subtle background pattern or graphic */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="patt" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="hsl(var(--primary))"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#patt)"></rect></svg>
          </div>
          {/* Placeholder for a 3D element */}
          {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            Add 3D component here
          </div> */}
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
              {/* Text content column */}
              <div className="text-center md:text-left md:max-w-2xl"> {/* Added max-width */}
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                  Phoenix Lifesciences
                </h1>
                 {/* Moved Subheading and Buttons Here */}
                <p className="mt-4 text-lg md:text-xl lg:text-2xl text-muted-foreground">
                  Pioneering the Next Generation of mRNA Life Extension Therapies.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"> {/* Changed justify-center to md:justify-start */}
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
                 {/* End Moved Content */}
              </div>
              {/* Image column */}
              <div className="w-full md:w-auto flex-shrink-0"> {/* Added flex-shrink-0 */}
                <Image
                  src="/ChatGPT_Image_Apr_28__2025__04_19_52_PM-removebg-preview.png"
                  alt="Phoenix Lifesciences Product Demo"
                  width={300}
                  height={200}
                  className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-xl object-contain mx-auto md:mx-0" // Adjusted max-width and margin
                  priority // Add priority for LCP element
                />
              </div>
            </div>
          </div> {/* End of .container */}
        </section>

        {/* Introduction/Vision Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
              Extending Healthspan Through Science
            </h2>

            {/* Vision Section - Moved from About page */}
            <div className="mb-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-accent/5 to-primary/5 p-8 rounded-lg shadow-inner overflow-hidden">
              <div className="md:w-1/2">
                <Image
                  // Using a more thematic placeholder for the vision section
                  // Replace with an actual relevant image
                  src="/ChatGPT Image Apr 28, 2025, 04_06_08 PM.png" // Changed placeholder source
                  alt="Vibrant illustration representing future health and longevity"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto saturate-110 contrast-110" // Removed fixed height to maintain aspect ratio
                />
              </div>
              <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                    <Eye className="h-8 w-8 text-primary" /> Our Vision for the Future
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    At Phoenix Lifesciences, we envision a future fundamentally different from the present, one where the twilight years are not defined by frailty and suffering, but by vitality and continued engagement with life. We strive for a world where aging is not synonymous with inevitable decline, but rather a journey that can be navigated with health and grace.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our core mission stems from this vision: to extend human healthspan, granting individuals precious additional time—time to pursue passions, deepen relationships, contribute wisdom, and experience the richness of life alongside the people they cherish. We are driven by the goal of alleviating the burdens of age-related diseases, transforming the later stages of life into a period of opportunity and fulfillment, rather than one marked by pain and limitation. We are committed to developing innovative solutions that combat age-related decline and promote healthier, longer lives.
                  </p>
              </div>
            </div>

            {/* Feature Cards Section */}
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
    </>
  );
}
