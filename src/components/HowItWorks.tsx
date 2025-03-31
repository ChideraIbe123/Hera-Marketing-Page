
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
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Code on a computer screen"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Analyze Communications",
    description: "Process conversations from Slack, Teams, emails, and meeting transcripts to understand collaboration patterns.",
    color: "from-amber-500 to-amber-600",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Digital communication interface"
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Discover Patterns",
    description: "Our AI analyzes interactions to identify who's helping others, sharing knowledge, and driving projects forward.",
    color: "from-violet-500 to-violet-600",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Data pattern analysis"
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Visualize Insights",
    description: "View intuitive dashboards that reveal hidden collaboration networks and important contributors.",
    color: "from-green-500 to-green-600",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Dashboard with data visualization"
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
            How <span className="text-gradient">QualiFlow</span> transforms your approach
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
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div className="aspect-video">
                    <img 
                      src={step.imageUrl} 
                      alt={step.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
                  </div>
                  
                  {/* Custom overlay elements for each step */}
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="glassmorphic p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <GitPullRequest className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-medium">Connected 18 repositories</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glassmorphic p-3 rounded-lg animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5 text-amber-600" />
                          <span className="text-sm font-medium">Analyzing 32,145 messages</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="absolute bottom-4 right-4">
                      <div className="glassmorphic p-3 rounded-lg animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        <div className="flex items-center gap-2">
                          <Share2 className="h-5 w-5 text-violet-600" />
                          <span className="text-sm font-medium">Identified 5 key influencers</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="absolute top-4 right-4">
                      <div className="glassmorphic p-3 rounded-lg animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-medium">Collaboration up 27%</span>
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
