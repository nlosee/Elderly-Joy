import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <About />
        <Services />
        <Contact />
      </main>
      
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-2xl font-bold mb-2">Camelia Ana Constantin</h2>
          <p className="opacity-80 mb-8">Senior Placement Advisor • Sacramento, Yolo, Placer, El Dorado and Surrounding Areas</p>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Senior Living Placement Help. All rights reserved. 
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Compassionate guidance for your family.
          </p>
        </div>
      </footer>
    </div>
  );
}
