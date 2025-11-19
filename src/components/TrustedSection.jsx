import React from "react";
import { trustedCompanies } from "../data/companies";

function TrustedSection() {
  return (
    <section className="trusted-section">
      <div className="trusted-inner">
        <p className="trusted-text">
          Trusted by over 17,000 companies and millions of learners around the world
        </p>

        <div className="trusted-logos">
          {trustedCompanies.map((company) => (
            <span key={company.name} className="trusted-logo">
              <img
                src={company.img}
                alt={company.name}
                className="trusted-logo-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.style.display = "inline-block";
                }}
              />
              <span className="trusted-logo-fallback">
                {company.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
