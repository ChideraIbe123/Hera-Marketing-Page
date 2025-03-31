
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CalendarCheck, Clock, Video } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function DemoModal({ isOpen, setIsOpen }: DemoModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    teamSize: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        teamSize: ""
      });
      
      setStep(1);
      
      // Show success toast
      toast({
        title: "Demo Scheduled",
        description: "Thank you for your interest! We'll send you a calendar invite shortly.",
      });
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{step === 1 ? "Request a Demo" : "Choose a Demo Time"}</DialogTitle>
          <DialogDescription>
            {step === 1 
              ? "Fill out the form below to schedule a personalized demo of Hera AI."
              : "Select your preferred date and time for the demo."
            }
          </DialogDescription>
        </DialogHeader>
        
        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Work Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input 
                  id="company" 
                  name="company" 
                  placeholder="Acme Inc." 
                  value={formData.company} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="teamSize">Team Size</Label>
                  <Input 
                    id="teamSize" 
                    name="teamSize" 
                    placeholder="e.g. 10-50" 
                    value={formData.teamSize} 
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="mr-2">
                Cancel
              </Button>
              <Button type="submit" className="btn-gradient">
                Next Step
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-4">
            <div className="mb-6 bg-secondary/50 p-4 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <Video className="h-4 w-4" />
                <span className="font-medium">30-minute video call</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our product specialist will guide you through Hera AI's key features and answer any questions you have.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Available time slots:</h4>
              
              <div className="grid grid-cols-1 gap-3">
                {[
                  { date: "Tomorrow", time: "10:00 AM", timezone: "ET" },
                  { date: "Tomorrow", time: "2:00 PM", timezone: "ET" },
                  { date: "Wednesday", time: "11:30 AM", timezone: "ET" },
                ].map((slot, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-secondary/50 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CalendarCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{slot.date}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{slot.time} {slot.timezone}</span>
                        </div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="timeSlot" 
                        value={`${slot.date} ${slot.time}`} 
                        className="sr-only peer" 
                      />
                      <div className="w-5 h-5 peer-checked:bg-primary border border-border rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <DialogFooter className="pt-6">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="mr-2">
                Back
              </Button>
              <Button onClick={handleSubmit} disabled={isSubmitting} className="btn-gradient">
                {isSubmitting ? "Scheduling..." : "Schedule Demo"}
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
