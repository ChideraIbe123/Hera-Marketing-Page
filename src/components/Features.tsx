import React, { useRef, useEffect } from "react";
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
import video from "./demo.mp4";

const Features = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current
            .play()
            .catch((e) => console.log("Auto-play failed:", e));
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

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
            <div className="w-full max-w-6xl relative">
              <div className="relative aspect-video w-full bg-white rounded-xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  src={video}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f8fafc'/%3E%3C/svg%3E"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
