
import React from "react";

const features = [
  {
    title: "Interaction Mapping",
    description: "Visualize the true collaboration network across your organization based on actual interactions."
  },
  {
    title: "Tool Integration",
    description: "Seamlessly connect with GitHub, Jira, and other development tools to analyze technical collaboration."
  },
  {
    title: "Communication Analysis",
    description: "Extract insights from Slack, Teams, and other communication platforms to understand team dynamics."
  },
  {
    title: "Meeting Intelligence",
    description: "Process meeting transcripts to identify key contributors and meaningful participation."
  },
  {
    title: "Contribution Metrics",
    description: "Recognize who's actively supporting others with quantifiable metrics on helpfulness."
  },
  {
    title: "Key Personnel Identification",
    description: "Discover the true linchpins in your organization who may be invisible on traditional org charts."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative pl-14 feature-card"
            >
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
