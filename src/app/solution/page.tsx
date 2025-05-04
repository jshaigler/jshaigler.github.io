
'use client'; // Required for Framer Motion and client components like Accordion

import React from 'react'; // Import React
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Dna, Zap, Settings, ShieldCheck, Package, Activity, CalendarClock, Info } from 'lucide-react'; // Added Activity, CalendarClock, Info
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeIn, slideInLeft, slideInRight } from '@/lib/animations';
import { Button } from '@/components/ui/button'; // Import Button
import Link from 'next/link'; // Import Link
// Corrected import path for placeholder
import { InteractiveVisualPlaceholder } from '@/components/interactive-placeholder';


const pillars = [
  {
    title: 'mRNA-Delivered TERT',
    description: 'Rebuilding Chromosome Shields: Utilizes mRNA-delivered TERT to counteract telomere attrition by temporarily increasing telomerase activity, allowing telomere extension without the risks of permanent activation.',
    icon: Dna,
    details: 'Specialized nanoparticles deliver modified TERT mRNA, boosting telomerase transiently. Research shows this increases cell division capacity and telomere length safely.',
    stats: 'Potential to restore telomere length, reversing cellular aging clock.' // Example stat
  },
  {
    title: 'TFAM mRNA',
    description: 'Revitalizing Cellular Power Plants: Delivers mRNA encoding TFAM (Mitochondrial Transcription Factor A) to restore mitochondrial function, boost cellular energy, and combat age-related energy deficits.',
    icon: Zap,
    details: 'Studies show increasing TFAM improves cognitive function, reduces oxidative stress, and enhances mitochondrial respiration, supporting overall rejuvenation.',
     stats: 'Shown to improve mitochondrial respiration by up to X% in preclinical models.' // Example stat placeholder
  },
  {
    title: 'miRNA-Based MDM2 Modulation',
    description: 'Fine-Tuning the Genome Guardian: Uses microRNA mimics (miRNAs) to modulate MDM2 expression, enhancing p53 activity for improved DNA damage response without causing excessive cellular atrophy.',
    icon: Settings,
    details: 'This targeted regulation maintains genomic integrity while mitigating potential side effects associated with overly active p53 signaling.',
    stats: 'Enhances DNA repair pathways while maintaining cellular health.' // Example stat
  },
  {
    title: 'Partial Epigenetic Reprogramming',
    description: 'Resetting the Cellular Clock: Incorporates mRNA encoding three specific Yamanaka factors (Oct4, Sox2, and Klf4 - OSK) to reverse age-related epigenetic changes and restore youthful gene expression patterns without full dedifferentiation.', // Updated text
    icon: CheckCircle, // Changed icon for variety
    details: 'Studies in mice demonstrate lifespan extension, improved health, and enhanced tissue regeneration through this partial reprogramming approach using these three factors.', // Updated text
    stats: 'Preclinical studies show potential lifespan extension and tissue regeneration.' // Example stat
  }
];

const technicalMechanisms = [
    {
      title: "TERT mRNA Mechanism",
      content: "TERT forms active telomerase complexes with TERC (the RNA component of telomerase), which then recognizes the 3' end of telomeres, uses its reverse transcriptase activity to add TTAGGG repeats, and iteratively adds repeats before dissociating."
    },
    {
      title: "TFAM Molecular Functions",
      content: "TFAM enhances mitochondrial function by binding and wrapping mtDNA for protection, activating mitochondrial gene transcription, facilitating nucleoid formation and mtDNA replication, and participating in mtDNA stress responses."
    },
    {
      title: "miRNA Regulation of MDM2",
      content: "Selected miRNAs target MDM2 by directly binding to complementary sequences in its mRNA, recruiting the RISC complex for degradation or translation repression, and creating feedback loops to fine-tune p53 levels."
    },
    {
      title: "OSK-Mediated Epigenetic Reprogramming",
      content: "Oct4 and Sox2 co-bind enhancers of pluripotency genes, Klf4 facilitates chromatin opening, and together these three factors induce a partial reprogramming state that reverses age-associated epigenetic marks without complete dedifferentiation." // Updated text
    }
];

