import React, { useState, useEffect } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'Areas', id: 'areas' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className={cn(
      "w-full py-4 transition-all duration-300 z-50 absolute top-0 left-0",
      isSticky ? "fixed bg-black/90 shadow-lg" : ""
    )}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img 
            src="/images/placeholder-logo.png" 
            alt="Berry Maids Logo" 
            className="h-16 w-auto hover:opacity-90 transition-opacity" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink 
                  className="text-berry-white hover:text-berry-lime px-4 cursor-pointer" 
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger className="md:hidden p-2">
            <Menu className="h-6 w-6 text-berry-white" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black/95 border-berry-purple">
            <nav className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-berry-white hover:text-berry-lime text-lg py-2 text-left transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navigation;