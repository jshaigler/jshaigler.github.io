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


      {/* Team Section - Placeholder */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Meet the Team (Placeholder)</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Phoenix Lifesciences is led by a team of experienced scientists, researchers, and biotech professionals dedicated to advancing the field of longevity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Placeholder team members */}
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <Image
                src={`https://picsum.photos/seed/team${i}/300/300`}
                alt={`Team Member ${i}`}
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold text-foreground">Dr. Jane Doe {i}</h4>
                <p className="text-sm text-primary">Role/Title</p>
                <p className="text-xs text-muted-foreground mt-1">Brief bio or expertise highlight placeholder.</p>
              </CardContent>
            </Card>
          ))}
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
