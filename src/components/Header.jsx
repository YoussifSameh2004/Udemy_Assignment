import React from "react";

function Header({ page, setPage, searchQuery, setSearchQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <>
      {/* Promo bar */}
      <div className="promo-section">
        <span>
          Prices as low as <strong>E£259.99</strong> | Get new skills risk-free.
          <span className="promo-timer"> Ends in 5h 58m 24s.</span>
        </span>
        <button className="promo-close">×</button>
      </div>

      {/* Main header */}
      <header className="header">
        <div className="logo" onClick={() => setPage("home")}>
          <img
            src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
          />
        </div>

        <button className="text-link" onClick={() => setPage("explore")}>
          Explore
        </button>

        <form className="search-bar" onSubmit={handleSubmit}>
          <span className="search-emoji">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

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

        <button className="icon-btn">🛒</button>

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
    </>
  );
}

export default Header;
