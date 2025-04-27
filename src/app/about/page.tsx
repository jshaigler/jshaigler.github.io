import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, FlaskConical, TrendingUp, CheckSquare } from 'lucide-react'; // Added CheckSquare for Rigorous R&D

export default function AboutUsPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
          About Phoenix Lifesciences
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Dedicated to translating cutting-edge longevity research into clinically available therapies.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg shadow-inner">
         <div className="md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
              <Target className="h-8 w-8 text-primary" /> Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Phoenix Lifesciences, our mission is to develop innovative solutions that combat age-related decline and promote healthier, longer lives. We are committed to pushing the boundaries of science to make meaningful impacts on human healthspan.
            </p>
             <p className="text-lg text-muted-foreground">
               We believe that aging doesn't have to be a period of inevitable decline. By targeting the fundamental biological processes of aging, we aim to empower individuals to live more vibrant lives for longer.
            </p>
         </div>
         <div className="md:w-1/2">
             <Image
                 src="https://picsum.photos/seed/mission/600/400" // Placeholder image
                 alt="Team discussing research"
                 width={600}
                 height={400}
                 className="rounded-lg shadow-lg object-cover w-full h-auto"
             />
         </div>
      </section>

      {/* Our Approach Section */}
        <section className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <FlaskConical className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Science-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Grounded in robust scientific understanding of the hallmarks of aging.
                    </p>
                </CardContent>
                </Card>
                <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                 <CardHeader>
                     <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <TrendingUp className="h-6 w-6 text-primary" />
                     </div>
                    <CardTitle className="text-xl">Innovative Technology</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground">
                        Leveraging next-generation mRNA technology for targeted and synergistic therapies.
                    </p>
                 </CardContent>
                </Card>
                 <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                 <CardHeader>
                     <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <CheckSquare className="h-6 w-6 text-primary" />
                     </div>
                    <CardTitle className="text-xl">Rigorous R&D</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground">
                        Committed to comprehensive testing, from in vitro studies to clinical trials.
                    </p>
                 </CardContent>
                </Card>
            </div>
        </section>


      {/* Team Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-primary" /> Our Founders
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Phoenix Lifesciences is led by a passionate team dedicated to advancing the field of longevity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Joshua Haigler Card */}
          <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-left flex flex-col md:flex-row items-start">
            <Image
              src="https://picsum.photos/seed/joshua/300/300" // Placeholder image
              alt="Joshua Haigler"
              width={200}
              height={200}
              className="w-full md:w-1/3 h-auto object-cover"
            />
            <CardContent className="p-6 flex-1">
              <h4 className="text-xl font-semibold text-foreground">Joshua Haigler</h4>
              <p className="text-md text-primary font-medium mb-3">CEO & Co-founder</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hello, everyone! I am a high school student (graduating spring 2026) from Marshville, North Carolina, although most of my schooling happens via dual enrollment at a local community college. I have been a part of several extracurricular groups for some time now, including student government, The Knowledge Society (TKS), and the Union County Junior EMS program. I have a love of medicine, synthetic biology, biomedical engineering, and computer science, especially at their intersections. I've built various projects in these fields, and I hope to someday make some of them good enough to turn into actual products or services. Beyond academic related activities I love to paint (although I haven't done too much of it lately), build Legos, and read across a variety of genres.
              </p>
            </CardContent>
          </Card>

          {/* Kiara Aguirre Card */}
          <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-left flex flex-col md:flex-row items-start">
            <Image
              src="https://picsum.photos/seed/kiara/300/300" // Placeholder image
              alt="Kiara Aguirre"
              width={200}
              height={200}
              className="w-full md:w-1/3 h-auto object-cover"
            />
            <CardContent className="p-6 flex-1">
              <h4 className="text-xl font-semibold text-foreground">Kiara Aguirre</h4>
              <p className="text-md text-primary font-medium mb-3">Head of Board & Co-founder</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ¡Hi! I’m Kiara Aguirre, a student aiming for a double major in Linguistics and CS. I am deeply passionate about harnessing technology to develop innovative, human-centered solutions, especially to enhance educational environments. My focus is on creating impactful projects that improve linguistics and literacy. Recently, I’ve been honored as a Rise for the World Global Winner, had an essay published by the Ministry of Education, and had a research paper featured in the Harvard International Review Magazine. I’m enthusiastic about connecting with like-minded individuals to collaborate on exciting projects and make a meaningful contribution to the educational tech industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

        {/* Path Forward Section */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold tracking-tight mb-4">The Path Forward</h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We are committed to a rigorous development pathway, including advanced in vitro testing, comprehensive animal studies, and carefully designed human clinical trials. Our goal is to bring safe and effective therapies from the laboratory to the living room, transforming the future of aging.
        </p>
      </section>
    </div>
  );
}
