import { ClipboardList, Search, UserCheck, HeartHandshake } from "lucide-react";

const steps = [
  {
    title: "Initial Consultation",
    description: "We discuss your unique situation, care needs, budget, and lifestyle preferences in a private one-on-one conversation.",
    icon: ClipboardList,
  },
  {
    title: "Curated Options",
    description: "I identify the best communities that match your specific criteria, saving you time and stress.",
    icon: Search,
  },
  {
    title: "Guided Tours",
    description: "I coordinate tours and can accompany you to ask the right questions and ensure nothing is overlooked.",
    icon: UserCheck,
  },
  {
    title: "Placement & Support",
    description: "I assist with the transition details and remain a resource for you even after your loved one has moved in.",
    icon: HeartHandshake,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What You Can Expect</h2>
          <p className="text-primary-foreground/80 text-lg">
            A simple, guided process to help you find the right home with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-foreground/20 -z-10"></div>
              )}
              
              <div className="h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-6 shadow-lg text-2xl font-bold">
                <step.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
