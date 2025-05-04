
'use client'; // Required for Framer Motion and client components

import React from 'react'; // Import React
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, FlaskConical, BookOpen, Info, ExternalLink, AlertTriangle, Search, SlidersHorizontal, BrainCircuit, Award, GraduationCap } from 'lucide-react'; // Added icons
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeIn } from '@/lib/animations';
// Corrected import path for placeholder
import { InteractiveVisualPlaceholder } from '@/components/interactive-placeholder';


const sources = [
    { title: "Lin28 enhances tissue repair...", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3917449/", number: 1, category: "Epigenetics" },
    { title: "LIN28A enhances regenerative capacity...", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8901931/", number: 2, category: "Epigenetics" },
    { title: "Lin28a - boost your energy...", url: "https://www.embopress.org/doi/full/10.1002/embj.201387363", number: 3, category: "Mitochondria" },
    { title: "Lin28a rejuvenates muscle stem cells...", url: "https://www.biorxiv.org/content/10.1101/2021.10.14.462144v1.full.pdf", number: 4, category: "Stem Cells" },
    { title: "Wound healing, regeneration, and Lin28", url: "https://www.axopub.com/wp01/2013/11/14/wound-healing-regeneration-and-lin28/", number: 5, category: "Regeneration" },
    { title: "Lin28A Accelerates Wound Healing...", url: "https://pharmaceuticalintelligence.com/2015/01/14/lin28a-accelerates-wound-healing-hair-regrowth-and-turns-back-the-aging-clock-a-little/", number: 6, category: "Regeneration" },
    { title: "HSCI researchers regrow hair...", url: "https://www.hsci.harvard.edu/news/hsci-researchers-regrow-hair-cartilage-bone-soft-tissues", number: 7, category: "Regeneration" },
    { title: "More on Lin28a and Enhanced Regeneration", url: "https://www.fightaging.org/archives/2013/11/more-on-lin28a-and-enhanced-regeneration/", number: 8, category: "Regeneration" },
    { title: "Lin28 enhances tissue repair (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/24209617/", number: 9, category: "Epigenetics" },
    // Add placeholders for other pillars if needed
     { title: "TERT mRNA Telomere Extension Study", url: "#", number: 10, category: "Telomeres" },
     { title: "TFAM Mitochondrial Function Research", url: "#", number: 11, category: "Mitochondria" },
     { title: "MDM2/p53 Pathway Modulation Paper", url: "#", number: 12, category: "DNA Repair" },
];


export default function PrototypePage() {
  return (
    // Wrap entire content in motion.div for consistent page transitions
     <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
            exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeInOut' } },
        }}
        className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Initial Section */}
      <motion.div
        variants={staggerContainer} // Use stagger for title/subtitle
        initial="initial"
        animate="animate" // Animate immediately
        className="text-center mb-16"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
          Phoenix Prototype & Research Basis
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Understanding the scientific foundation, current preclinical status, and future potential of the Phoenix therapy concept.
        </motion.p>
      </motion.div>

       {/* Removed Interactive Demo Section (VideoSlider) */}

      {/* Current Status Section */}
      <motion.section
        initial="initial"
        animate="animate" // Animate immediately
        variants={staggerContainer}
        className="mb-20 p-8 bg-gradient-to-b from-secondary/30 to-background rounded-lg shadow-md border border-border" // Subtle gradient
      >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-8 flex items-center justify-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary"/> Current Stage: Preclinical Concept
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-center text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                <p>
                    The Phoenix therapy represents a <strong className="text-foreground">comprehensive therapeutic concept</strong> integrating cutting-edge research in mRNA technology, telomere biology, mitochondrial health, DNA repair, and epigenetic reprogramming. It aims to address multiple aging hallmarks simultaneously.
                </p>
                <p>
                    Currently, Phoenix is in the <strong className="text-foreground">preclinical and conceptual development phase</strong>. While individual components have strong scientific backing (see sources), the integrated Phoenix platform requires extensive further research, optimization, and rigorous testing before potential clinical trials.
                </p>
            </motion.div>
             {/* Key Activities */}
             <motion.div variants={staggerContainer} className="mt-10 max-w-3xl mx-auto">
                 <motion.h4 variants={fadeInUp} className="font-semibold text-center text-foreground mb-4">
                    Key Development Activities:
                 </motion.h4>
                 <motion.ul variants={fadeInUp} className="list-none space-y-3 p-0">
                    <li className="flex items-start p-3 bg-background/60 rounded-md shadow-sm">
                        <FlaskConical size={18} className="mr-3 mt-0.5 text-primary shrink-0"/>
                        <span>Optimizing mRNA/miRNA sequences and lipid nanoparticle (LNP) delivery systems for enhanced targeting and efficacy.</span>
                    </li>
                    <li className="flex items-start p-3 bg-background/60 rounded-md shadow-sm">
                        <SlidersHorizontal size={18} className="mr-3 mt-0.5 text-primary shrink-0"/>
                        <span>Conducting advanced <em className="italic">in vitro</em> (cell-based) studies to validate synergistic effects and molecular pathways.</span>
                    </li>
                     <li className="flex items-start p-3 bg-background/60 rounded-md shadow-sm">
                        <Search size={18} className="mr-3 mt-0.5 text-primary shrink-0"/>
                        <span>Designing and executing comprehensive <em className="italic">in vivo</em> (animal model) studies to assess safety, efficacy, and biodistribution.</span>
                    </li>
                 </motion.ul>
            </motion.div>
             {/* Prominent Disclaimer */}
             <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-3 text-lg font-semibold text-destructive bg-destructive/10 p-4 rounded-md border border-destructive/30 max-w-lg mx-auto">
                 <AlertTriangle className="h-6 w-6" />
                 Phoenix is NOT currently available as a treatment.
             </motion.div>
      </motion.section>


      {/* Research Basis Section - Enhanced */}
      <motion.section
        id="research-basis" // Add ID for linking
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
        variants={staggerContainer}
        className="mb-16"
      >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-12 flex items-center justify-center gap-3">
             <BookOpen className="h-8 w-8 text-primary"/> Scientific Foundation & Sources
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-lg text-muted-foreground mb-10 max-w-4xl mx-auto">
              The Phoenix concept builds upon extensive scientific literature. Below are key publications informing our approach, categorized by research area. This is a representative sample of the evidence base.
          </motion.p>
          {/* Enhanced Source Cards */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sources.map((source) => (
                  <motion.div key={source.number} variants={fadeInUp}>
                      <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out h-full border border-border hover:border-primary/30 flex flex-col"> {/* Added flex */}
                           <CardContent className="p-4 flex-grow flex flex-col justify-between"> {/* Flex grow */}
                               <div> {/* Content wrapper */}
                                   <div className="flex justify-between items-start mb-2">
                                       <p className="text-xs font-semibold text-primary uppercase tracking-wider">{source.category || 'Research'}</p>
                                       <span className="text-xs text-muted-foreground">[{source.number}]</span>
                                   </div>
                                   <p className="text-sm font-medium text-foreground leading-snug mb-3">{source.title}</p>
                               </div>
                               <Button variant="outline" size="sm" asChild className="w-full mt-auto">
                                  <Link href={source.url} target="_blank" rel="noopener noreferrer" aria-label={`Open source ${source.number} in new tab`} className="flex items-center justify-center gap-2">
                                      View Source <ExternalLink className="h-4 w-4"/>
                                  </Link>
                               </Button>
                           </CardContent>
                      </Card>
                  </motion.div>
              ))}
               {/* Link to a potentially more comprehensive document */}
               <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2 lg:col-span-3 mt-6 max-w-xl mx-auto">
                  <Link href="https://docs.google.com/document/d/1W_awO-5eAYtuPzmlM-znISb6E5Ija0-wO74_d5ZCgc0/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="text-left shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 border border-border hover:border-primary/30 overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="flex-shrink-0">
                                <BookOpen className="h-10 w-10 text-primary" /> {/* Consistent icon */}
                            </div>
                            <div className="flex-grow">
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                    Explore Our Full Evidence Base
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">Access the comprehensive document</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {/* Simulate text lines */}
                            <div className="space-y-1.5">
                                <div className="h-2 bg-muted rounded-full w-full"></div>
                                <div className="h-2 bg-muted rounded-full w-11/12"></div>
                                <div className="h-2 bg-muted rounded-full w-4/5"></div>
                                <div className="h-2 bg-muted rounded-full w-10/12"></div>
                            </div>
                            <div className="mt-4 flex items-center justify-end text-primary text-sm font-medium group-hover:underline">
                                View Document <ExternalLink className="ml-1.5 h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                  </Link>
               </motion.div>
          </motion.div>
      </motion.section>

      {/* Disclaimer - Enhanced Styling */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-16 border-t pt-10 text-center bg-muted/20 p-8 rounded-lg" // Added background and padding
      >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
            <Info className="h-5 w-5 text-primary"/> Important Disclaimer
          </h3>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              The information presented throughout this website, particularly regarding the Phoenix therapy, is based on current scientific understanding and hypothetical therapeutic strategies. Phoenix is a conceptual therapeutic platform under <strong className="text-foreground">preclinical development</strong>. It is not an approved treatment and is not available for clinical use. Significant further research, development, validation, and regulatory approvals are required before any potential application in humans. All forward-looking statements are subject to risks and uncertainties.
          </p>
      </motion.section>
    </motion.div> // End of main container div
  );
}

