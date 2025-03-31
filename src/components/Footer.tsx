import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white">
              <Heart className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl tracking-tight">HeraAI</span>
          </div>

          <p className="text-muted-foreground text-sm text-center mb-6">
            Uncover hidden talent in your organization with AI-powered insights.
          </p>

          <div className="text-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} HeraAI. All rights reserved.</p>
            <p className="mt-1">theheraai.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
