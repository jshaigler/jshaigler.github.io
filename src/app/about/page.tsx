'use client'; 

import React, { useEffect, useRef } from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, FlaskConical, TrendingUp, CheckSquare, ExternalLink, BookText, HeartHandshake, Eye, Award } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion'; 
import { fadeInUp, staggerContainer, fadeIn, slideInLeft, slideInRight } from '@/lib/animations';
import { AnimatedStat } from '@/components/animated-stat';


export default function AboutUsPage() {
    const isMountedRef = useRef(false);

    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);


  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Initial Section */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate" 
        className="text-center mb-16"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
          About Phoenix Lifesciences
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Dedicated to translating cutting-edge longevity research into clinically available therapies, extending healthspan and enriching lives.
        </motion.p>
      </motion.div>

      {/* Mission & Vision Section */}
        <motion.section
          initial="initial"
          animate="animate" 
          variants={staggerContainer}
          className="mb-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-accent/5 to-primary/5 p-8 rounded-lg shadow-inner overflow-hidden border border-border"
        >
          {/* Image */}
          <motion.div variants={fadeIn} className="md:w-1/2">
            <Image
              src="/ChatGPT Image May 2, 2025, 02_42_15 PM.png"
              alt="Scientific illustration representing advanced cellular research" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto saturate-110 contrast-110 hover:scale-105 transition-transform duration-300 ease-in-out"
              data-ai-hint="science research laboratory" 
              priority 
            />
          </motion.div>
          {/* Text Content - Stagger children */}
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="md:w-1/2">
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
                <HeartHandshake className="h-8 w-8 text-primary" /> Our Core Mission
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-4">
                 We envision a future where aging is redefined—not as inevitable decline, but as a journey navigated with health, purpose, and grace. Our mission is to extend human <strong className="text-foreground">healthspan</strong>, granting individuals more quality time to pursue passions, deepen relationships, and contribute wisdom.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
                We are driven to alleviate the burdens of age-related diseases, transforming later life into a period of continued fulfillment. Through pioneering science and innovative mRNA therapies, we aim to empower longer, healthier, and more vibrant lives.
              </motion.p>
          </motion.div>
        </motion.section>


      {/* Our Approach Section */}
        <motion.section
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mb-20"
        >
            <motion.div variants={staggerContainer}>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-12">Our Approach</motion.h2>
                <motion.div
                  variants={staggerContainer} 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { icon: FlaskConical, title: 'Science-Driven', desc: 'Grounded in robust scientific understanding of the hallmarks of aging.' },
                        { icon: TrendingUp, title: 'Innovative Technology', desc: 'Leveraging next-generation mRNA technology for targeted and synergistic therapies.' },
                        { icon: CheckSquare, title: 'Rigorous R&amp;D', desc: 'Committed to comprehensive testing, from in vitro studies to clinical trials.' },
                    ].map((approach, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="text-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 h-full group"> 
                                <CardHeader>
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 border-2 border-primary/20 group-hover:bg-primary/20 transition-colors">
                                        <approach.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                                    </div>
                                    <CardTitle className="text-xl">{approach.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {approach.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>


      {/* Team Section - Enhanced Layout */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }} 
        variants={staggerContainer}
        className="mb-16 text-center"
      >
         <motion.div variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight mb-8 flex items-center justify-center gap-3">
                <Users className="h-8 w-8 text-primary" /> Our Founders
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Phoenix Lifesciences is spearheaded by a dynamic team blending scientific curiosity with strategic execution to revolutionize longevity therapeutics.
            </motion.p>
            <motion.div
              variants={staggerContainer} 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch" 
            >
              {/* Joshua Haigler Card */}
              <motion.div variants={slideInLeft} className="flex">
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-left flex flex-col w-full"> 
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/D4D03AQF0JOckp1538w/profile-displayphoto-shrink_400_400/B4DZSfuvphHYAg-/0/1737846632852?e=1751500800&amp;v=beta&amp;t=Q-ZIrep3uIUXNaGshAdBVdL3JVOZQhylITwh7Y83gUM"
                        alt="Joshua Haigler"
                        width={200}
                        height={200}
                        className="w-full sm:w-1/3 h-auto object-cover flex-shrink-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none sm:rounded-br-lg" 
                        unoptimized 
                      />
                      <CardContent className="p-6 flex-1">
                        <h4 className="text-xl font-semibold text-foreground">Joshua Haigler</h4>
                        <p className="text-md text-primary font-medium mb-3">CEO &amp; Co-founder</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                           Driven by a passion for medicine and synthetic biology, Joshua translates cutting-edge research into practical longevity solutions, guiding the scientific vision of Phoenix Lifesciences.
                        </p>
                         
                         <div className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
                            <FlaskConical size={14} className="text-primary"/> Focus: Scientific Innovation &amp; Product Development
                         </div>
                      </CardContent>
                  </div>
                </Card>
              </motion.div>

              {/* Kiara Aguirre Card */}
              <motion.div variants={slideInRight} className="flex">
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-left flex flex-col w-full"> 
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                       <Image
                        src="https://media.licdn.com/dms/image/v2/D4E03AQGq8oxYCR80YQ/profile-displayphoto-shrink_400_400/B4EZRmHnWNG0Ag-/0/1736880061392?e=1751500800&amp;v=beta&amp;t=dEt-AuZp6pWxWU1o7bh67JHAFzOJTuWF7s7e2b59XBc"
                        alt="Kiara Aguirre"
                        width={200}
                        height={200}
                         className="w-full sm:w-1/3 h-auto object-cover flex-shrink-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none sm:rounded-br-lg" 
                         unoptimized 
                      />
                      <CardContent className="p-6 flex-1">
                        <h4 className="text-xl font-semibold text-foreground">Kiara Aguirre</h4>
                        <p className="text-md text-primary font-medium mb-3">Head of Board &amp; Co-founder</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                           Leveraging expertise in linguistics and CS, Kiara ensures our solutions are human-centered, driving strategic vision and global impact for Phoenix Lifesciences.
                        </p>
                         
                        <div className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
                            <Award size={14} className="text-primary"/> Focus: Strategic Growth &amp; Human-Centered Design
                         </div>
                      </CardContent>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
        </motion.div>
      </motion.section>

      {/* Article Section - Replaced Button with Article Card */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeIn}
          className="my-20 text-center"
        >
             <motion.div variants={staggerContainer}>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
                    <BookText className="h-8 w-8 text-primary" /> Read Our Latest Article
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                    Dive deeper into our vision and the science behind Phoenix Lifesciences. Explore our recent publication on Medium for more insights into our therapeutic approach.
                </motion.p>
                {/* Article Card */}
                <motion.div variants={fadeInUp} className="max-w-xl mx-auto">
                   <Link href="https://medium.com/p/a5f11e470707" target="_blank" rel="noopener noreferrer" className="block group">
                        <Card className="text-left shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 border border-border hover:border-primary/30 overflow-hidden">
                             
                             <CardHeader className="flex flex-row items-center gap-4">
                                <div className="flex-shrink-0">
                                    <BookText className="h-10 w-10 text-primary" />
                                </div>
                                <div className="flex-grow">
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        Pioneering the Next Generation of mRNA Life Extension Therapies
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">Published on Medium</p>
                                </div>
                             </CardHeader>
                             <CardContent>
                                 
                                 <div className="space-y-1.5">
                                     <div className="h-2 bg-muted rounded-full w-full"></div>
                                     <div className="h-2 bg-muted rounded-full w-11/12"></div>
                                     <div className="h-2 bg-muted rounded-full w-4/5"></div>
                                     <div className="h-2 bg-muted rounded-full w-10/12"></div>
                                 </div>
                                 <div className="mt-4 flex items-center justify-end text-primary text-sm font-medium group-hover:underline">
                                     Read More <ExternalLink className="ml-1.5 h-4 w-4" />
                                 </div>
                             </CardContent>
                        </Card>
                   </Link>
                </motion.div>
             </motion.div>
        </motion.section>

        {/* General Call to Action/Next Steps */}
        <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mt-16 py-12 bg-muted/30 rounded-lg"
        >
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">
                Join Us on the Forefront of Longevity
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Phoenix Lifesciences is committed to pushing the boundaries of what's possible in healthspan extension. We invite you to explore our research, understand our approach, and envision a future where longer, healthier lives are achievable for all.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                    <Link href="/solution">
                        Discover Our Therapeutic Solution
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                    <Link href="/prototype">
                        Learn About Our Prototype
                    </Link>
                </Button>
            </div>
        </motion.section>
    </div>
  );
}
