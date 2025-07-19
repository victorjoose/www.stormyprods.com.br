import { NavLink } from "react-router-dom";
import { Music, Calendar, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div id="logo" className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/favicon.ico" alt="Stormy Logo" className="h-10" />
            </div>
            <div>
              <h1 className="font-bebas text-2xl tracking-wider text-foreground">
                STORMY
              </h1>
              <p className="text-xs text-secondary-text font-medium -mt-1">
                PRODS & RECORDS
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/prods"
              className={({ isActive }) =>
                `stormy-nav-link ${isActive ? 'active' : ''}`
              }
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>PRODS</span>
              </div>
            </NavLink>
            
            <NavLink
              to="/records"
              className={({ isActive }) =>
                `stormy-nav-link ${isActive ? 'active' : ''}`
              }
            >
              <div className="flex items-center space-x-2">
                <Music className="w-5 h-5" />
                <span>RECORDS</span>
              </div>
            </NavLink>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  <SheetClose asChild>
                    <NavLink
                      to="/prods"
                      className={({ isActive }) =>
                        `stormy-nav-link ${isActive ? 'active' : ''}`
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>PRODS</span>
                      </div>
                    </NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink
                      to="/records"
                      className={({ isActive }) =>
                        `stormy-nav-link ${isActive ? 'active' : ''}`
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <Music className="w-5 h-5" />
                        <span>RECORDS</span>
                      </div>
                    </NavLink>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;