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
              <NavigationMenuLink className="text-berry-white hover:text-berry-lime px-4" href="#services">
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-berry-white hover:text-berry-lime px-4" href="#areas">
                Areas
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-berry-white hover:text-berry-lime px-4" href="#team">
                Team
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-berry-white hover:text-berry-lime px-4" href="#contact">
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