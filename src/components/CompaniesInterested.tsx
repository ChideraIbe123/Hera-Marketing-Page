
import React from 'react';

const CompaniesInterested = () => {
  return (
    <section id="companies" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
            <span className="text-xs font-medium text-primary">Companies Interested</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leading organizations are <span className="text-gradient">ready to adopt</span> HeraAI
          </h2>
          <p className="text-muted-foreground text-balance">
            These forward-thinking companies recognize the importance of understanding hidden collaboration networks.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {[1, 2, 3, 4].map((index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-5 shadow-sm flex items-center justify-center w-[200px]"
            >
              <span className="text-gray-500 font-medium">Company {index}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesInterested;
