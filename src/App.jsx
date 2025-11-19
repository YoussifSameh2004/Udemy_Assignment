import React, { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SimplePage from "./pages/SimplePage";

function App() {
  const [page, setPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    setPage("search");
  };

  const renderContent = () => {
    if (page === "explore") return <SimplePage title="Explore" />;
    if (page === "plans") return <SimplePage title="Plans & Pricing" />;
    if (page === "business") return <SimplePage title="Udemy Business" />;
    if (page === "teach") return <SimplePage title="Teach on Udemy" />;
    if (page === "login") return <SimplePage title="Login" />;
    if (page === "signup") return <SimplePage title="Sign up" />;

    if (page === "search") {
      return (
        <section className="simple-page">
          <h2>Search results for: “{searchQuery}”</h2>
        </section>
      );
    }

    return <HomePage />;
  };

  return (
    <div className="Udemy-page">
      <Header
        page={page}
        setPage={setPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />

      <main className="content">{renderContent()}</main>
    </div>
  );
}

export default App;
