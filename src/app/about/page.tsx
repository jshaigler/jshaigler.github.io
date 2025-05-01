
'use client'; // Required for Framer Motion

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, FlaskConical, TrendingUp, CheckSquare, ExternalLink, BookText, HeartHandshake, Eye, Award, BrainCircuit, GraduationCap } from 'lucide-react'; // Added Award, BrainCircuit, GraduationCap
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeIn, slideInLeft, slideInRight } from '@/lib/animations'; // Import animation variants

// Placeholder for Advisory Board Member
const AdvisoryMemberCard = ({ name, title, affiliation, imageUrl }: { name: string, title: string, affiliation: string, imageUrl?: string }) => (
    <motion.div variants={fadeInUp}>
        <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 h-full">
            <CardHeader>
                {imageUrl ? (
                     <Image
                        src={imageUrl}
                        alt={name}
                        width={80}
                        height={80}
                        className="mx-auto rounded-full mb-4 border-2 border-primary/30"
                        data-ai-hint="scientist headshot"
                    />
                ) : (
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4 border-2 border-border">
                        <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                )}
                <CardTitle className="text-xl">{name}</CardTitle>
                <p className="text-sm text-primary font-medium">{title}</p>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-muted-foreground">
                    {affiliation}
                </p>
            </CardContent>
        </Card>
    </motion.div>
);


