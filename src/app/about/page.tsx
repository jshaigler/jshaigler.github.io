
'use client'; // Required for Framer Motion, useState, useEffect

import React, { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, useRef
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, FlaskConical, TrendingUp, CheckSquare, ExternalLink, BookText, HeartHandshake, Eye, Award, GraduationCap, Info, Activity, CalendarClock } from 'lucide-react'; // Added icons
import { Button } from '@/components/ui/button';
import { motion, useAnimation, AnimatePresence } from 'framer-motion'; // Import useAnimation and AnimatePresence
import { useInView } from 'react-intersection-observer'; // Import useInView
import { fadeInUp, staggerContainer, fadeIn, slideInLeft, slideInRight } from '@/lib/animations';
import { AnimatedStat } from '@/components/animated-stat'; // Corrected Import AnimatedStat


// Timeline Phases Data
const timelinePhases = [
  { name: 'Preclinical', description: 'In vitro & in vivo studies validating safety and efficacy.' },
  { name: 'Phase I', description: 'First-in-human trials assessing safety, dosage, and side effects.' },
  { name: 'Phase II', description: 'Evaluating effectiveness and further assessing safety in a larger group.' },
  { name: 'Phase III', description: 'Large-scale trials comparing the therapy to standard treatments.' },
  { name: 'Approval', description: 'Regulatory review and potential market authorization.' },
];


