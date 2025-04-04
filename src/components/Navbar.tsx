import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { DemoModal } from "@/components/DemoModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "py-3 glassmorphic" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white">
                <Heart className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">HeraAI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="link-hover text-sm font-medium">
              Features
            </a>
            <a href="#how-it-works" className="link-hover text-sm font-medium">
              How It Works
            </a>
            <a href="#companies" className="link-hover text-sm font-medium">
              Companies
            </a>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </Button>
            <Button
              className="btn-gradient rounded-full px-6"
              size="sm"
              onClick={openModal}
            >
              Request Demo
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#companies"
                className="text-sm font-medium px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Companies
              </a>
              <Button
                variant="outline"
                className="w-full rounded-full"
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  scrollToWaitlist();
                }}
              >
                Join Waitlist
              </Button>
              <Button
                className="btn-gradient rounded-full w-full"
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  openModal();
                }}
              >
                Request Demo
              </Button>
            </nav>
          </div>
        )}
      </div>

      <DemoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </header>
  );
};

export default Navbar;
