import React, { useState } from "react";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setPage("search");
  };

  const renderContent = () => {
    switch (page) {
      case "explore":
        return <h2>Explore page</h2>;
      case "plans":
        return <h2>Plans &amp; Pricing page</h2>;
      case "business":
        return <h2>Udemy Business page</h2>;
      case "teach":
        return <h2>Teach on Udemy page</h2>;
      case "login":
        return <h2>Login page (placeholder)</h2>;
      case "signup":
        return <h2>Sign up page (placeholder)</h2>;
      case "search":
        return <h2>Search results for: “{searchQuery}”</h2>;
      default:
        return <h2>Home page</h2>;
    }
  };

  return (
    <div className="Udemy-page">
      {/* Top promo bar */}
      <div className="promo-section">
        <span>
          Prices as low as <strong>E£259.99</strong> | Get new skills risk-free.
          <span className="promo-timer"> Ends in 5h 58m 24s.</span>
        </span>
        <button className="promo-close">×</button>
      </div>

      {/* Main header */}
      <header className="header">
        {/* logo */}
        <div className="logo" onClick={() => setPage("home")}>
          <img
            src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
          />
        </div>

        {/* Explore */}
        <button className="text-link" onClick={() => setPage("explore")}>
          Explore
        </button>

        {/* Search bar */}
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <span className="search-emoji">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Right text links */}
        <nav className="nav-links">
          <button className="text-link" onClick={() => setPage("plans")}>
            Plans &amp; Pricing
          </button>
          <button className="text-link" onClick={() => setPage("business")}>
            Udemy Business
          </button>
          <button className="text-link" onClick={() => setPage("teach")}>
            Teach on Udemy
          </button>
        </nav>

        {/* Cart icon */}
        <button className="icon-btn">🛒</button>

        {/* Auth buttons */}
        <div className="auth-buttons">
          <button className="btn-outline" onClick={() => setPage("login")}>
            Log in
          </button>
          <button className="btn-solid" onClick={() => setPage("signup")}>
            Sign up
          </button>
          <button className="icon-btn globe-btn">🌐</button>
        </div>
      </header>

      {/* Page content */}
      <main className="content">
        {/* Hero only on home page */}
        {page === "home" && (
          <>
            <section className="hero">
              <button className="hero-arrow hero-arrow-left">‹</button>

              <div className="hero-inner">
                <div className="hero-card">
                  <h1>Jump into learning — for less</h1>
                  <p>
                    If you&apos;re new to Udemy, we&apos;ve got good news: For a
                    limited time, courses start at just E£259.99 for new
                    learners!
                  </p>
                  <button className="btn-solid hero-btn">Sign up now</button>
                </div>

                <div
                  className="hero-image"
                  style={{
                    backgroundImage:
                      "url('https://img-c.udemycdn.com/notices/web_carousel_slide/image/4f9d4123-43ee-4f2a-b5ef-1f2ac22962f3.jpg')",
                  }}
                ></div>
              </div>

              <button className="hero-arrow hero-arrow-right">›</button>
            </section>

            {/* NEW skills section (the screenshot you sent) */}
            <section className="skills-section">
              <div className="skills-inner">
                {/* left text */}
                <div className="skills-text">
                  <h2>Learn essential career and life skills</h2>
                  <p>
                    Udemy helps you build in-demand skills fast and advance your
                    career in a changing job market.
                  </p>
                </div>

                {/* right cards */}
                <div className="skills-cards">
                  {/* Card 1 */}
                  <article className="skills-card">
                    <div
                      className="skills-card-image"
                      style={{
                        backgroundImage:
                          "url('https://cms-images.udemycdn.com/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png')",
                      }}
                    ></div>
                    <div className="skills-card-body">
                      <div className="skills-card-meta">
                        <span className="skills-card-tag">📚 1M+</span>
                      </div>
                      <h3>Generative AI</h3>
                      <span className="skills-card-arrow">→</span>
                    </div>
                  </article>

                  {/* Card 2 */}
                  <article className="skills-card">
                    <div
                      className="skills-card-image"
                      style={{
                        backgroundImage:
                          "url('https://cms-images.udemycdn.com/96883mtakkm8/5Pyb4XbnD2CBt6TgiSBB8v/26f6893300dadc86519907b854b430de/certifications.png')",
                      }}
                    ></div>
                    <div className="skills-card-body">
                      <div className="skills-card-meta">
                        <span className="skills-card-tag">🎓 14.4M+</span>
                      </div>
                      <h3>IT Certifications</h3>
                      <span className="skills-card-arrow">→</span>
                    </div>
                  </article>

                  {/* Card 3 */}
                  <article className="skills-card">
                    <div
                      className="skills-card-image"
                      style={{
                        backgroundImage:
                          "url('https://cms-images.udemycdn.com/96883mtakkm8/6QeCzvTvnqKN6tI18U0Wmg/cebc19b24d374ec1cab549a9c7a93020/data-science.png')",
                      }}
                    ></div>
                    <div className="skills-card-body">
                      <div className="skills-card-meta">
                        <span className="skills-card-tag">📊 8M+</span>
                      </div>
                      <h3>Data Science</h3>
                      <span className="skills-card-arrow">→</span>
                    </div>
                  </article>

                  {/* fake slider controls */}
                  <div className="skills-slider-controls">
                    <button className="skills-slider-arrow">‹</button>
                    <div className="skills-dots">
                      <span className="dot"></span>
                      <span className="dot dot-active"></span>
                      <span className="dot"></span>
                    </div>
                    <button className="skills-slider-arrow">›</button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {renderContent()}
      </main>
    </div>
  );
}

export default App;
