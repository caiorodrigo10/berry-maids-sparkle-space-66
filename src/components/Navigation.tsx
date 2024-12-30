import React, { useState, useEffect } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

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
      const navHeight = 80; // Height of the navigation bar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={cn(
      "w-full py-4 transition-all duration-300 z-50 absolute top-0 left-0",
      isSticky ? "fixed bg-black/90 shadow-lg" : ""
    )}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src="/images/placeholder-logo.png" alt="Berry Maids Logo" className="h-12 w-auto" />
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="text-berry-white hover:text-berry-lime px-4 cursor-pointer" 
                onClick={() => scrollToSection('services')}
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="text-berry-white hover:text-berry-lime px-4 cursor-pointer" 
                onClick={() => scrollToSection('areas')}
              >
                Areas
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="text-berry-white hover:text-berry-lime px-4 cursor-pointer" 
                onClick={() => scrollToSection('team')}
              >
                Team
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="text-berry-white hover:text-berry-lime px-4 cursor-pointer" 
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navigation;