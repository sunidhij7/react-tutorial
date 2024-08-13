import React, { useState, useEffect } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [accordions, setAccordions] = useState([]);
  const [activeAccordionId, setActiveAccordionId] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/1107f63f-87c0-4cc8-a43a-bfa2d695c15b")
      .then((response) => response.json())
      .then((data) => setAccordions(data.accordion))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleAccordion = (id) => {
    setActiveAccordionId((prevId) => (prevId === id ? null : id));
  };

  const handleExpandAll = () => {
    setExpandAll(true);
    setActiveAccordionId(null); // To ensure all are expanded regardless of individual state
  };

  const handleCollapseAll = () => {
    setExpandAll(false);
    setActiveAccordionId(null);
  };

  return (
    <div className="accordion">
      <h2 className="section-heading">Accordion</h2>
      <ul className="accordion-container">
        {accordions.map((accordion) => {
          const isActive = activeAccordionId === accordion.id;
          const isExpanded = expandAll || isActive;

          return (
            <li 
              className={`row accordion-row ${
                isExpanded ? "open-tab" : ""
              }`}
              key={accordion.id}
            >
              <button
                className={`accordion--trigger ${
                  isActive ? "active" : ""
                }`}
                onClick={() => toggleAccordion(accordion.id)}
              >
                {accordion.title}
              </button>
              <div
                className="accordion--panel"
                style={{ display: isExpanded ? "block" : "none" }}
              >
                <p>{accordion.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="open-all-button" onClick={handleExpandAll}>
        Expand All
      </button>
      <button className="close-all-button" onClick={handleCollapseAll}>
        Collapse All
      </button>
    </div>
  );
};

export default Accordion;
