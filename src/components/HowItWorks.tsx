
import React from "react";

const steps = [
  {
    title: "Connect Your Tools",
    description: "Seamlessly integrate with GitHub, Jira, Confluence, and other development platforms to gather interaction data.",
    tags: ["GitHub", "Jira", "Confluence"]
  },
  {
    title: "Analyze Communications",
    description: "Process conversations from Slack, Teams, emails, and meeting transcripts to understand collaboration patterns.",
    tags: ["Slack", "Teams", "Meetings"]
  },
  {
    title: "Discover Patterns",
    description: "Our AI analyzes interactions to identify who's helping others, sharing knowledge, and driving projects forward.",
    tags: ["AI Analysis", "Pattern Recognition"]
  },
  {
    title: "Visualize Insights",
    description: "View intuitive dashboards that reveal hidden collaboration networks and important contributors.",
    tags: ["Network Graphs", "Trend Analysis"]
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-14 border-l border-secondary/70 pt-2 pb-8">
              <div className="absolute left-0 top-0 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground mb-6">{step.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {step.tags.map((tag, i) => (
                  <div 
                    key={i} 
                    className={`h-8 px-4 rounded-full bg-secondary/70 text-primary flex items-center justify-center text-sm font-medium`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-8 md:p-12">
          <div className="md:max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Hidden Value Visualization
            </h3>
            <p className="text-muted-foreground mb-6">
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
