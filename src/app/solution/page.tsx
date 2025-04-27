import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Dna, Zap, Settings, ShieldCheck, Package } from 'lucide-react';
import Image from 'next/image';

const pillars = [
  {
    title: 'mRNA-Delivered TERT',
    description: 'Rebuilding Chromosome Shields: Utilizes mRNA-delivered TERT to counteract telomere attrition by temporarily increasing telomerase activity, allowing telomere extension without the risks of permanent activation.',
    icon: Dna,
    details: 'Specialized nanoparticles deliver modified TERT mRNA, boosting telomerase transiently. Research shows this increases cell division capacity and telomere length safely.'
  },
  {
    title: 'TFAM mRNA',
    description: 'Revitalizing Cellular Power Plants: Delivers mRNA encoding TFAM (Mitochondrial Transcription Factor A) to restore mitochondrial function, boost cellular energy, and combat age-related energy deficits.',
    icon: Zap,
    details: 'Studies show increasing TFAM improves cognitive function, reduces oxidative stress, and enhances mitochondrial respiration, supporting overall rejuvenation.'
  },
  {
    title: 'miRNA-Based MDM2 Modulation',
    description: 'Fine-Tuning the Genome Guardian: Uses microRNA mimics (miRNAs) to modulate MDM2 expression, enhancing p53 activity for improved DNA damage response without causing excessive cellular atrophy.',
    icon: Settings,
    details: 'This targeted regulation maintains genomic integrity while mitigating potential side effects associated with overly active p53 signaling.'
  },
  {
    title: 'Partial Epigenetic Reprogramming',
    description: 'Resetting the Cellular Clock: Incorporates mRNA encoding Oct4, Sox2, and Klf4 (OSK factors) to reverse age-related epigenetic changes and restore youthful gene expression patterns without full dedifferentiation.',
    icon: CheckCircle, // Using CheckCircle as a proxy for reset/rejuvenation
    details: 'Studies in mice demonstrate lifespan extension, improved health, and enhanced tissue regeneration through this partial reprogramming approach.'
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
      content: "Oct4 and Sox2 co-bind enhancers of pluripotency genes, Klf4 facilitates chromatin opening, and together they induce a partial reprogramming state that reverses age-associated epigenetic marks without complete dedifferentiation."
    }
];


export default function SolutionPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
          Our Solution: Phoenix
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          A Multi-Pronged Therapeutic Strategy Targeting the Root Causes of Aging.
        </p>
      </div>

      {/* Four Pillars Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">The Four Pillars of Phoenix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader className="flex flex-row items-start gap-4 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    <pillar.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                    <CardTitle className="text-xl mb-1">{pillar.title}</CardTitle>
                    <CardDescription>{pillar.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground">{pillar.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Synergistic Effects */}
      <section className="mb-20 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg shadow-inner">
         <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Synergistic Effects: A Unified Approach</h2>
         <p className="text-center text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            The true power of Phoenix lies in the synergistic interaction of its components, creating a comprehensive approach that addresses the multifaceted nature of aging more effectively than isolated treatments.
         </p>
         <ul className="space-y-4 list-none p-0 max-w-3xl mx-auto">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
              <span><strong className="font-semibold text-foreground">Enhanced Replicative Capacity:</strong> TERT increases cellular lifespan, supported by the enhanced energy from TFAM-boosted mitochondria.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
              <span><strong className="font-semibold text-foreground">Powered DNA Repair:</strong> Improved mitochondrial function provides the necessary energy for efficient DNA repair processes enhanced by p53-MDM2 modulation.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
              <span><strong className="font-semibold text-foreground">Amplified Rejuvenation:</strong> Epigenetic reprogramming creates a more youthful cellular environment, amplifying the benefits of other interventions.</span>
            </li>
             <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
              <span><strong className="font-semibold text-foreground">Integrated Safety:</strong> The fine-tuned p53 pathway provides a crucial safety check against potential risks associated with telomerase activation.</span>
            </li>
         </ul>
      </section>

       {/* Delivery and Safety */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
             <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                   <Package className="h-6 w-6 text-primary" /> Precision Delivery System
                </h3>
                <p className="text-muted-foreground mb-4">
                    Phoenix employs a state-of-the-art targeted delivery system using functionalized lipid nanoparticles (LNPs). These LNPs are meticulously designed to selectively deliver the therapeutic payload (mRNAs and miRNAs) to specific tissues and cell types.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                    <li>Maximizes efficacy by concentrating the therapy where it's needed most.</li>
                    <li>Minimizes potential off-target effects and systemic side effects.</li>
                    <li>Enhances the overall safety profile of the treatment.</li>
                </ul>
             </div>
              <div>
                 <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-primary" /> Safety-First Genomic Screening
                 </h3>
                 <p className="text-muted-foreground mb-4">
                    Patient safety is paramount. Phoenix incorporates a rigorous pre-screening protocol specifically looking for mutations in the <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">TP53</code> gene, which encodes the critical p53 tumor suppressor protein.
                 </p>
                 <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                     <li>Identifies individuals who might be at higher risk due to compromised p53 function.</li>
                     <li>Allows for exclusion or modification of treatment protocols for these patients.</li>
                     <li>Adds an essential layer of personalized safety to mitigate potential oncogenic risks.</li>
                 </ul>
              </div>
        </section>


      {/* Technical Appendix Section */}
      <section>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Technical Appendix: Molecular Mechanisms</h2>
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
           {technicalMechanisms.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-lg hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    {item.content}
                </AccordionContent>
            </AccordionItem>
           ))}
        </Accordion>
      </section>

        <p className="mt-20 text-sm text-center text-muted-foreground italic">
            Disclaimer: This information is based on current scientific research and hypothetical therapeutic approaches. The described treatment (Phoenix) is not currently available and requires extensive additional research and regulatory approval before potential clinical application.
        </p>
    </div>
  );
}
