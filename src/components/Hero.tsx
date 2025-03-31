
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BarChart,
  Users,
  Zap,
  Play,
} from "lucide-react";
import { DemoModal } from "@/components/DemoModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
              <span className="text-xs font-medium text-primary">
                AI-Powered Performance Evaluation System
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:max-w-xl">
              Identify your <span className="text-gradient">true performers</span>{" "}
              with AI precision
            </h1>

            <p className="text-lg text-muted-foreground mb-8 md:max-w-lg text-balance">
              HeraAI redefines performance evaluation by analyzing real
              collaboration patterns across all your company tools—bringing
              efficiency, transparency, and convenience to how you recognize top talent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div
                onClick={scrollToWaitlist}
                className="group cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600 rounded-full px-8 py-4 text-white font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              <div
                onClick={openModal}
                className="group cursor-pointer bg-white border border-gray-200 rounded-full px-8 py-4 text-gray-800 font-medium flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Play className="mr-2 h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                Request Demo
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative w-full h-80 md:h-[400px] bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl overflow-hidden animate-fade-in mx-auto">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10"></div>

              {/* Core features visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 p-4">
                  {/* Core Feature 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100 transform hover:scale-105 transition-all duration-300">
                    <Award className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Recognize Top Talent</h3>
                    <p className="text-sm text-gray-600">
                      Identify your organization's true performers with data-driven insights
                    </p>
                  </div>
                  
                  {/* Core Feature 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-violet-100 transform hover:scale-105 transition-all duration-300">
                    <Zap className="h-8 w-8 text-violet-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Boost Efficiency</h3>
                    <p className="text-sm text-gray-600">
                      Streamline evaluations and reduce bias with AI analysis
                    </p>
                  </div>
                  
                  {/* Core Feature 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100 transform hover:scale-105 transition-all duration-300">
                    <Users className="h-8 w-8 text-amber-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Complete Transparency</h3>
                    <p className="text-sm text-gray-600">
                      Base decisions on actual collaboration data, not just perceptions
                    </p>
                  </div>
                  
                  {/* Core Feature 4 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
                    <BarChart className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Data-Driven Decisions</h3>
                    <p className="text-sm text-gray-600">
                      Make promotion and development choices based on comprehensive metrics
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg transform rotate-12 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl shadow-lg transform -rotate-12 -z-10"></div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
};

export default Hero;