export default function SolutionPage() {
  return (
    // Wrap entire content in motion.div for consistent page transitions
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
        exit: { opacity: 0, y: -15, transition: { duration: 0.25, ease: 'easeInOut' } },
      }}
      className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Initial Section */}
      <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate" // Animate immediately on load
          className="text-center mb-16"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
          Our Solution: Phoenix
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
           A Multi-Pronged Therapeutic Strategy Targeting <strong className="text-foreground">Four Key Hallmarks</strong> of Aging with Synergistic mRNA Technologies.
        </motion.p>
      </motion.div>

      {/* Four Pillars Section - Enhanced Cards */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-20"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-12">The Four Pillars of Phoenix</motion.h2>
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-full group transform hover:-translate-y-1"> {/* Added group and transform */}
                <CardHeader className="flex flex-row items-start gap-4 pb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shrink-0 border-2 border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <pillar.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                  </div>
                  <div>
                      <CardTitle className="text-xl mb-1">{pillar.title}</CardTitle>
                      <CardDescription>{pillar.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex-grow flex flex-col justify-between"> {/* Flex grow and space between */}
                     <div> {/* Wrapper for main details */}
                        <p className="text-sm text-muted-foreground">{pillar.details}</p>
                     </div>
                     <div className="mt-4 pt-3 border-t border-dashed border-muted"> {/* Added border */}
                        <p className="text-xs font-semibold text-primary flex items-center gap-1">
                           <Activity size={14} /> {/* Example Icon */}
                           <span>{pillar.stats}</span>
                        </p>
                     </div>
                </CardContent>
                 {/* Placeholder for interactive element trigger */}
                 <div className="p-4 pt-0 text-right">
                      <Button variant="link" size="sm" className="text-xs">Learn More</Button>
                 </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
         {/* --- Screenshots Section --- */}
         <motion.div
           variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
           className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
         >
             <motion.div variants={fadeIn}> {/* Animate individual image */}
                 <Image
                   src="/TERT.png" // Corrected path
                   alt="TERT mRNA Structure Visualization" // Descriptive alt text
                   width={600}
                   height={400}
                   className="rounded-lg shadow-md object-cover w-full h-auto border border-border"
                   data-ai-hint="molecular diagram science" // AI hint
                 />
                 <p className="text-center text-xs text-muted-foreground mt-2">TERT mRNA Structure Visualization</p>
             </motion.div>
             <motion.div variants={fadeIn} transition={{delay: 0.1}}> {/* Animate individual image with slight delay */}
                 <Image
                    src="/TFAM.png" // Corrected path
                    alt="TFAM mRNA Structure Visualization" // Descriptive alt text
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md object-cover w-full h-auto border border-border"
                    data-ai-hint="scientific illustration molecule" // AI hint
                  />
                   <p className="text-center text-xs text-muted-foreground mt-2">TFAM mRNA Structure Visualization</p>
             </motion.div>
         </motion.div>
          {/* --- End of screenshots section --- */}
      </motion.section>


      {/* Synergistic Effects - Enhanced */}
      <motion.section
        variants={staggerContainer} // Use stagger for children
        initial="initial" // Add initial state
        whileInView="animate" // Keep whileInView for scroll trigger
        viewport={{ once: true, amount: 0.1 }} // Trigger earlier
        className="mb-20 p-8 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg shadow-inner border border-primary/10" // Subtle gradient and border
      >
         <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-8">Synergistic Effects: A Unified Approach</motion.h2>
         <motion.p variants={fadeInUp} className="text-center text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            The true power of Phoenix lies in the synergistic interaction of its <strong className="text-foreground">four components</strong>, creating a comprehensive approach that addresses the multifaceted nature of aging more effectively than isolated treatments. Each pillar supports and enhances the others.
         </motion.p>
         <motion.ul variants={staggerContainer} className="space-y-4 list-none p-0 max-w-3xl mx-auto">
            {[
              { title: "Enhanced Replicative Capacity:", text: "TERT increases cellular lifespan, supported by the enhanced energy from TFAM-boosted mitochondria." },
              { title: "Powered DNA Repair:", text: "Improved mitochondrial function provides the necessary energy for efficient DNA repair processes enhanced by p53-MDM2 modulation." },
              { title: "Amplified Rejuvenation:", text: "Epigenetic reprogramming creates a more youthful cellular environment, amplifying the benefits of other interventions." },
              { title: "Integrated Safety:", text: "The fine-tuned p53 pathway provides a crucial safety check against potential risks associated with telomerase activation." },
            ].map((item, index) => (
              <motion.li key={index} variants={fadeInUp} className="flex items-start p-3 bg-background/50 rounded-md shadow-sm hover:bg-background transition-colors">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong className="font-semibold text-foreground">{item.title}</strong> {item.text}</span>
              </motion.li>
            ))}
         </motion.ul>
      </motion.section>

       {/* Delivery, Safety, and Treatment Schedule Section - Enhanced */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 items-start" // Changed to grid-cols-3
        >
             {/* Precision Delivery */}
             <motion.div variants={slideInLeft} className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/30 transition-colors">
                <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                   <Package className="h-6 w-6 text-primary" /> Precision Delivery
                </h3>
                <p className="text-muted-foreground mb-4">
                    Phoenix employs state-of-the-art functionalized lipid nanoparticles (LNPs) designed to selectively deliver the therapeutic payload (mRNAs and miRNAs) to target tissues.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-sm"> {/* Adjusted text size */}
                    <li>Concentrates therapy where needed.</li>
                    <li>Minimizes off-target effects.</li>
                    <li>Enhances overall safety profile.</li>
                </ul>
             </motion.div>

              {/* Genomic Screening */}
              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/30 transition-colors"> {/* Centered item */}
                 <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-primary" /> Genomic Screening
                 </h3>
                 <p className="text-muted-foreground mb-4">
                    Safety is paramount. A rigorous pre-screening protocol checks for mutations in the <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">TP53</code> gene (encoding p53 tumor suppressor).
                 </p>
                 <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-sm"> {/* Adjusted text size */}
                     <li>Identifies individuals with higher risk.</li>
                     <li>Allows exclusion or protocol modification.</li>
                     <li>Adds personalized safety layer.</li>
                 </ul>
              </motion.div>

              {/* Proposed Schedule */}
              <motion.div variants={slideInRight} className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/30 transition-colors"> {/* New item */}
                 <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                    <CalendarClock className="h-6 w-6 text-primary" /> Proposed Schedule
                 </h3>
                 <p className="text-muted-foreground mb-4">
                    The theoretical treatment regimen involves a simple administration schedule, aiming for patient convenience and consistent therapeutic levels.
                 </p>
                 <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-sm"> {/* Adjusted text size */}
                     <li><strong className="text-foreground">Once-monthly injection</strong> (every 30 days).</li>
                     <li>Designed for ease of integration into lifestyle.</li>
                     <li>Further optimization through clinical trials.</li>
                 </ul>
                  <p className="mt-3 text-xs text-muted-foreground italic flex items-center gap-1">
                     <Info className="h-3 w-3 shrink-0" />
                     Theoretical schedule, subject to clinical validation.
                  </p>
              </motion.div>
        </motion.section>


      {/* Technical Appendix Section */}
      <motion.section
        variants={fadeInUp} // Single animation for the whole section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-16" // Added margin bottom
      >
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Technical Appendix: Molecular Mechanisms</h2>
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto bg-card p-4 rounded-lg shadow-md border border-border">
           {technicalMechanisms.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index} className="border-b last:border-b-0">
                <AccordionTrigger className="text-lg hover:no-underline hover:text-primary transition-colors py-4">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-4 pr-6"> {/* Added padding right */}
                    {item.content}
                </AccordionContent>
            </AccordionItem>
           ))}
        </Accordion>
      </motion.section>

       {/* Disclaimer */}
      <motion.p
       variants={fadeInUp} // Simple fade in for disclaimer
       initial="initial"
       whileInView="animate" // Make it appear when scrolled to
       viewport={{ once: true }} // Animate once
       className="mt-20 text-sm text-center text-muted-foreground italic">
          Disclaimer: This information is based on current scientific research and hypothetical therapeutic approaches. The described treatment (Phoenix) is not currently available and requires extensive additional research and regulatory approval before potential clinical application.
      </motion.p>
    </motion.div> // End of main container div
  );
}

