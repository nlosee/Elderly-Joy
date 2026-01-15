import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-primary/5 max-w-md mx-auto relative shadow-xl border-4 border-white">
                <img 
                  src="/attached_assets/Cami_Image_1767406136448.jpg" 
                  alt="Camelia Ana Constantin" 
                  className="w-full h-full object-cover"
                />
             </div>
             {/* Decorative elements */}
             <div className="absolute -z-10 top-10 right-10 w-full h-full border-2 border-accent rounded-2xl opacity-50 hidden md:block"></div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">You Don't Have to Navigate This Alone</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Choosing senior living for a loved one can feel overwhelming, emotional, and confusing. I understand—both personally and professionally.
              </p>
              <p className="text-lg text-muted-foreground">
                That's why I've dedicated over 30 years to helping families make confident, informed decisions during this important life transition. I'm not just a placement agent; I'm your advocate.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-primary">Why Families Trust Me</h3>
              <ul className="space-y-3">
                {[
                  "Former Residential Care Home Owner and Administrator",
                  "Understands Facility Licensing Requirements",
                  "Understands How to Assess Level of Care",
                  "30+ years in senior care & placement",
                  "Deep knowledge of local Sacramento, Yolo, Placer, El Dorado and Surrounding Areas communities",
                  "Compassionate, no-pressure approach",
                  "Completely FREE service to families"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t border-border">
                <p className="font-serif text-xl font-bold text-primary">Camelia Ana Constantin</p>
                <p className="text-sm text-muted-foreground">Senior Placement Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
