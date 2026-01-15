import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/elderly_person_with_grandkids_in_living_room.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary w-fit">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Compassionate and Completely FREE Service
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-primary">
            Finding the Perfect Senior Living Home for Your Loved One
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Navigating senior care options can be overwhelming. I provide free, compassionate guidance to help Sacramento, Yolo, Placer, El Dorado and Surrounding Areas families find the right independent living, assisted living, or memory care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14" asChild>
              <a href="#contact">
                Get Free Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-lg px-8 h-14" asChild>
              <a href="tel:9162253698">
                <Phone className="ml-2 h-5 w-5" />
                (916) 225-3698
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
            <div className="flex -space-x-2">
               {/* Avatars would go here, using circles for now */}
               <div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">30+</div>
            </div>
            <p>Years of experience guiding families.</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none animate-fade-in aspect-square md:aspect-[4/3] lg:aspect-square">
           <div className="absolute inset-0 bg-accent/20 rounded-[2rem] transform rotate-3 scale-95 translate-y-4"></div>
           <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
             <img 
               src={heroImage} 
               alt="Happy elderly person with grandchildren" 
               className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
             />
           </div>
           
           {/* Floating Card */}
           <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block">
             <p className="font-serif text-lg italic text-primary mb-2">"I help families find peace of mind"</p>
             <p className="text-sm font-bold text-muted-foreground">— Camelia Ana Constantin</p>
           </div>
        </div>

      </div>
    </section>
  );
}
