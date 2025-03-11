
import React from "react";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
            <span className="text-xs font-medium text-primary">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover hidden <span className="text-gradient">talent and value</span>
          </h2>
          <p className="text-muted-foreground text-balance">
            See how organizations are using Hera AI to recognize and reward the true contributors within their teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-xl p-8 shadow-sm border border-border relative animate-fade-in">
            <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white">
              <Quote className="h-5 w-5" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/5">
                <div className="relative rounded-lg overflow-hidden mb-5 w-full h-48 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Tech company office with people collaborating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/54.jpg"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">VP of HR, TechCorp</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-3/5">
                <blockquote className="text-lg mb-6 text-balance">
                  "Hera AI completely transformed how we evaluate and recognize our team members. The traditional performance metrics were missing the people who made everyone else better. 
                  <span className="font-medium text-primary"> We discovered that some of our most valuable team members weren't the ones with the most visible output—they were the ones empowering others.</span> This insight helped us retain key employees who might have otherwise gone unrecognized."
                </blockquote>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-primary">42%</p>
                    <p className="text-sm text-muted-foreground">Increase in identifying key collaborators</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-primary">28%</p>
                    <p className="text-sm text-muted-foreground">Lower turnover of vital team members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-xl p-8 shadow-sm flex flex-col justify-between animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="mb-8">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Quote className="h-6 w-6" />
              </div>
              
              <blockquote className="text-lg mb-6 text-balance">
                "We were about to lose a developer who didn't seem productive by traditional metrics. Hera AI revealed he was actually crucial to our team's success, answering questions and helping others constantly."
              </blockquote>
            </div>
            
            <div className="flex items-center gap-4">
              <img 
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt="Michael Chen"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-sm text-white/70">CTO, Startup Innovate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
