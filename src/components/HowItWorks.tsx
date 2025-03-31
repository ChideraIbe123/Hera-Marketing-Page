
import React from "react";
import { 
  GitPullRequest, 
  MessageCircle, 
  Search, 
  Share2,
  TrendingUp,
  LayoutDashboard
} from "lucide-react";

const steps = [
  {
    icon: <GitPullRequest className="h-6 w-6" />,
    title: "Connect Your Tools",
    description: "Seamlessly integrate with GitHub, Jira, Confluence, and other development platforms to gather interaction data.",
    color: "from-blue-500 to-blue-600",
    colorClass: "blue"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Analyze Communications",
    description: "Process conversations from Slack, Teams, emails, and meeting transcripts to understand collaboration patterns.",
    color: "from-amber-500 to-amber-600",
    colorClass: "amber"
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Discover Patterns",
    description: "Our AI analyzes interactions to identify who's helping others, sharing knowledge, and driving projects forward.",
    color: "from-violet-500 to-violet-600",
    colorClass: "violet"
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Visualize Insights",
    description: "View intuitive dashboards that reveal hidden collaboration networks and important contributors.",
    color: "from-green-500 to-green-600",
    colorClass: "green"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
            <span className="text-xs font-medium text-primary">The Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">HeraAI</span> transforms your approach
          </h2>
          <p className="text-muted-foreground text-balance">
            Our platform doesn't just collect data—it reveals the story of how work actually happens in your organization, highlighting the true drivers of success.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
            >
              <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-5`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6">{step.description}</p>
                
                <div className="flex items-center gap-3">
                  {index === 0 && (
                    <>
                      <div className="h-8 px-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">GitHub</div>
                      <div className="h-8 px-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">Jira</div>
                      <div className="h-8 px-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">Confluence</div>
                    </>
                  )}
                  
                  {index === 1 && (
                    <>
                      <div className="h-8 px-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-medium">Slack</div>
                      <div className="h-8 px-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-medium">Teams</div>
                      <div className="h-8 px-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-medium">Meetings</div>
                    </>
                  )}
                  
                  {index === 2 && (
                    <>
                      <div className="h-8 px-4 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-sm font-medium">AI Analysis</div>
                      <div className="h-8 px-4 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-sm font-medium">Pattern Recognition</div>
                    </>
                  )}
                  
                  {index === 3 && (
                    <>
                      <div className="h-8 px-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-medium">Network Graphs</div>
                      <div className="h-8 px-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-medium">Trend Analysis</div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                <div className={`relative h-[300px] rounded-xl overflow-hidden shadow-lg bg-${step.colorClass}-50/30 border border-${step.colorClass}-100`}>
                  {/* Animated visualization for "Connect Your Tools" */}
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full">
                        {/* Central hub */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center animate-pulse-soft z-20">
                          <GitPullRequest className="h-8 w-8 text-white" />
                        </div>
                        
                        {/* Connection lines and nodes */}
                        {[...Array(6)].map((_, i) => {
                          const angle = (i * 60) * (Math.PI / 180);
                          const x = Math.cos(angle) * 110;
                          const y = Math.sin(angle) * 110;
                          const delay = i * 0.2;
                          
                          return (
                            <React.Fragment key={i}>
                              {/* Connection line */}
                              <div 
                                className="absolute top-1/2 left-1/2 h-1 bg-blue-300 origin-left z-10"
                                style={{
                                  width: '110px',
                                  transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                                  animation: `pulse-soft 3s infinite ease-in-out ${delay}s`
                                }}
                              ></div>
                              
                              {/* Outer node */}
                              <div 
                                className="absolute w-10 h-10 rounded-full bg-white border-2 border-blue-400 flex items-center justify-center shadow-md z-20"
                                style={{
                                  top: `calc(50% + ${y}px)`,
                                  left: `calc(50% + ${x}px)`,
                                  transform: 'translate(-50%, -50%)',
                                  animation: `float 6s infinite ease-in-out ${delay}s`
                                }}
                              >
                                <span className="text-xs font-bold text-blue-500">{['Git', 'Jira', 'Conf', 'Slack', 'Teams', 'API'][i]}</span>
                              </div>
                            </React.Fragment>
                          );
                        })}
                        
                        {/* Background elements */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-300 blur-xl"></div>
                          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-blue-300 blur-xl"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Animated visualization for "Analyze Communications" */}
                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full">
                        {/* Message bubbles flowing */}
                        <div className="absolute inset-0">
                          {[...Array(12)].map((_, i) => {
                            const size = 20 + Math.random() * 30;
                            const startX = Math.random() * 100;
                            const startY = 110 + (i * 20);
                            const duration = 3 + Math.random() * 2;
                            const delay = i * 0.2;
                            
                            return (
                              <div 
                                key={i}
                                className="absolute bg-amber-100 border border-amber-200 rounded-lg flex items-center justify-center shadow-sm overflow-hidden"
                                style={{
                                  width: `${size}px`,
                                  height: `${Math.max(size * 0.6, 20)}px`,
                                  top: `${startY}%`,
                                  left: `${startX}%`,
                                  animation: `float ${duration}s infinite ease-in-out ${delay}s, fade-in 1s ease-out ${delay}s`
                                }}
                              >
                                <div className="w-full h-2 bg-amber-200 rounded-full mx-2"></div>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Central analysis icon */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center animate-pulse-soft z-20">
                          <MessageCircle className="h-12 w-12 text-white" />
                        </div>
                        
                        {/* Connecting lines */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3/4 h-3/4 border-2 border-amber-300 rounded-full animate-pulse opacity-30"></div>
                          <div className="absolute w-1/2 h-1/2 border-2 border-amber-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Animated visualization for "Discover Patterns" */}
                  {index === 2 && (
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full">
                        {/* Pattern grid background */}
                        <div className="absolute inset-0">
                          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(124, 58, 237, 0.1)" strokeWidth="1"></path>
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)"></rect>
                          </svg>
                        </div>
                        
                        {/* Nodes and connections forming a pattern */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-3/4 h-3/4">
                            {/* Connection lines */}
                            {[
                              {from: {x: 30, y: 30}, to: {x: 60, y: 40}, delay: 0},
                              {from: {x: 60, y: 40}, to: {x: 80, y: 70}, delay: 0.3},
                              {from: {x: 30, y: 30}, to: {x: 20, y: 70}, delay: 0.6},
                              {from: {x: 20, y: 70}, to: {x: 50, y: 80}, delay: 0.9},
                              {from: {x: 50, y: 80}, to: {x: 80, y: 70}, delay: 1.2},
                              {from: {x: 60, y: 40}, to: {x: 40, y: 60}, delay: 1.5},
                              {from: {x: 40, y: 60}, to: {x: 20, y: 70}, delay: 1.8},
                            ].map((line, i) => (
                              <div 
                                key={i}
                                className="absolute bg-violet-400 rounded-full origin-left"
                                style={{
                                  height: '2px',
                                  width: `${Math.sqrt(Math.pow(line.to.x - line.from.x, 2) + Math.pow(line.to.y - line.from.y, 2))}%`,
                                  top: `${line.from.y}%`,
                                  left: `${line.from.x}%`,
                                  transform: `rotate(${Math.atan2(line.to.y - line.from.y, line.to.x - line.from.x)}rad)`,
                                  opacity: 0,
                                  animation: `fade-in 0.6s ease-out forwards ${line.delay}s`
                                }}
                              ></div>
                            ))}
                            
                            {/* Nodes */}
                            {[
                              {x: 30, y: 30, size: 16, delay: 0},
                              {x: 60, y: 40, size: 20, delay: 0.2},
                              {x: 80, y: 70, size: 14, delay: 0.4},
                              {x: 20, y: 70, size: 18, delay: 0.6},
                              {x: 50, y: 80, size: 16, delay: 0.8},
                              {x: 40, y: 60, size: 12, delay: 1.0},
                            ].map((node, i) => (
                              <div 
                                key={i}
                                className="absolute bg-gradient-to-r from-violet-500 to-violet-600 rounded-full shadow-md flex items-center justify-center"
                                style={{
                                  width: `${node.size}px`,
                                  height: `${node.size}px`,
                                  top: `${node.y}%`,
                                  left: `${node.x}%`,
                                  transform: 'translate(-50%, -50%)',
                                  opacity: 0,
                                  animation: `scale-in 0.5s ease-out forwards ${node.delay}s, pulse-soft 3s infinite ease-in-out ${node.delay + 1}s`
                                }}
                              >
                                {node.size >= 18 && (
                                  <span className="text-xs text-white font-bold">{i+1}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Central search icon */}
                        <div className="absolute bottom-4 right-4 w-16 h-16 rounded-lg bg-gradient-to-r from-violet-500 to-violet-600 flex items-center justify-center shadow-lg z-30 animate-slide-in-right" style={{animationDelay: '2s'}}>
                          <Search className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Animated visualization for "Visualize Insights" */}
                  {index === 3 && (
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full p-4">
                        {/* Dashboard frame */}
                        <div className="absolute inset-0 m-4 rounded-lg border border-green-200 bg-white shadow-md overflow-hidden opacity-0 animate-scale-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                          {/* Dashboard header */}
                          <div className="h-8 bg-green-50 border-b border-green-100 flex items-center px-4">
                            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                            <div className="h-4 w-24 bg-green-100 rounded-sm ml-4"></div>
                          </div>
                          
                          {/* Dashboard content */}
                          <div className="grid grid-cols-2 gap-2 p-2">
                            {/* Chart element */}
                            <div className="bg-white p-2 rounded border border-green-100 row-span-2 h-[160px] overflow-hidden opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                              <div className="h-4 w-20 bg-green-100 rounded-sm mb-2"></div>
                              <div className="relative h-[130px] flex items-end space-x-2 pt-4">
                                {[40, 65, 30, 80, 55, 45, 70].map((height, i) => (
                                  <div 
                                    key={i} 
                                    className="flex-1 bg-gradient-to-t from-green-500 to-green-300 rounded-t"
                                    style={{
                                      height: '0%',
                                      animation: `slide-up 1s ease-out forwards ${0.9 + i * 0.1}s`,
                                    }}
                                    data-final-height={`${height}%`}
                                  ></div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Mini stats cards */}
                            {[
                              {color: 'green', value: '27%', label: 'Growth'},
                              {color: 'blue', value: '164', label: 'Contributors'},
                              {color: 'purple', value: '5.2', label: 'Engagement'}
                            ].map((stat, i) => (
                              <div 
                                key={i}
                                className={`bg-white p-2 rounded border border-${stat.color}-100 flex items-center opacity-0 animate-fade-in`}
                                style={{animationDelay: `${1.2 + i * 0.2}s`, animationFillMode: 'forwards'}}
                              >
                                <div className={`w-8 h-8 rounded-full bg-${stat.color}-100 flex items-center justify-center mr-2`}>
                                  <div className={`w-4 h-4 rounded-full bg-${stat.color}-500`}></div>
                                </div>
                                <div>
                                  <div className="text-sm font-bold">{stat.value}</div>
                                  <div className="text-xs text-gray-400">{stat.label}</div>
                                </div>
                              </div>
                            ))}
                            
                            {/* Network graph */}
                            <div className="bg-white p-2 rounded border border-green-100 col-span-2 h-[80px] overflow-hidden opacity-0 animate-fade-in" style={{animationDelay: '1.8s', animationFillMode: 'forwards'}}>
                              <div className="h-4 w-16 bg-green-100 rounded-sm mb-2"></div>
                              <div className="relative h-[50px]">
                                <svg width="100%" height="100%" viewBox="0 0 100 50">
                                  {/* Connection lines */}
                                  <line x1="20" y1="25" x2="40" y2="15" stroke="rgba(21, 128, 61, 0.3)" strokeWidth="1" className="opacity-0 animate-fade-in" style={{animationDelay: '2s', animationFillMode: 'forwards'}} />
                                  <line x1="40" y1="15" x2="60" y2="25" stroke="rgba(21, 128, 61, 0.3)" strokeWidth="1" className="opacity-0 animate-fade-in" style={{animationDelay: '2.1s', animationFillMode: 'forwards'}} />
                                  <line x1="60" y1="25" x2="80" y2="15" stroke="rgba(21, 128, 61, 0.3)" strokeWidth="1" className="opacity-0 animate-fade-in" style={{animationDelay: '2.2s', animationFillMode: 'forwards'}} />
                                  <line x1="20" y1="25" x2="40" y2="35" stroke="rgba(21, 128, 61, 0.3)" strokeWidth="1" className="opacity-0 animate-fade-in" style={{animationDelay: '2.3s', animationFillMode: 'forwards'}} />
                                  <line x1="40" y1="35" x2="60" y2="25" stroke="rgba(21, 128, 61, 0.3)" strokeWidth="1" className="opacity-0 animate-fade-in" style={{animationDelay: '2.4s', animationFillMode: 'forwards'}} />
                                  <line x1="60" y1="25" x2="80" y2="35" stroke="rgba(21, 128, 61, 0.3)" strokeWidth="1" className="opacity-0 animate-fade-in" style={{animationDelay: '2.5s', animationFillMode: 'forwards'}} />
                                  
                                  {/* Nodes */}
                                  <circle cx="20" cy="25" r="4" fill="#16a34a" className="opacity-0 animate-scale-in" style={{animationDelay: '2s', animationFillMode: 'forwards'}} />
                                  <circle cx="40" cy="15" r="3" fill="#16a34a" className="opacity-0 animate-scale-in" style={{animationDelay: '2.1s', animationFillMode: 'forwards'}} />
                                  <circle cx="60" cy="25" r="5" fill="#16a34a" className="opacity-0 animate-scale-in" style={{animationDelay: '2.2s', animationFillMode: 'forwards'}} />
                                  <circle cx="80" cy="15" r="3" fill="#16a34a" className="opacity-0 animate-scale-in" style={{animationDelay: '2.3s', animationFillMode: 'forwards'}} />
                                  <circle cx="40" cy="35" r="4" fill="#16a34a" className="opacity-0 animate-scale-in" style={{animationDelay: '2.4s', animationFillMode: 'forwards'}} />
                                  <circle cx="80" cy="35" r="3" fill="#16a34a" className="opacity-0 animate-scale-in" style={{animationDelay: '2.5s', animationFillMode: 'forwards'}} />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Dashboard icon */}
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg z-30 animate-fade-in" style={{animationDelay: '0s'}}>
                          <LayoutDashboard className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
