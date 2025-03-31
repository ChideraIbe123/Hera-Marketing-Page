import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GitBranch,
  MessageCircle,
  Users,
  Activity,
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
                Redefining Human Resource Analytics
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:max-w-xl">
              Discover the <span className="text-gradient">hidden value</span>{" "}
              within your team
            </h1>

            <p className="text-lg text-muted-foreground mb-8 md:max-w-lg text-balance">
              HeraAI analyzes interactions across your company's tools to reveal
              the true collaborative landscape—focusing on how work happens, not
              just what gets done.
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
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10"></div>

              {/* Network visualization elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Central node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg animate-pulse-soft z-10">
                    <Users className="h-8 w-8 text-white" />
                  </div>

                  {/* Connected nodes - fixed alignment during animation */}
                  <div
                    className="absolute w-12 h-12"
                    style={{
                      top: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full bg-violet-600 flex items-center justify-center shadow-md animate-float"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <GitBranch className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div
                    className="absolute w-12 h-12"
                    style={{
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full bg-green-500 flex items-center justify-center shadow-md animate-float"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div
                    className="absolute w-12 h-12"
                    style={{
                      top: "50%",
                      left: "0",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full bg-amber-500 flex items-center justify-center shadow-md animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div
                    className="absolute w-12 h-12"
                    style={{
                      top: "50%",
                      right: "0",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full bg-rose-500 flex items-center justify-center shadow-md animate-float"
                      style={{ animationDelay: "2s" }}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 8L3 12L7 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 8L21 12L17 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 4L10 20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Connection lines - adjusted viewBox to ensure proper alignment */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 256 256"
                  >
                    <line
                      x1="128"
                      y1="32"
                      x2="128"
                      y2="112"
                      stroke="rgba(124, 58, 237, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="128"
                      y1="144"
                      x2="128"
                      y2="224"
                      stroke="rgba(16, 185, 129, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="32"
                      y1="128"
                      x2="112"
                      y2="128"
                      stroke="rgba(245, 158, 11, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="144"
                      y1="128"
                      x2="224"
                      y2="128"
                      stroke="rgba(239, 68, 68, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
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
