
import React from "react";
import { Button } from "@/components/ui/button";

const CompaniesInterested = () => {
  // Company logos data
  const companies = [
    { name: "TechCorp", industry: "Enterprise Software" },
    { name: "Innovate AI", industry: "Artificial Intelligence" },
    { name: "DataFlow", industry: "Data Analytics" },
    { name: "SmartHR", industry: "HR Technology" },
    { name: "TeamSync", industry: "Collaboration Tools" },
    { name: "TalentAI", industry: "Talent Management" },
  ];

  return (
    <section id="companies" className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
            <span className="text-xs font-medium text-primary">Early Adopters</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Companies <span className="text-gradient">interested</span> in Hera AI
          </h2>
          <p className="text-muted-foreground text-balance">
            Join these forward-thinking organizations exploring how Hera AI can transform their talent recognition and team dynamics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-32 w-full bg-secondary/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {index % 3 === 0 && (
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt={`${company.name} visual`}
                    className="w-full h-full object-cover"
                  />
                )}
                {index % 3 === 1 && (
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt={`${company.name} visual`}
                    className="w-full h-full object-cover"
                  />
                )}
                {index % 3 === 2 && (
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt={`${company.name} visual`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h3 className="font-bold text-lg mb-1">{company.name}</h3>
              <p className="text-sm text-muted-foreground">{company.industry}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full"
            onClick={() => document.getElementById('waitlist-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join these companies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompaniesInterested;
