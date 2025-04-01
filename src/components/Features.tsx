import React from "react";
import {
  Network,
  GitMerge,
  MessageSquare,
  BookText,
  TrendingUp,
  Key,
  Users,
  Play,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
            <span className="text-xs font-medium text-primary">
              Our Product{" "}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See <span className="text-gradient">beyond the numbers</span> with
            qualitative analysis
          </h2>
          <p className="text-muted-foreground text-balance">
            Traditional metrics miss the hidden contributions that drive your
            company forward. HeraAI reveals the complete picture of
            collaboration and value creation.
          </p>
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">
              See Your Team in Seconds
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-5xl relative">
              <div className="relative aspect-video w-full bg-white rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-violet-900/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <Play className="h-24 w-24 text-blue-600 mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                    <p className="text-gray-600 font-medium text-lg">
                      Watch Product Demo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
