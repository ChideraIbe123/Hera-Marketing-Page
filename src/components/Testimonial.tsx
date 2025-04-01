import React from "react";
import { Button } from "@/components/ui/button";

const CompaniesInterested = () => {
  // Company logos data
  const companies = [
    { name: "Dimension", industry: "Enterprise Software" },
    { name: "Upwork", industry: "Freelance Marketplace" },
    {
      name: "University of Illinois Urbana Champaign",
      industry: "Higher Education",
    },
    { name: "Wiweeki LLC", industry: "Technology Solutions" },
  ];

  return (
    <section id="companies" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-secondary border border-primary/10">
            <span className="text-xs font-medium text-primary">
              Early Adopters
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Companies <span className="text-gradient">interested</span> in
            HeraAI
          </h2>
          <p className="text-muted-foreground text-balance">
            Join these forward-thinking organizations exploring how HeraAI can
            transform their talent recognition and team dynamics.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 md:gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-border flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-40 w-full bg-white rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                {index % 4 === 0 && (
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D0BAQEJjI62XyKFEg/company-logo_200_200/company-logo_200_200/0/1723097467092/joindimension_logo?e=1749081600&v=beta&t=rD1dY2aVwouqOuPovRHGahKCVDKMjsMhYnP9wpugZgo"
                    alt={`${company.name} visual`}
                    className="w-full h-full object-contain p-2"
                  />
                )}
                {index % 4 === 1 && (
                  <img
                    src="https://media.licdn.com/dms/image/v2/D560BAQFHVb6ZSCipCw/company-logo_200_200/company-logo_200_200/0/1727104517379/upwork_logo?e=1749081600&v=beta&t=cApXDmEYm-SSEvOhUyfPS-2CiaWNWKBIeRJKg_pj_Eg"
                    alt={`${company.name} visual`}
                    className="w-full h-full object-contain p-2"
                  />
                )}
                {index % 4 === 2 && (
                  <img
                    src="https://media.licdn.com/dms/image/v2/C4E0BAQGFFDl_Z9pIAA/company-logo_200_200/company-logo_200_200/0/1630611684443/university_of_illinois_at_urbana_champaign_logo?e=1749081600&v=beta&t=rnJbJxRYPgXts50SwaLmxOVV74puJabSRvwb-9OFCkE"
                    alt={`${company.name} visual`}
                    className="w-full h-full object-contain p-2"
                  />
                )}
                {index % 4 === 3 && (
                  <img
                    src="https://media.licdn.com/dms/image/v2/C560BAQFe9jounX93-g/company-logo_200_200/company-logo_200_200/0/1631301731886?e=1749081600&v=beta&t=TkKtimQCC4QwqAPRpDtcD5vm5Mo2uEefSLoe5Lg8lkc"
                    alt={`${company.name} visual`}
                    className="w-full h-full object-contain p-2"
                  />
                )}
              </div>
              <h3 className="font-bold text-sm mb-1 text-center">
                {company.name}
              </h3>
              <p className="text-xs text-muted-foreground text-center">
                {company.industry}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            onClick={() =>
              document
                .getElementById("waitlist-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Join these companies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompaniesInterested;
