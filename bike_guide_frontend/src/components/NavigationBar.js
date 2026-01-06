import React, { useState } from "react";
import "./NavigationBar.css";

const SECTIONS = ["Home", "Brakes", "Tires", "Chain", "Tools"];

// PUBLIC_INTERFACE
function NavigationBar({ currentSection, onSectionChange }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // PUBLIC_INTERFACE
  const handleNavClick = (section) => {
    onSectionChange(section);
    setSidebarOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-mobile">
        <button
          className="navbar-hamburger"
          aria-label="Open navigation menu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
            <rect y="5" width="28" height="3" rx="1.5" fill="#3b82f6" />
            <rect y="12.5" width="28" height="3" rx="1.5" fill="#64748b" />
            <rect y="20" width="28" height="3" rx="1.5" fill="#3b82f6" />
          </svg>
        </button>
        <span className="navbar-title">Bike Maintenance Guide</span>
      </div>
      <ul className={`navbar-links ${sidebarOpen ? "open" : ""}`}>
        {SECTIONS.map((section) => (
          <li
            key={section}
            className={`navbar-link${currentSection === section ? " active" : ""}`}
          >
            <button
              onClick={() => handleNavClick(section)}
              tabIndex={0}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
      {/* Overlay for sidebar on mobile */}
      {sidebarOpen ? (
        <div className="navbar-sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      ) : null}
    </nav>
  );
}

export default NavigationBar;
