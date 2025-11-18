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
    switch (page) {
      case "explore":
        return <SimplePage title="Explore" />;
      case "plans":
        return <SimplePage title="Plans & Pricing" />;
      case "business":
        return <SimplePage title="Udemy Business" />;
      case "teach":
        return <SimplePage title="Teach on Udemy" />;
      case "login":
        return <SimplePage title="Login" />;
      case "signup":
        return <SimplePage title="Sign up" />;
      case "search":
        return (
          <section className="simple-page">
            <h2>Search results for: “{searchQuery}”</h2>
          </section>
        );
      default:
        return <HomePage />;
    }
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
