
'use client'; // Required for Framer Motion

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, FlaskConical, BookOpen, Info, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeIn } from '@/lib/animations'; // Import animation variants

const sources = [
    { title: "Lin28 enhances tissue repair...", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3917449/", number: 1 },
    { title: "LIN28A enhances regenerative capacity...", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8901931/", number: 2 },
    { title: "Lin28a - boost your energy...", url: "https://www.embopress.org/doi/full/10.1002/embj.201387363", number: 3 },
    { title: "Lin28a rejuvenates muscle stem cells...", url: "https://www.biorxiv.org/content/10.1101/2021.10.14.462144v1.full.pdf", number: 4 },
    { title: "Wound healing, regeneration, and Lin28", url: "https://www.axopub.com/wp01/2013/11/14/wound-healing-regeneration-and-lin28/", number: 5 },
    { title: "Lin28A Accelerates Wound Healing...", url: "https://pharmaceuticalintelligence.com/2015/01/14/lin28a-accelerates-wound-healing-hair-regrowth-and-turns-back-the-aging-clock-a-little/", number: 6 },
    { title: "HSCI researchers regrow hair...", url: "https://www.hsci.harvard.edu/news/hsci-researchers-regrow-hair-cartilage-bone-soft-tissues", number: 7 },
    { title: "More on Lin28a and Enhanced Regeneration", url: "https://www.fightaging.org/archives/2013/11/more-on-lin28a-and-enhanced-regeneration/", number: 8 },
    { title: "Lin28 enhances tissue repair (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/24209617/", number: 9 },
];


export default function PrototypePage() {
  return (
    // Remove top-level motion props to let layout handle page transition
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Initial Section - Animates on load or when in view */}
      <motion.div
        initial="initial"
        animate="animate" // Animate this section immediately
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
          Phoenix Prototype & Research Basis
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Understanding the scientific foundation and current status of the Phoenix therapy concept.
        </motion.p>
      </motion.div>

      {/* Current Status Section - Animate on page load */}
        <motion.section
          initial="initial"
          animate="animate" // Change from whileInView to animate
          // Removed viewport prop as it's not needed for immediate animation
          variants={fadeIn}
          className="mb-20 p-8 bg-secondary/50 rounded-lg shadow-md"
        >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-8 flex items-center justify-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary"/> Current Stage: Preclinical Concept
            </motion.h2>
            <motion.div variants={staggerContainer} className="text-center text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                <motion.p variants={fadeInUp}>
                    The Phoenix therapy described on this website represents a <strong className="text-foreground">comprehensive therapeutic concept</strong> based on integrating cutting-edge research in mRNA technology, telomere biology, mitochondrial health, DNA repair, and epigenetic reprogramming.
                </motion.p>
                <motion.p variants={fadeInUp}>
                    Currently, Phoenix is in the <strong className="text-foreground">preclinical and conceptual development phase</strong>. While the individual components are backed by significant scientific evidence (see sources below), the integrated Phoenix platform requires extensive further research, development, and rigorous testing before it could potentially enter clinical trials.
                </motion.p>
                <motion.p variants={fadeInUp} className="font-semibold text-foreground">
                    Key activities in this phase include:
                </motion.p>
                <motion.ul variants={fadeInUp} className="list-disc list-inside text-left inline-block">
                    <li>Optimizing mRNA and miRNA sequences and formulations.</li>
                    <li>Refining the lipid nanoparticle (LNP) delivery system for targeted delivery.</li>
                    <li>Conducting advanced <em className="italic">in vitro</em> (cell-based) studies to validate synergistic effects.</li>
                    <li>Designing and executing comprehensive <em className="italic">in vivo</em> (animal model) studies.</li>
                    <li>Developing robust safety and efficacy protocols for future clinical trials.</li>
                </motion.ul>
                 <motion.p variants={fadeInUp} className="mt-6 flex items-center justify-center gap-2 text-base font-medium text-destructive bg-destructive/10 p-3 rounded-md border border-destructive/30">
                    <Info className="h-5 w-5" />
                    Phoenix is NOT currently available as a treatment.
                 </motion.p>
            </motion.div>
        </motion.section>


      {/* Research Basis Section - Animate when in view */}
        <motion.section
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
                The Phoenix concept is built upon a wealth of existing scientific literature. Below are some key publications and resources that inform the different pillars of the proposed therapy. This is not an exhaustive list, but represents the types of research underpinning our approach.
            </motion.p>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sources.map((source) => (
                    <motion.div key={source.number} variants={fadeInUp}>
                        <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out h-full"> {/* Added h-full */}
                             <CardContent className="p-4 flex items-start justify-between">
                                 <div className="flex-1 mr-4">
                                     <p className="text-sm font-medium text-foreground mb-1">Source [{source.number}]</p>
                                     <p className="text-xs text-muted-foreground">{source.title}</p>
                                 </div>
                                 <Button variant="outline" size="icon" asChild className="shrink-0 h-8 w-8">
                                    <Link href={source.url} target="_blank" rel="noopener noreferrer" aria-label={`Open source ${source.number} in new tab`}>
                                        <ExternalLink className="h-4 w-4"/>
                                    </Link>
                                 </Button>
                             </CardContent>
                        </Card>
                    </motion.div>
                ))}
                 {/* Link to a potentially more comprehensive document */}
                 <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2 lg:col-span-3">
                    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out bg-primary/5 border-primary/20">
                         <CardContent className="p-4 flex items-center justify-between">
                             <div>
                                 <p className="text-sm font-medium text-foreground mb-1">Full Evidence Base</p>
                                 <p className="text-xs text-muted-foreground">Access our comprehensive document detailing the scientific research supporting the Phoenix project.</p>
                             </div>
                             <Button variant="default" size="sm" asChild>
                                {/* Placeholder link - replace with actual link if available */}
                                <Link href="#" target="_blank" rel="noopener noreferrer">
                                    View Document <ExternalLink className="h-4 w-4 ml-2"/>
                                </Link>
                             </Button>
                         </CardContent>
                     </Card>
                 </motion.div>
            </motion.div>
        </motion.section>

      {/* Disclaimer - Animate when in view */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 border-t pt-8 text-center"
        >
            <h3 className="text-xl font-semibold text-foreground mb-3">Important Disclaimer</h3>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                The information presented throughout this website, particularly regarding the Phoenix therapy, is based on current scientific understanding and hypothetical therapeutic strategies. Phoenix is a conceptual therapeutic platform under preclinical development. It is not an approved treatment and is not available for clinical use. Significant further research, development, validation, and regulatory approvals are required before any potential application in humans.
            </p>
        </motion.section>
    </div>
  );
}
