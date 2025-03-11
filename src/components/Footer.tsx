
import React from "react";
import { 
  Github, 
  Twitter, 
  Linkedin,
  Heart
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white">
                <Heart className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">Hera AI</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Redefining HR analytics through qualitative interaction analysis.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Hera AI. All rights reserved. <span className="hidden md:inline">|</span><br className="md:hidden" /> theheraai.com
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
