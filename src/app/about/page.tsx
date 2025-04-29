
'use client'; // Required for Framer Motion

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, FlaskConical, TrendingUp, CheckSquare, ExternalLink, BookText, HeartHandshake, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeIn, slideInLeft, slideInRight } from '@/lib/animations'; // Import animation variants

export default function AboutUsPage() {
  return (
    // Layout handles page transition
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Initial Section - Animates on load */}
      <motion.div
        initial="initial"
        animate="animate" // Animate this section immediately
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
          About Phoenix Lifesciences
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Dedicated to translating cutting-edge longevity research into clinically available therapies.
        </motion.p>
      </motion.div>

      {/* Our Approach Section - Animate when in view */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
          variants={staggerContainer}
          className="mb-20"
        >
            {/* Apply stagger to the container of the heading and grid */}
            <motion.div variants={staggerContainer}>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-12">Our Approach</motion.h2>
                <motion.div
                  variants={staggerContainer} // Stagger the cards themselves
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { icon: FlaskConical, title: 'Science-Driven', desc: 'Grounded in robust scientific understanding of the hallmarks of aging.' },
                        { icon: TrendingUp, title: 'Innovative Technology', desc: 'Leveraging next-generation mRNA technology for targeted and synergistic therapies.' },
                        { icon: CheckSquare, title: 'Rigorous R&D', desc: 'Committed to comprehensive testing, from in vitro studies to clinical trials.' },
                    ].map((approach, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 h-full">
                                <CardHeader>
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                        <approach.icon className="h-6 w-6 text-primary" />
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


      {/* Team Section - Animate when in view */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
        variants={staggerContainer}
        className="mb-16 text-center"
      >
         {/* Apply stagger to the container of the heading, paragraph, and grid */}
         <motion.div variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight mb-8 flex items-center justify-center gap-3">
                <Users className="h-8 w-8 text-primary" /> Our Founders
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Phoenix Lifesciences is led by a passionate team dedicated to advancing the field of longevity.
            </motion.p>
            <motion.div
              variants={staggerContainer} // Stagger the founder cards
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {/* Joshua Haigler Card */}
              <motion.div variants={slideInLeft}>
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-left flex flex-col md:flex-row items-start h-full">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQF0JOckp1538w/profile-displayphoto-shrink_400_400/B4DZSfuvphHYAg-/0/1737846632852?e=1751500800&v=beta&t=Q-ZIrep3uIUXNaGshAdBVdL3JVOZQhylITwh7Y83gUM"
                    alt="Joshua Haigler"
                    width={200}
                    height={200}
                    className="w-full md:w-1/3 h-auto object-cover rounded-br-lg"
                  />
                  <CardContent className="p-6 flex-1">
                    <h4 className="text-xl font-semibold text-foreground">Joshua Haigler</h4>
                    <p className="text-md text-primary font-medium mb-3">CEO & Co-founder</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      With a deep interest in medicine, synthetic biology, and biomedical engineering, Joshua focuses on translating innovative research into practical applications for health and longevity, driving the scientific vision of Phoenix Lifesciences.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Kiara Aguirre Card */}
              <motion.div variants={slideInRight}>
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-left flex flex-col md:flex-row items-start h-full">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGq8oxYCR80YQ/profile-displayphoto-shrink_400_400/B4EZRmHnWNG0Ag-/0/1736880061392?e=1751500800&v=beta&t=dEt-AuZp6pWxWU1o7bh67JHAFzOJTuWF7s7e2b59XBc"
                    alt="Kiara Aguirre"
                    width={200}
                    height={200}
                    className="w-full md:w-1/3 h-auto object-cover rounded-br-lg"
                  />
                  <CardContent className="p-6 flex-1">
                    <h4 className="text-xl font-semibold text-foreground">Kiara Aguirre</h4>
                    <p className="text-md text-primary font-medium mb-3">Head of Board & Co-founder</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Kiara leverages her background in linguistics and computer science to focus on human-centered solutions and impactful project development, bringing strategic vision and a focus on global impact to Phoenix Lifesciences.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
        </motion.div>
      </motion.section>

      {/* Article Section - Animate when in view */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
          variants={fadeIn}
          className="my-20 text-center bg-secondary/50 p-8 rounded-lg shadow-md"
        >
             {/* Apply stagger to the container of the heading, paragraph, and button */}
             <motion.div variants={staggerContainer}>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
                    <BookText className="h-8 w-8 text-primary" /> Read Our Latest Article
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                    Dive deeper into our vision and the science behind Phoenix Lifesciences. Explore our recent publication on Medium for more insights.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
                      <Link href="https://medium.com/p/a5f11e470707" target="_blank" rel="noopener noreferrer">
                          Read on Medium <ExternalLink className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
                </motion.div>
             </motion.div>
        </motion.section>

        {/* Path Forward Section - Animate when in view */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }} // Trigger earlier
        variants={fadeInUp} // Single animation for the whole section
        className="text-center mt-16"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4">The Path Forward</h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We are committed to a rigorous development pathway, including advanced in vitro testing, comprehensive animal studies, and carefully designed human clinical trials. Our goal is to bring safe and effective therapies from the laboratory to the living room, transforming the future of aging.
        </p>
      </motion.section>
    </div>
  );
}
