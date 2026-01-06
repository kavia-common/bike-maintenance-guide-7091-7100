import React, { useState, useMemo } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SearchBox from "./components/SearchBox";
import GuideSection from "./components/GuideSection";
import { guides } from "./data/guides";

// PUBLIC_INTERFACE
function App() {
  // Default section: Home
  const [currentSection, setCurrentSection] = useState("Home");
  const [filter, setFilter] = useState("");
  // Clear filter on section change
  React.useEffect(() => { setFilter(""); }, [currentSection]);

  const currentGuide = useMemo(() => guides[currentSection], [currentSection]);

  // PUBLIC_INTERFACE
  return (
    <div className="App" style={{ minHeight: "100vh", background: "#f9fafb" }}>
      <NavigationBar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="main-content" style={{
        padding: "2.6rem 1rem 2.2rem 1rem",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {currentSection !== "Home" ? (
          <SearchBox
            value={filter}
            setValue={setFilter}
            placeholder={`Search ${currentSection.toLowerCase()} steps...`}
          />
        ) : null}
        <GuideSection section={currentSection} guide={currentGuide} filter={filter} />
      </main>
      <footer style={{
        width: "100%",
        background: "linear-gradient(90deg, #3b82f61a, #f9fafb 70%)",
        color: "#64748b",
        textAlign: "center",
        padding: "1.15rem 0 0.8rem 0",
        marginTop: "auto",
        fontSize: "0.99rem",
        boxShadow: "0 -2px 10px 0 rgba(59,130,246,0.05)"
      }}>
        <span>
          Bike Maintenance Guide &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}

export default App;
