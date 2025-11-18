import React from "react";
import { trustedCompanies } from "../data/companies";

function TrustedSection() {
  return (
    <section className="trusted-section">
      <div className="trusted-inner">
        <p className="trusted-text">
          Trusted by over 17,000 companies and millions of learners around the
          world
        </p>

        <div className="trusted-logos">
          {trustedCompanies.map((name) => (
            <span key={name} className="trusted-logo">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
