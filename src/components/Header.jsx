import React from "react";

function Header(props) {
  const {
    page,
    setPage,
    searchQuery,
    setSearchQuery,
    onSearch,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    onSearch();
  };

  const handleLogoClick = () => {
    setPage("home");
  };

  return (
    <>
      {/* top promo bar */}
      <div className="promo-section">
        <span>
          Prices as low as <strong>E£259.99</strong> | Get new skills risk-free.
          <span className="promo-timer"> Ends in 5h 58m 24s.</span>
        </span>
        <button className="promo-close" type="button">
          ×
        </button>
      </div>

      {/* main header */}
      <header className="header">
        <button className="logo" onClick={handleLogoClick}>
          <img
            src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
          />
        </button>

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

        <button className="icon-btn" type="button">
          🛒
        </button>

        <div className="auth-buttons">
          <button className="btn-outline" onClick={() => setPage("login")}>
            Log in
          </button>
          <button className="btn-solid" onClick={() => setPage("signup")}>
            Sign up
          </button>
          <button className="icon-btn globe-btn" type="button">
            🌐
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
