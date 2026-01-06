import React from "react";
import "./GuideSection.css";

// PUBLIC_INTERFACE
function GuideSection({ section, guide, filter }) {
  if (!guide) return null;
  if (section === "Home") {
    return (
      <div className="guidesection-root">
        <h2 className="guidesection-title home">{guide.title}</h2>
        <p className="guidesection-desc home">{guide.description}</p>
      </div>
    );
  }

  // Filter steps
  const steps = guide.steps.filter(step =>
    (step.title + step.description)
      .toLowerCase()
      .includes(filter.trim().toLowerCase())
  );

  return (
    <section className="guidesection-root">
      <div className="guidesection-header">
        <span className="guidesection-emoji">{guide.icon}</span>
        <h2 className="guidesection-title">{guide.title}</h2>
      </div>
      <div className="guidesection-list">
        {steps.length === 0 ? (
          <p className="guidesection-nosteps">No matching steps.</p>
        ) : (
          steps.map((step, idx) => (
            <div key={step.id} className="guidesection-step">
              <span className="guidesection-stepicon">{step.icon}</span>
              <div>
                <div className="guidesection-steptitle">{step.title}</div>
                <div className="guidesection-stepdesc">{step.description}</div>
              </div>
              <div className="guidesection-stepnum">
                Step {idx + 1}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default GuideSection;
