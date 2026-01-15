import { Home, Heart, Activity, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Independent Living",
    description: "For seniors who want an active lifestyle without home maintenance worries. Social activities, dining, and freedom.",
    icon: Home,
  },
  {
    title: "Assisted Living",
    description: "Provide various levels of care with activities of daily living such as: medication reminders, bathing assistance, dressing, and incontinence care.",
    icon: Users,
  },
  {
    title: "Memory Care",
    description: "Specialized secure environments providing compassionate care for those living with Alzheimer's or dementia.",
    icon: Activity,
  },
  {
    title: "Board & Care Homes",
    description: "Smaller, intimate residential settings offering personalized care and a cozy, home-like family atmosphere.",
    icon: Heart,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Finding the Right Level of Care</h2>
          <p className="text-muted-foreground text-lg">
            Every family's situation is unique. I specialize in finding the perfect fit based on care needs, lifestyle, budget, and location.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-serif text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
