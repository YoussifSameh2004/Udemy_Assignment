import React from "react";

function AISection() {
  return (
    <section className="ai-section">
      <div className="ai-inner">
        <div className="ai-text">
          <h2>Reimagine your career in the AI era</h2>
          <p className="ai-subtitle">
            Future-proof your skills with Personal Plan. Get access to a variety
            of fresh content from real-world experts.
          </p>

          <div className="ai-bullets">
            <div className="ai-bullet">
              <span className="ai-bullet-icon">✴️</span>
              <span>
                <strong>Learn</strong> AI and more
              </span>
            </div>
            <div className="ai-bullet">
              <span className="ai-bullet-icon">🏆</span>
              <span>
                <strong>Prep</strong> for a certification
              </span>
            </div>
            <div className="ai-bullet">
              <span className="ai-bullet-icon">🧑‍🏫</span>
              <span>
                <strong>Practice</strong> with AI coaching
              </span>
            </div>
            <div className="ai-bullet">
              <span className="ai-bullet-icon">🚀</span>
              <span>
                <strong>Advance</strong> your career
              </span>
            </div>
          </div>

          <button className="ai-btn">Learn more</button>
          <p className="ai-price">Starting at E£204.00/month</p>
        </div>

        <div
          className="ai-image"
          style={{
            backgroundImage:
              "url('https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp')",
          }}
        />
      </div>
    </section>
  );
}

export default AISection;
