
import React from "react";
import {
  Network,
  GitMerge,
  MessageSquare,
  BookText,
  TrendingUp,
  Key,
  Users,
  UserPlus,
  Award,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: <Network className="h-6 w-6" />,
    title: "Interaction Mapping",
    description:
      "Visualize the true collaboration network across your organization based on actual interactions.",
    color: "from-blue-500 to-blue-600",
    animate: "animate-float",
    delay: "0s",
  },
  {
    icon: <GitMerge className="h-6 w-6" />,
    title: "Tool Integration",
    description:
      "Seamlessly connect with GitHub, Jira, and other development tools to analyze technical collaboration.",
    color: "from-violet-500 to-violet-600",
    animate: "animate-float",
    delay: "0.3s",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Communication Analysis",
    description:
      "Extract insights from Slack, Teams, and other communication platforms to understand team dynamics.",
    color: "from-green-500 to-green-600",
    animate: "animate-float",
    delay: "0.6s",
  },
  {
    icon: <BookText className="h-6 w-6" />,
    title: "Meeting Intelligence",
    description:
      "Process meeting transcripts to identify key contributors and meaningful participation.",
    color: "from-amber-500 to-amber-600",
    animate: "animate-float",
    delay: "0.9s",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Contribution Metrics",
    description:
      "Recognize who's actively supporting others with quantifiable metrics on helpfulness.",
    color: "from-rose-500 to-rose-600",
    animate: "animate-float",
    delay: "1.2s",
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: "Key Personnel Identification",
    description:
      "Discover the true linchpins in your organization who may be invisible on traditional org charts.",
    color: "from-sky-500 to-sky-600",
    animate: "animate-float",
    delay: "1.5s",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/50 overflow-hidden">
      <div className="container-custom">
        {/* Enhanced header with animated underline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10 animate-fade-in">
            <span className="text-xs font-medium text-primary">
              Core Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            See <span className="text-gradient relative">beyond the numbers
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-violet-600 animate-pulse-soft"></span>
            </span> with qualitative analysis
          </h2>
          <p className="text-muted-foreground text-balance animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Traditional metrics miss the hidden contributions that drive your
            company forward. HeraAI reveals the complete picture of
            collaboration and value creation.
          </p>
        </div>

        {/* Improved feature cards with better animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-border hover:border-primary/30 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-5 transform transition-all duration-300 hover:scale-110`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500/40 to-violet-500/40 transition-all duration-300 group-hover:w-24"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Hidden Value Visualization section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-8 md:p-12 overflow-hidden relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/5 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in flex items-center" style={{ animationDelay: "0.8s" }}>
                <span className="text-gradient">Hidden Value</span> Visualization
                <div className="ml-3 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center shadow-md animate-pulse-soft">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
              </h3>
              <p className="text-muted-foreground mb-6 md:max-w-md animate-fade-in" style={{ animationDelay: "1s" }}>
                Our interactive network graphs make it easy to identify
                collaboration patterns, helping you recognize and reward the
                unseen heroes of your organization.
              </p>
              <ul className="space-y-4">
                {[
                  { text: "Identify informal leaders and mentors", icon: <UserPlus className="w-3 h-3 text-white" /> },
                  { text: "Discover cross-functional collaborators", icon: <Network className="w-3 h-3 text-white" /> },
                  { text: "Recognize knowledge-sharing champions", icon: <Award className="w-3 h-3 text-white" /> },
                  { text: "Visualize team cohesion and gaps", icon: <Users className="w-3 h-3 text-white" /> },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${1.2 + i * 0.2}s` }}>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative aspect-video w-full bg-white rounded-xl overflow-hidden shadow-xl mx-auto transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-violet-900/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full p-6">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        {/* Central hub */}
                        <div className="absolute top-0 left-0 -mt-8 -ml-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 animate-pulse-soft flex items-center justify-center shadow-xl z-20">
                          <Users className="h-8 w-8 text-white" />
                        </div>

                        {/* Connected nodes with better animation */}
                        {Array.from({ length: 8 }).map((_, i) => {
                          const angle = (i * Math.PI * 2) / 8;
                          const radius = 100;
                          const x = Math.cos(angle) * radius;
                          const y = Math.sin(angle) * radius;
                          const size = Math.random() * 10 + 20;
                          const colors = [
                            "bg-gradient-to-r from-violet-500 to-purple-600",
                            "bg-gradient-to-r from-blue-500 to-indigo-600",
                            "bg-gradient-to-r from-green-500 to-emerald-600",
                            "bg-gradient-to-r from-amber-500 to-orange-600",
                          ];
                          const colorClass = colors[i % colors.length];

                          return (
                            <div
                              key={i}
                              className="absolute"
                              style={{
                                left: `${x}px`,
                                top: `${y}px`,
                                transform: "translate(-50%, -50%)",
                                zIndex: 10,
                                width: `${size}px`,
                                height: `${size}px`,
                              }}
                            >
                              <div
                                className={`w-full h-full ${colorClass} rounded-full shadow-md flex items-center justify-center animate-float`}
                                style={{ 
                                  animationDelay: `${i * 0.5}s`,
                                  animationDuration: `${3 + i % 2}s` 
                                }}
                              ></div>
                            </div>
                          );
                        })}

                        {/* More visually appealing connection lines */}
                        <svg
                          className="absolute"
                          width="300"
                          height="300"
                          viewBox="-150 -150 300 300"
                          style={{ top: "-150px", left: "-150px" }}
                        >
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(79, 70, 229, 0.2)" />
                              <stop offset="100%" stopColor="rgba(124, 58, 237, 0.2)" />
                            </linearGradient>
                          </defs>
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
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                className="animate-pulse-soft"
                                style={{ animationDelay: `${i * 0.3}s` }}
                              />
                            );
                          })}
                        </svg>
                        
                        <div className="absolute top-0 left-0 -mt-8 -ml-8 w-16 h-16 rounded-full bg-blue-600/20 animate-pulse-soft" style={{ animationDelay: "0.5s" }}></div>
                        <div className="absolute top-0 left-0 -mt-8 -ml-8 w-24 h-24 rounded-full bg-violet-600/10 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
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
