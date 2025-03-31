
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      
      // Reset form
      setEmail("");
      setCompany("");
      setRole("");
    }, 1000);
  };

  return (
    <section id="waitlist-section" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="max-w-md">
              <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
                <span className="text-xs font-medium text-primary">Limited Access</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join our <span className="text-gradient">waitlist</span> for early access
              </h2>
              <p className="text-muted-foreground mb-8">
                We're rolling out Hera AI to select organizations. Join our waitlist to be among the first to experience how AI can transform your team dynamics and talent recognition.
              </p>
              
              <div className="bg-gradient-to-r from-blue-600/10 to-violet-600/10 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-primary mb-2">Early access benefits:</h4>
                <ul className="space-y-2">
                  {[
                    "Priority onboarding and setup assistance",
                    "Custom integration with your existing tools",
                    "Personalized training for your HR team",
                    "Input on feature development roadmap"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary block"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-border">
              <h3 className="text-xl font-bold mb-6">Request to join waitlist</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Work Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-1">Your Role</label>
                  <Input
                    id="role"
                    placeholder="e.g. HR Director"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full btn-gradient rounded-full mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
