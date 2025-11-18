import React from "react";

function Hero() {
  return (
    <section className="hero">
      <button className="hero-arrow hero-arrow-left">‹</button>

      <div className="hero-inner">
        <div className="hero-card">
          <h1>Jump into learning — for less</h1>
          <p>
            If you&apos;re new to Udemy, we&apos;ve got good news: For a limited
            time, courses start at just E£259.99 for new learners!
          </p>
          <button className="btn-solid hero-btn">Sign up now</button>
        </div>

        <div
          className="hero-image"
          style={{
            backgroundImage:
              "url('https://img-c.udemycdn.com/notices/web_carousel_slide/image/4f9d4123-43ee-4f2a-b5ef-1f2ac22962f3.jpg')",
          }}
        />
      </div>

      <button className="hero-arrow hero-arrow-right">›</button>
    </section>
  );
}

export default Hero;
