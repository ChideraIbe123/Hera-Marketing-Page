
import React from "react";
import { 
  Network, 
  GitMerge, 
  MessageSquare, 
  BookText, 
  TrendingUp, 
  Key, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: <Network className="h-6 w-6" />,
    title: "Interaction Mapping",
    description: "Visualize the true collaboration network across your organization based on actual interactions.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <GitMerge className="h-6 w-6" />,
    title: "Tool Integration",
    description: "Seamlessly connect with GitHub, Jira, and other development tools to analyze technical collaboration.",
    color: "from-violet-500 to-violet-600"
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Communication Analysis",
    description: "Extract insights from Slack, Teams, and other communication platforms to understand team dynamics.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <BookText className="h-6 w-6" />,
    title: "Meeting Intelligence",
    description: "Process meeting transcripts to identify key contributors and meaningful participation.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Contribution Metrics",
    description: "Recognize who's actively supporting others with quantifiable metrics on helpfulness.",
    color: "from-rose-500 to-rose-600"
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: "Key Personnel Identification",
    description: "Discover the true linchpins in your organization who may be invisible on traditional org charts.",
    color: "from-sky-500 to-sky-600"
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
            <span className="text-xs font-medium text-primary">Core Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See <span className="text-gradient">beyond the numbers</span> with qualitative analysis
          </h2>
          <p className="text-muted-foreground text-balance">
            Traditional metrics miss the hidden contributions that drive your company forward. Hera AI reveals the complete picture of collaboration and value creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-border card-hover"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Hidden Value Visualization
              </h3>
              <p className="text-muted-foreground mb-6 md:max-w-md">
                Our interactive network graphs make it easy to identify collaboration patterns, helping you recognize and reward the unseen heroes of your organization.
              </p>
              <ul className="space-y-3">
                {[
                  "Identify informal leaders and mentors",
                  "Discover cross-functional collaborators",
                  "Recognize knowledge-sharing champions",
                  "Visualize team cohesion and gaps"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative aspect-video w-full bg-white rounded-xl overflow-hidden shadow-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-violet-900/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full p-6">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        {/* Central hub */}
                        <div className="absolute top-0 left-0 -mt-8 -ml-8 w-16 h-16 rounded-full bg-blue-600 animate-pulse-soft flex items-center justify-center shadow-xl z-20">
                          <Users className="h-8 w-8 text-white" />
                        </div>
                        
                        {/* Connected nodes - we'll create a network-like visualization */}
                        {Array.from({ length: 8 }).map((_, i) => {
                          const angle = (i * Math.PI * 2) / 8;
                          const radius = 100;
                          const x = Math.cos(angle) * radius;
                          const y = Math.sin(angle) * radius;
                          const size = Math.random() * 10 + 20;
                          const colors = ["bg-violet-500", "bg-blue-500", "bg-green-500", "bg-amber-500"];
                          const colorClass = colors[i % colors.length];
                          
                          return (
                            <div 
                              key={i}
                              className={`absolute ${colorClass} rounded-full shadow-md flex items-center justify-center animate-float`}
                              style={{ 
                                width: `${size}px`, 
                                height: `${size}px`,
                                left: `${x}px`, 
                                top: `${y}px`,
                                animationDelay: `${i * 0.5}s`,
                                zIndex: 10
                              }}
                            >
                            </div>
                          );
                        })}
                        
                        {/* Connection lines */}
                        <svg className="absolute" width="300" height="300" viewBox="-150 -150 300 300" style={{ top: "-150px", left: "-150px" }}>
                          {Array.from({ length: 8 }).map((_, i) => {
                            const angle = (i * Math.PI * 2) / 8;
                            const radius = 100;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;
                            
                            return (
                              <line 
                                key={i}
                                x1="0" 
                                y1="0" 
                                x2={x} 
                                y2={y} 
                                stroke="rgba(79, 70, 229, 0.2)" 
                                strokeWidth="2"
                                strokeDasharray="4 4"
                              />
                            );
                          })}
                        </svg>
                      </div>
                    </div>
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
