
'use client'; // Required for Framer Motion

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, Zap, Microscope, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeIn } from '@/lib/animations'; // Assuming animations.ts exists

export default function Home() {
  return (
    <>
       {/* Remove top-level motion props to let layout handle page transition */}
      <div className="flex flex-col min-h-screen">
        {/* Hero Section - Animates immediately */}
        <motion.section
          initial="initial" // Animate this section on load
          animate="animate"
          variants={fadeIn} // Simple fade-in for the whole section
          className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-secondary/50 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="patt" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="hsl(var(--primary))"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#patt)"></rect></svg>
          </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <motion.div
              variants={staggerContainer}
              className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12"
            >
              {/* Text content column */}
              <motion.div variants={fadeInUp} className="text-center md:text-left md:max-w-2xl">
                <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                  Phoenix Lifesciences
                </motion.h1>
                <motion.p variants={fadeInUp} className="mt-4 text-lg md:text-xl lg:text-2xl text-muted-foreground">
                  Pioneering the Next Generation of mRNA Life Extension Therapies.
                </motion.p>
                 <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
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
                 </motion.div>
              </motion.div>
              {/* Image column */}
              <motion.div variants={fadeIn} className="w-full md:w-auto flex-shrink-0">
                <Image
                  src="/ChatGPT_Image_Apr_28__2025__04_19_52_PM-removebg-preview.png"
                  alt="Phoenix Lifesciences Product Demo"
                  width={300}
                  height={200}
                  className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-xl object-contain mx-auto md:mx-0"
                  priority // LCP Image
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction/Vision Section - Animate when in view */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% is visible
          variants={staggerContainer}
          className="py-16 md:py-24 bg-background"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
              Extending Healthspan Through Science
            </motion.h2>

            {/* Vision Section */}
            <motion.div
              initial="initial" // Use initial/whileInView for components within viewport-triggered sections
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
              variants={fadeIn} // Use a simple fadeIn for the container div
              className="mb-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-accent/5 to-primary/5 p-8 rounded-lg shadow-inner overflow-hidden"
            >
              <motion.div variants={fadeIn} className="md:w-1/2"> {/* Animate image */}
                <Image
                  src="/ChatGPT Image Apr 28, 2025, 04_06_08 PM.png"
                  alt="Vibrant illustration representing future health and longevity"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto saturate-110 contrast-110"
                  // Removed priority as it's not the LCP
                />
              </motion.div>
              <motion.div variants={staggerContainer} className="md:w-1/2"> {/* Stagger text animation */}
                  <motion.h3 variants={fadeInUp} className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                    <Eye className="h-8 w-8 text-primary" /> Our Vision for the Future
                  </motion.h3>
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-4">
                    At Phoenix Lifesciences, we envision a future fundamentally different from the present, one where the twilight years are not defined by frailty and suffering, but by vitality and continued engagement with life. We strive for a world where aging is not synonymous with inevitable decline, but rather a journey that can be navigated with health and grace.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
                    Our core mission stems from this vision: to extend human healthspan, granting individuals precious additional time—time to pursue passions, deepen relationships, contribute wisdom, and experience the richness of life alongside the people they cherish. We are driven by the goal of alleviating the burdens of age-related diseases, transforming the later stages of life into a period of opportunity and fulfillment, rather than one marked by pain and limitation. We are committed to developing innovative solutions that combat age-related decline and promote healthier, longer lives.
                  </motion.p>
              </motion.div>
            </motion.div>

            {/* Feature Cards Section - Animate when in view */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% is visible
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { icon: Target, title: 'Targeted Approach', desc: 'Focusing on key hallmarks of aging like telomere attrition and mitochondrial dysfunction.' },
                { icon: Zap, title: 'mRNA Technology', desc: 'Leveraging next-gen mRNA delivery for precise and transient therapeutic action.' },
                { icon: Microscope, title: 'Synergistic Effect', desc: 'Combining multiple strategies for a comprehensive impact on the aging process.' },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 h-full"> {/* Added h-full */}
                    <CardHeader>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.p
             initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
             className="mt-12 text-center text-lg text-muted-foreground max-w-4xl mx-auto">
              The longevity industry is booming, projected to reach $63 billion by 2035. Phoenix Lifesciences is at the forefront, developing Phoenix, a novel therapy designed to translate cutting-edge research into tangible solutions for healthier, longer lives.
            </motion.p>
            <motion.div
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
              className="mt-12 text-center">
              <Button variant="link" asChild>
                <Link href="/prototype">
                  See the Prototype <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
