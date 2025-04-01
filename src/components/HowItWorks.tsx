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
    title: "Connect Your Tools",
    description:
      "Seamlessly integrate with GitHub, Jira, Slack, Google Meet, Zoom, and other development platforms.",
    color: "from-blue-500 to-blue-600",
    // Using images for these logos
    logos: [
      {
        alt: "GitHub",
        src: "https://images.seeklogo.com/logo-png/27/2/github-logo-png_seeklogo-273183.png",
      },
      {
        alt: "Jira",
        src: "data:image/png;base64,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",
      },
      {
        alt: "Slack",
        src: "data:image/png;base64,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",
      },
      {
        alt: "Google Meet",
        src: "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png",
      },
      {
        alt: "Zoom",
        src: "data:image/png;base64,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",
      },
    ],
    tags: [], // We won't display tags here since we're showing logos
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Analyze Communications",
    description:
      "Process conversations from chat tools, emails, and meeting transcripts to uncover key insights.",
    color: "from-amber-500 to-amber-600",
    // Example generic tags
    tags: ["Collaboration", "Knowledge Sharing"],
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Discover Patterns",
    description:
      "Our AI identifies who's helping others, sharing knowledge, and driving projects forward.",
    color: "from-violet-500 to-violet-600",
    tags: ["AI Analysis", "Pattern Recognition", "Contributor Mapping"],
    tagColor: "bg-violet-100 text-violet-700",
    centered: ["Contributor Mapping"],
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Visualize Insights",
    description:
      "View intuitive dashboards that reveal hidden collaboration networks and key contributors.",
    color: "from-green-500 to-green-600",
    tags: ["Network Graphs", "Trend Analysis", "Insight Dashboards"],
    tagColor: "bg-green-100 text-green-700",
    centered: ["Insight Dashboards"],
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
            <span className="text-xs font-medium text-primary">
              The Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">HeraAI</span> transforms your
            approach
          </h2>
          <p className="text-muted-foreground text-balance">
            Our platform doesn't just collect data—it reveals the story of how
            work actually happens in your organization, highlighting the true
            drivers of success.
          </p>
        </div>

        {/* Horizontal Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-5`}
              >
                {step.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              {/* Description */}
              <p className="text-muted-foreground mb-6 text-sm">
                {step.description}
              </p>
              {/* Logos or Tags */}
              {step.logos && step.logos.length > 0 ? (
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  {step.logos.map((logo, i) => (
                    <img
                      key={i}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-14 w-8 object-contain"
                      title={logo.alt}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, i) => (
                    <div
                      key={i}
                      className={`h-6 px-2 rounded-full ${step.tagColor} flex items-center justify-center text-xs font-medium`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline (optional visualization) */}
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

        {/* CTA Section (if desired) */}
      </div>
    </section>
  );
};

export default HowItWorks;
