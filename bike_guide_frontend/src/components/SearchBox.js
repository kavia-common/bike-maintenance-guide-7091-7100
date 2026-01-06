import React from "react";
import "./SearchBox.css";

// PUBLIC_INTERFACE
function SearchBox({ value, setValue, placeholder = "Search steps..." }) {
  return (
    <div className="searchbox-container">
      <input
        type="search"
        className="searchbox-input"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        autoComplete="off"
      />
      <span className="searchbox-icon" aria-hidden="true">
        <svg width="21" height="21" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="7" stroke="#64748b" strokeWidth="2"/>
          <rect x="14.1" y="14.9" width="5" height="2" rx="1" transform="rotate(-45 14.1 14.9)" fill="#64748b"/>
        </svg>
      </span>
    </div>
  );
}

export default SearchBox;
