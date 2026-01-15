import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#process", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <a className="flex flex-col">
            <span className="font-serif text-xl font-bold text-primary tracking-tight">Camelia Ana Constantin</span>
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">Senior Placement Advisor</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button asChild className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm">
            <a href="tel:9162253698">
              <Phone className="h-4 w-4" />
              (916) 225-3698
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="w-full gap-2 bg-accent text-accent-foreground">
                  <a href="tel:9162253698">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
