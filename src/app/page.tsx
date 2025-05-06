'use client'; // Required for Framer Motion and useEffect

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, Zap, Microscope, Eye, TrendingUp, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeIn, slideInLeft, slideInRight } from '@/lib/animations';
import { AnimatedStat } from '@/components/animated-stat'; 
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"; 
import { LineChart, CartesianGrid, XAxis, YAxis, Line, ResponsiveContainer } from 'recharts'; 


// Chart data and configuration
const chartData = [
  { year: "2024", marketSize: 21.29 },
  { year: "2030", marketSize: 44.04 }, 
  { year: "2035", marketSize: 63.0 },
];

const chartConfig = {
  marketSize: {
    label: "Market Size (Billion USD)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Animates immediately */}
      <motion.section
        initial="initial" 
        animate="animate"
        variants={fadeIn} 
        className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-secondary/50 overflow-hidden"
      >
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 motion-safe:animate-pulse">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="patt" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><circle cx="15" cy="15" r="1.5" fill="hsl(var(--primary))"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#patt)"></rect></svg>
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
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
                 <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                   <Link href="/solution">
                     Explore Our Solution <ArrowRight className="ml-2 h-5 w-5" />
                   </Link>
                 </Button>
                 <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                   <Link href="/about">
                     Learn About Us
                   </Link>
                 </Button>
               </motion.div>
            </motion.div>
            {/* Image column with enhanced animation */}
            <motion.div
              variants={fadeIn}
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.6, type: 'spring', stiffness: 100 } }}
              className="w-full md:w-auto flex-shrink-0"
             >
              <Image
                src="/ChatGPT Image Apr 30, 2025, 05_41_11 PM.png" 
                alt="Phoenix Lifesciences Product Representation"
                width={400}
                height={300}
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-xl object-contain mx-auto md:mx-0 hover:scale-105 transition-transform duration-300 ease-in-out"
                priority 
                data-ai-hint="futuristic medical technology"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* As Featured In Section Placeholder - Animate when in view */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="py-12 bg-muted/30"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            As Mentioned In Leading Research
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-60">
            {/* Placeholder logos - replace with actual logos */}
            <span className="font-semibold text-muted-foreground">PubMed Central</span>
            <span className="font-semibold text-muted-foreground">EMBO Journal</span>
            <span className="font-semibold text-muted-foreground">bioRxiv</span>
            <span className="font-semibold text-muted-foreground">Harvard Stem Cell Institute</span>
            <span className="font-semibold text-muted-foreground">Fight Aging!</span>
          </div>
        </div>
      </motion.section>

      {/* Introduction/Vision Section - Animate when in view */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }} 
        variants={staggerContainer}
        className="py-16 md:py-24 bg-background"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
            Extending Healthspan Through Science
          </motion.h2>

          {/* Vision Section */}
          <motion.div
            initial="initial" 
            animate="animate" 
            variants={fadeIn} 
            className="mb-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-accent/5 to-primary/5 p-8 rounded-lg shadow-inner overflow-hidden border border-border"
          >
            <motion.div variants={fadeIn} className="md:w-1/2"> 
              <Image
                src="/ChatGPT Image Apr 28, 2025, 04_06_08 PM.png" 
                alt="Vibrant illustration representing future health and longevity"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto saturate-110 contrast-110 hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint="future health longevity"
              />
            </motion.div>
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="md:w-1/2"> 
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

          {/* Enhanced Feature Cards Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Target, title: 'Targeted Approach', desc: 'Focusing on four key hallmarks of aging like telomere attrition and mitochondrial dysfunction.', details: 'Precisely intervenes in core aging pathways for maximum impact.' },
              { icon: Zap, title: 'mRNA Technology', desc: 'Leveraging next-gen mRNA delivery for precise and transient therapeutic action.', details: 'Ensures safe, temporary activation of rejuvenation mechanisms.' },
              { icon: Microscope, title: 'Synergistic Effect', desc: 'Combining multiple strategies for a comprehensive impact on the aging process.', details: 'Amplifies benefits by addressing interconnected aging factors simultaneously.' },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 group h-full flex flex-col"> 
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 border-2 border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow"> 
                    <p className="text-muted-foreground">{feature.desc}</p>
                     <p className="text-sm text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {feature.details}
                     </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Market Growth Section with Animation */}
          <motion.div
           initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
           className="mt-16 text-center bg-gradient-to-r from-muted/40 to-accent/10 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center justify-center gap-2">
              <TrendingUp className="h-7 w-7 text-primary"/> A Rapidly Growing Market
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              The longevity industry is experiencing explosive growth, projected to surge from <strong className="text-foreground"><AnimatedStat prefix="$" value={21.29} suffix="B" decimals={2} /></strong> in 2024 to an estimated <strong className="text-foreground"><AnimatedStat prefix="$" value={63.0} suffix="B" decimals={1} /></strong> by 2035. This represents a significant compound annual growth rate (CAGR) of <strong className="text-foreground"><AnimatedStat value={10.37} suffix="%" decimals={2} /></strong>. Phoenix Lifesciences is strategically positioned at the forefront of this revolution, developing Phoenix to translate cutting-edge science into tangible healthspan solutions.
            </p>
            {/* Animated Line Chart */}
             <div className="mt-8 h-64 w-full max-w-2xl mx-auto">
                 <ChartContainer config={chartConfig} className="h-full w-full">
                    <ResponsiveContainer>
                        <LineChart
                          accessibilityLayer
                          data={chartData}
                          margin={{
                            top: 20,
                            right: 20,
                            left: 0,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted-foreground/30" />
                          <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value}
                          />
                          <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            domain={['dataMin - 5', 'dataMax + 5']}
                            tickFormatter={(value) => `$${value}B`}
                          />
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideIndicator />}
                          />
                          <Line
                            dataKey="marketSize"
                            type="monotone"
                            stroke="var(--color-marketSize)"
                            strokeWidth={3}
                            dot={{
                              r: 5,
                              fill: "var(--color-marketSize)",
                              strokeWidth: 2,
                              stroke: "hsl(var(--background))"
                            }}
                            activeDot={{
                              r: 7,
                              fill: "var(--color-marketSize)",
                              strokeWidth: 2,
                               stroke: "hsl(var(--background))"
                            }}
                            animationDuration={1500} 
                          />
                        </LineChart>
                     </ResponsiveContainer>
                 </ChartContainer>
              </div>
               <p className="text-xs text-muted-foreground mt-2">(Projected Market Growth 2024-2035)</p>
          </motion.div>

          {/* Updated Call to Action */}
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
            className="mt-16 text-center">
             <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                 <Link href="/prototype">
                     Discover Your Longevity Potential <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
             </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Placeholder for Newsletter Signup */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="py-16 bg-secondary/70"
      >
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-secondary-foreground mb-4">
            Stay Ahead in Longevity Science
          </h3>
          <p className="text-secondary-foreground/80 mb-6">
            Subscribe to receive exclusive updates on our research breakthroughs and the evolving field of life extension.
          </p>
          {/* Basic Form Placeholder */}
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-md border border-input focus:ring-primary focus:border-primary outline-none" />
            <Button type="submit" className="shadow-md hover:shadow-lg">Subscribe</Button>
          </form>
        </div>
      </motion.section>

    </div> 
  );
}

