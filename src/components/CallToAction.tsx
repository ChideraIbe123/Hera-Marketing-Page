
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Heart, TrendingUp } from "lucide-react";
import { DemoModal } from "@/components/DemoModal";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-white">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative px-8 py-16 md:p-16">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"></rect>
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Uncover the true value within your organization
                </h2>
                <p className="text-white/80 mb-8">
                  Ready to discover who's really driving your success? Hera AI reveals the hidden heroes and collaboration networks that traditional HR analytics miss.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium transition-all duration-300"
                    onClick={openModal}
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button 
                    className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium transition-all duration-300"
                    onClick={scrollToWaitlist}
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
              
              <div className="w-full md:w-2/5">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { 
                        icon: <Network className="h-6 w-6 text-white" />,
                        title: "Connect",
                        description: "Integrate with all your existing tools and platforms"
                      },
                      { 
                        icon: <Heart className="h-6 w-6 text-white" />,
                        title: "Analyze",
                        description: "Discover collaboration patterns and key contributors"
                      },
                      { 
                        icon: <TrendingUp className="h-6 w-6 text-white" />,
                        title: "Transform",
                        description: "Make better decisions based on complete insights"
                      }
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 animate-fade-in" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-white/70">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DemoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
};

export default CallToAction;
