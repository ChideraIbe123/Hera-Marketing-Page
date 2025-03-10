
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DemoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      console.log("Demo request submitted:", formData);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
      
      setIsSubmitting(false);
      
      // Close modal
      window.demoForm.close();
      
      // Show success toast
      toast({
        title: "Demo request received",
        description: "We'll get back to you within 24 hours.",
        variant: "default"
      });
    }, 1500);
  };

  return (
    <dialog id="demoForm" className="modal modal-bottom sm:modal-middle">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-auto relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
          onClick={() => window.demoForm.close()}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Request a Demo</h2>
          <p className="text-muted-foreground">Fill out the form below and our team will get back to you shortly.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full btn-gradient rounded-full py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </div>
    </dialog>
  );
};

export default DemoForm;