export default function AboutUsPage() {
  return (
    // Layout handles page transition
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Initial Section */}
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
          Dedicated to translating cutting-edge longevity research into clinically available therapies, extending healthspan and enriching lives.
        </motion.p>
      </motion.div>

      {/* Mission & Vision Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="mb-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-accent/5 to-primary/5 p-8 rounded-lg shadow-inner overflow-hidden border border-border"
        >
          <motion.div variants={fadeIn} className="md:w-1/2">
            {/* Re-use the vision image or use a different one */}
            <Image
              src="/ChatGPT Image Apr 28, 2025, 04_06_08 PM.png" // Using the same vision image
              alt="Illustration representing vitality and extended healthspan"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto saturate-110 contrast-110 hover:scale-105 transition-transform duration-300 ease-in-out"
              data-ai-hint="health vitality future"
            />
          </motion.div>
          <motion.div variants={staggerContainer} className="md:w-1/2">
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
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
          variants={staggerContainer}
          className="mb-20"
        >
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
                            <Card className="text-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 h-full group"> {/* Added group, h-full */}
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

       {/* Scientific Advisory Board Placeholder Section */}
       <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mb-20 bg-muted/40 py-16 rounded-lg"
       >
           <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-center mb-12 flex items-center justify-center gap-3">
               <BrainCircuit className="h-8 w-8 text-primary" /> Scientific Advisory Board
           </motion.h2>
           <motion.p variants={fadeInUp} className="text-center text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
                Guided by leading experts in aging research, genetics, and mRNA technology. (Placeholder Section)
            </motion.p>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                 {/* Replace with actual advisors */}
                 <AdvisoryMemberCard name="Dr. Evelyn Reed" title="Gerontology Expert" affiliation="Leading University" />
                 <AdvisoryMemberCard name="Prof. Kenji Tanaka" title="mRNA Specialist" affiliation="Research Institute" />
                 <AdvisoryMemberCard name="Dr. Anya Sharma" title="Bioinformatics Lead" affiliation="Biotech Firm" />
            </motion.div>
        </motion.section>


      {/* Team Section - Enhanced Layout */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
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
              variants={staggerContainer} // Stagger the founder cards
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch" // Added items-stretch
            >
              {/* Joshua Haigler Card */}
              <motion.div variants={slideInLeft} className="flex">
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-left flex flex-col w-full"> {/* Added w-full */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/D4D03AQF0JOckp1538w/profile-displayphoto-shrink_400_400/B4DZSfuvphHYAg-/0/1737846632852?e=1751500800&v=beta&t=Q-ZIrep3uIUXNaGshAdBVdL3JVOZQhylITwh7Y83gUM"
                        alt="Joshua Haigler"
                        width={200}
                        height={200}
                        className="w-full sm:w-1/3 h-auto object-cover flex-shrink-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" // Adjust rounding
                      />
                      <CardContent className="p-6 flex-1">
                        <h4 className="text-xl font-semibold text-foreground">Joshua Haigler</h4>
                        <p className="text-md text-primary font-medium mb-3">CEO & Co-founder</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                           Driven by a passion for medicine and synthetic biology, Joshua translates cutting-edge research into practical longevity solutions, guiding the scientific vision of Phoenix Lifesciences.
                        </p>
                         {/* Placeholder for key skill/focus */}
                         <div className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
                            <FlaskConical size={14} className="text-primary"/> Focus: Scientific Innovation & Product Development
                         </div>
                      </CardContent>
                  </div>
                </Card>
              </motion.div>

              {/* Kiara Aguirre Card */}
              <motion.div variants={slideInRight} className="flex">
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-left flex flex-col w-full"> {/* Added w-full */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                       <Image
                        src="https://media.licdn.com/dms/image/v2/D4E03AQGq8oxYCR80YQ/profile-displayphoto-shrink_400_400/B4EZRmHnWNG0Ag-/0/1736880061392?e=1751500800&v=beta&t=dEt-AuZp6pWxWU1o7bh67JHAFzOJTuWF7s7e2b59XBc"
                        alt="Kiara Aguirre"
                        width={200}
                        height={200}
                         className="w-full sm:w-1/3 h-auto object-cover flex-shrink-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" // Adjust rounding
                      />
                      <CardContent className="p-6 flex-1">
                        <h4 className="text-xl font-semibold text-foreground">Kiara Aguirre</h4>
                        <p className="text-md text-primary font-medium mb-3">Head of Board & Co-founder</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                           Leveraging expertise in linguistics and CS, Kiara ensures our solutions are human-centered, driving strategic vision and global impact for Phoenix Lifesciences.
                        </p>
                         {/* Placeholder for key skill/focus */}
                        <div className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
                            <Award size={14} className="text-primary"/> Focus: Strategic Growth & Human-Centered Design
                         </div>
                      </CardContent>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
        </motion.div>
      </motion.section>

      {/* Article Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
          variants={fadeIn}
          className="my-20 text-center bg-secondary/50 p-8 rounded-lg shadow-md border border-border"
        >
             <motion.div variants={staggerContainer}>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
                    <BookText className="h-8 w-8 text-primary" /> Read Our Latest Article
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                    Dive deeper into our vision and the science behind Phoenix Lifesciences. Explore our recent publication on Medium for more insights into our therapeutic approach.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-0.5">
                      <Link href="https://medium.com/p/a5f11e470707" target="_blank" rel="noopener noreferrer">
                          Read on Medium <ExternalLink className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
                </motion.div>
             </motion.div>
        </motion.section>

      {/* Path Forward Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }} // Trigger earlier
        variants={fadeInUp} // Single animation for the whole section
        className="text-center mt-16"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4">The Path Forward</h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We are committed to a rigorous development pathway, including advanced <em className="italic">in vitro</em> testing, comprehensive animal studies, and meticulously designed human clinical trials. Our goal is to translate promising science into safe and effective therapies, bringing the future of longevity from the laboratory to the living room.
        </p>
         {/* Placeholder for Research Timeline */}
         <div className="mt-10 p-6 bg-muted/30 rounded-lg max-w-2xl mx-auto border border-dashed border-primary/20">
             <h4 className="font-semibold text-center text-muted-foreground">Research & Clinical Trial Timeline (Placeholder)</h4>
             {/* Add a simple visual or steps here */}
             <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground">
                 <span>Preclinical</span>
                 <span>Phase I</span>
                 <span>Phase II</span>
                 <span>Phase III</span>
                 <span>Approval</span>
             </div>
             <div className="w-full h-2 bg-muted rounded-full mt-1 overflow-hidden">
                 <div className="h-full w-1/4 bg-primary rounded-full"></div> {/* Example progress */}
             </div>
         </div>
      </motion.section>
    </div>
  );
}
