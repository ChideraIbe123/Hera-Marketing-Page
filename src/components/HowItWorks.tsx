
import React from "react";
import {
  GitPullRequest,
  MessageCircle,
  Search,
  LayoutDashboard,
} from "lucide-react";

const steps = [
  {
    icon: <GitPullRequest className="h-6 w-6" />,
    title: "Neural Integration",
    description:
      "Connect your digital ecosystem with our quantum parsing engine for seamless data harvesting.",
    color: "from-blue-500 to-blue-600",
    tags: ["GitHub", "Jira", "Confluence"],
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Semantic Analysis Matrix",
    description:
      "Our AI processes communication streams to decode intent, context, and value across digital interactions.",
    color: "from-amber-500 to-amber-600",
    tags: ["NLP", "Sentiment", "Context"],
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Cognitive Pattern Recognition",
    description:
      "Quantum algorithms identify synapse-like connections between contributors and measure knowledge transfer velocity.",
    color: "from-violet-500 to-violet-600",
    tags: ["Neural Networks", "Predictive Modeling"],
    tagColor: "bg-violet-100 text-violet-700",
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Holographic Visualization",
    description:
      "Experience immersive data landscapes that reveal hidden talent networks and collaborative constellations.",
    color: "from-green-500 to-green-600",
    tags: ["3D Mapping", "Interactive Networks"],
    tagColor: "bg-green-100 text-green-700",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
            <span className="text-xs font-medium text-primary">
              The Neural Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">HeraAI</span> rewires talent evaluation
          </h2>
          <p className="text-muted-foreground text-balance">
            Our quantum analysis platform doesn't just collect data—it creates
            a digital twin of your organization's collaborative neural network, revealing
            the synergistic pathways that drive innovation.
          </p>
        </div>

        {/* Horizontal Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-5`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag, i) => (
                  <div
                    key={i}
                    className={`h-8 px-3 rounded-full ${step.tagColor} flex items-center justify-center text-xs font-medium`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Timeline */}
        <div className="relative mt-20">
          <div className="absolute left-0 right-0 h-1 top-7 bg-gray-100"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative px-4">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} mx-auto flex items-center justify-center text-white z-10 relative`}
                >
                  {index + 1}
                </div>

                <div className="text-center mt-6">
                  <h4 className="font-medium mb-2">{step.title}</h4>
                  <div
                    className={`w-16 h-1 mx-auto bg-gradient-to-r ${step.color}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
      </div>
    </section>
  );
};

export default HowItWorks;
