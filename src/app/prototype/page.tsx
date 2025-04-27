import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, FlaskConical, BookOpen, Info, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
    // Add more sources if available, potentially linking to a full document
];


export default function PrototypePage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
          Phoenix Prototype & Research Basis
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Understanding the scientific foundation and current status of the Phoenix therapy concept.
        </p>
      </div>

      {/* Current Status Section */}
        <section className="mb-20 p-8 bg-secondary/50 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8 flex items-center justify-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary"/> Current Stage: Preclinical Concept
            </h2>
            <div className="text-center text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                <p>
                    The Phoenix therapy described on this website represents a <strong className="text-foreground">comprehensive therapeutic concept</strong> based on integrating cutting-edge research in mRNA technology, telomere biology, mitochondrial health, DNA repair, and epigenetic reprogramming.
                </p>
                <p>
                    Currently, Phoenix is in the <strong className="text-foreground">preclinical and conceptual development phase</strong>. While the individual components are backed by significant scientific evidence (see sources below), the integrated Phoenix platform requires extensive further research, development, and rigorous testing before it could potentially enter clinical trials.
                </p>
                <p className="font-semibold text-foreground">
                    Key activities in this phase include:
                </p>
                <ul className="list-disc list-inside text-left inline-block">
                    <li>Optimizing mRNA and miRNA sequences and formulations.</li>
                    <li>Refining the lipid nanoparticle (LNP) delivery system for targeted delivery.</li>
                    <li>Conducting advanced <em className="italic">in vitro</em> (cell-based) studies to validate synergistic effects.</li>
                    <li>Designing and executing comprehensive <em className="italic">in vivo</em> (animal model) studies.</li>
                    <li>Developing robust safety and efficacy protocols for future clinical trials.</li>
                </ul>
                 <p className="mt-6 flex items-center justify-center gap-2 text-base font-medium text-destructive bg-destructive/10 p-3 rounded-md border border-destructive/30">
                    <Info className="h-5 w-5" />
                    Phoenix is NOT currently available as a treatment.
                 </p>
            </div>
        </section>


      {/* Research Basis Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 flex items-center justify-center gap-3">
               <BookOpen className="h-8 w-8 text-primary"/> Scientific Foundation & Sources
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-10 max-w-4xl mx-auto">
                The Phoenix concept is built upon a wealth of existing scientific literature. Below are some key publications and resources that inform the different pillars of the proposed therapy. This is not an exhaustive list, but represents the types of research underpinning our approach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sources.map((source) => (
                    <Card key={source.number} className="shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
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
                ))}
                 {/* Link to a potentially more comprehensive document */}
                 <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out col-span-1 md:col-span-2 lg:col-span-3 bg-primary/5 border-primary/20">
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
            </div>
        </section>

      {/* Disclaimer */}
        <section className="mt-16 border-t pt-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">Important Disclaimer</h3>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                The information presented throughout this website, particularly regarding the Phoenix therapy, is based on current scientific understanding and hypothetical therapeutic strategies. Phoenix is a conceptual therapeutic platform under preclinical development. It is not an approved treatment and is not available for clinical use. Significant further research, development, validation, and regulatory approvals are required before any potential application in humans.
            </p>
        </section>
    </div>
  );
}
