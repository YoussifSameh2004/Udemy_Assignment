import React from "react";
import { skillsCards } from "../data/skills";

function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-inner">
        <div className="skills-text">
          <h2>Learn essential career and life skills</h2>
          <p>
            Udemy helps you build in-demand skills fast and advance your career
            in a changing job market.
          </p>
        </div>

        <div className="skills-cards">
          {skillsCards.map((card) => (
            <article key={card.id} className="skills-card">
              <div
                className="skills-card-image"
                style={{ backgroundImage: `url('${card.img}')` }}
              />

              <div className="skills-card-body">
                <div className="skills-card-meta">
                  <span className="skills-card-tag">{card.tag}</span>
                </div>

                <h3>{card.title}</h3>
                <span className="skills-card-arrow">→</span>
              </div>
            </article>
          ))}

          <div className="skills-slider-controls">
            <button className="skills-slider-arrow" type="button">
              ‹
            </button>

            <div className="skills-dots">
              <span className="dot" />
              <span className="dot dot-active" />
              <span className="dot" />
            </div>

            <button className="skills-slider-arrow" type="button">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