export default function AboutUsPage() {
    const controls = useAnimation(); // Controls for the progress bar animation
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false }); // triggerOnce false to allow re-animation
    const [activePhase, setActivePhase] = useState(-1); // Index of the active phase, start at -1
    const [isAnimating, setIsAnimating] = useState(false); // Flag to prevent multiple animation loops
    const isMountedRef = useRef(false); // Ref to track mount status

    useEffect(() => {
        isMountedRef.current = true; // Set mounted status
        // Optional: Initialize controls if needed, but keep animation logic commented out
        // controls.set({ width: '0%' });
        return () => {
            isMountedRef.current = false; // Clean up mounted status
             // controls?.stop(); // Stop any animations on unmount
        };
    }, [controls]); // Depend only on controls for initial setup if needed


    // --- ENTIRE TIMELINE ANIMATION LOGIC COMMENTED OUT ---
    /*
    useEffect(() => {
        let animationTimeoutId: NodeJS.Timeout | null = null;
        let isMounted = true; // Local flag to track mount status within this effect's closure

        const numPhases = timelinePhases.length;
        const segmentAnimationDuration = 0.8; // Duration to animate one segment
        const pauseDuration = 2000; // Pause duration at each phase (in ms)

        const runTimelineAnimation = async () => {
             if (!isMounted || !inView || isAnimating || !controls) return;
             console.log("Starting timeline animation loop...");
             setIsAnimating(true);

            try {
                // Loop indefinitely while mounted and in view
                while (isMounted && inView && controls) {
                    console.log("Top of loop, resetting...");
                    // --- Reset for loop ---
                    setActivePhase(-1);
                    controls.set({ width: '0%' }); // Immediate reset
                    await new Promise(resolve => { if (isMounted) animationTimeoutId = setTimeout(resolve, 300); });
                    if (!isMounted || !inView) { console.log("Breaking loop after reset delay"); break; }

                    // --- Animation Sequence ---
                    console.log("Setting active phase 0");
                    setActivePhase(0);
                    await new Promise(resolve => { if (isMounted) animationTimeoutId = setTimeout(resolve, pauseDuration); });
                    if (!isMounted || !inView) { console.log("Breaking loop after phase 0 pause"); break; }

                    for (let i = 1; i < numPhases; i++) {
                        const targetWidth = (i / (numPhases - 1)) * 100;
                        console.log(`Animating to phase ${i}, width: ${targetWidth}%`);

                        if (!isMounted || !inView || !controls) { console.log(`Breaking loop before animating to phase ${i}`); break; }

                        // Start the animation, checking mount status and controls readiness
                        await controls.start({
                           width: `${targetWidth}%`,
                           transition: { duration: segmentAnimationDuration, ease: 'easeInOut' }
                        });

                        if (!isMounted || !inView) { console.log(`Breaking loop after animating to phase ${i}`); break; }

                        console.log(`Setting active phase ${i}`);
                        setActivePhase(i);
                        await new Promise(resolve => { if (isMounted) animationTimeoutId = setTimeout(resolve, pauseDuration); });
                        if (!isMounted || !inView) { console.log(`Breaking loop after phase ${i} pause`); break; }
                    } // End for loop

                     if (!isMounted || !inView) { console.log("Breaking loop after main phases"); break; }

                     await new Promise(resolve => { if (isMounted) animationTimeoutId = setTimeout(resolve, 500); });
                     if (!isMounted || !inView) { console.log("Breaking loop after post-phase delay"); break; }

                    // Smoothly animate back to 0%
                    console.log("Resetting animation back to 0%");
                    setActivePhase(-1); // Hide description before animating back
                    if (!isMounted || !inView || !controls) { console.log("Breaking loop before reset animation"); break; }

                    // Start the reset animation, check mount status and controls readiness
                    await controls.start({
                       width: '0%',
                       transition: { duration: segmentAnimationDuration * 0.75, ease: 'easeInOut' } // Slightly faster reset
                    });


                    if (!isMounted || !inView) { console.log("Breaking loop after reset animation"); break; }

                    await new Promise(resolve => { if (isMounted) animationTimeoutId = setTimeout(resolve, 300); }); // Delay before next loop
                     if (!isMounted || !inView) { console.log("Breaking loop after final delay"); break; }

                } // End while loop
            } catch (error) {
                if (error instanceof Error && error.name === 'AnimationPlaybackError') {
                    console.log("Timeline animation stopped cleanly (PlaybackError).");
                } else if (error instanceof Error && error.message.includes('Promise was cancelled')) {
                     console.log("Timeline animation promise cancelled (likely unmount/stop).");
                } else {
                    console.error("Timeline animation error:", error);
                }
            } finally {
                console.log("Timeline animation finished or stopped.");
                setIsAnimating(false); // Mark as not running
                // Ensure final state is reset if component is still mounted
                if (isMounted && controls) {
                     try {
                         controls.stop(); // Stop any potential lingering animation
                         controls.set({ width: '0%' }); // Set width immediately
                     } catch (stopError) {
                         console.warn("Error stopping/setting controls in finally:", stopError);
                     }
                     setActivePhase(-1); // Ensure phase description is hidden
                }
            }
        };


        if (inView && !isAnimating && isMounted && controls) {
             // Small delay before starting animation to ensure component is fully ready
             console.log("In view, scheduling timeline animation start...");
             animationTimeoutId = setTimeout(() => {
                 if (isMounted && inView && !isAnimating && controls) {
                     runTimelineAnimation();
                 } else {
                      console.warn("Timeline animation start aborted: Component unmounted, not in view, already animating, or controls not ready.");
                 }
             }, 200);
        } else if (!inView && isMounted && controls) {
             // Stop and reset if out of view but still mounted
              console.log("Out of view, stopping and resetting timeline animation.");
             if (animationTimeoutId) clearTimeout(animationTimeoutId);
              try {
                  controls.stop();
                  controls.set({ width: '0%' });
              } catch (stopError) {
                  console.warn("Error stopping/setting controls on exit:", stopError);
              }
             setActivePhase(-1);
             setIsAnimating(false); // Allow restart if it comes back into view
        }

        // Cleanup function
        return () => {
             console.log("Cleaning up timeline animation effect.");
             isMounted = false; // Set local mount flag to false
            if (animationTimeoutId) clearTimeout(animationTimeoutId);
            if (controls) {
                try {
                    controls.stop(); // Stop animation on unmount
                } catch (stopError) {
                     console.warn("Error stopping controls during cleanup:", stopError);
                }
            }
             setIsAnimating(false); // Reset animation flag
        };
     }, [inView, controls, isAnimating]); // Dependencies: run effect when these change
     */


  return (
    // Container div for page content - Removed top-level motion wrapper
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
        animate="animate" // Animate immediately on page load
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
          animate="animate" // Animate immediately as it's near the top
          variants={staggerContainer}
          className="mb-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-accent/5 to-primary/5 p-8 rounded-lg shadow-inner overflow-hidden border border-border"
        >
          {/* Image */}
          <motion.div variants={fadeIn} className="md:w-1/2">
            <Image
              src="/ChatGPT Image May 2, 2025, 02_42_15 PM.png"
              alt="Scientific illustration representing advanced cellular research" // Updated Alt Text
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto saturate-110 contrast-110 hover:scale-105 transition-transform duration-300 ease-in-out"
              data-ai-hint="science research laboratory" // Updated AI Hint
              priority // Load this image sooner
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
          whileInView="animate" // Keep whileInView for sections further down
          viewport={{ once: true, amount: 0.1 }}
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
                        className="w-full sm:w-1/3 h-auto object-cover flex-shrink-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none sm:rounded-br-lg" // Adjust rounding for bottom right
                        unoptimized // If external URL has issues with Next.js optimization
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
                         className="w-full sm:w-1/3 h-auto object-cover flex-shrink-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none sm:rounded-br-lg" // Adjust rounding for bottom right
                         unoptimized // If external URL has issues with Next.js optimization
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

      {/* Article Section - Replaced Button with Article Card */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
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
                             {/* Optional: Add a generic article image */}
                             {/* <Image src="/placeholder-article-image.png" alt="Article Preview" width={600} height={150} className="w-full h-24 object-cover opacity-80 group-hover:opacity-100 transition-opacity"/> */}
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
                                 {/* Simulate text lines */}
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

      {/* Path Forward Section - Enhanced Timeline */}
        <motion.section
            ref={ref} // Attach ref to trigger animation when this section is in view
            initial="initial"
            animate={inView ? "animate" : "initial"} // Control animation based on inView state
            variants={fadeInUp} // Single animation for the whole section container
            className="text-center mt-16"
        >
            <h2 className="text-3xl font-bold tracking-tight mb-4">The Path Forward</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-10">
                 We are committed to a rigorous development pathway, including advanced <em className="italic">in vitro</em> testing, comprehensive animal studies (<AnimatedStat value={0} suffix="+ Studies Completed" duration={2.5} />), and meticulously designed human clinical trials (<AnimatedStat value={0} suffix="+ Trials Planned" duration={3} />). Our goal is to translate promising science into safe and effective therapies, bringing the future of longevity from the laboratory to the living room.
            </p>
            {/* Animated Research Timeline */}
            <div className="mt-10 p-6 bg-muted/30 rounded-lg max-w-3xl mx-auto border border-dashed border-primary/20 overflow-hidden">
                 <h4 className="font-semibold text-center text-foreground mb-6">Research & Clinical Trial Timeline</h4>
                 {/* Phase Labels */}
                <div className="relative flex justify-between items-center text-xs text-muted-foreground mb-2 px-2">
                     {timelinePhases.map((phase, index) => (
                         <span key={phase.name} className={`relative z-10 transition-colors duration-300 ${index <= activePhase ? 'text-primary font-medium' : ''}`}>
                             {phase.name}
                             {/* Small indicator dot */}
                             <span className={`absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 h-2 w-2 rounded-full border border-primary transition-all duration-300 ${index <= activePhase ? 'bg-primary scale-125' : 'bg-muted'}`}></span>
                         </span>
                     ))}
                 </div>
                 {/* Progress Bar Track */}
                 <div className="relative w-full h-2 bg-muted rounded-full mt-1 overflow-hidden">
                      {/* Animated Progress Bar */}
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={controls} // Controlled by useAnimation and useInView
                        className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full"
                      />
                 </div>
                 {/* Phase Description - Shows description of the currently active phase */}
                 <div className="mt-6 text-center h-10"> {/* Fixed height to prevent layout shift */}
                    <AnimatePresence mode="wait">
                        {activePhase >= 0 && activePhase < timelinePhases.length && ( // Check bounds
                          <motion.p
                              key={activePhase} // Change key to trigger animation
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="text-sm text-foreground"
                          >
                              <strong>{timelinePhases[activePhase]?.name}:</strong> {timelinePhases[activePhase]?.description}
                          </motion.p>
                        )}
                    </AnimatePresence>
                 </div>
            </div>
        </motion.section>
    </motion.div>
  );
}


