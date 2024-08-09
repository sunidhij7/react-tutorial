import React, { useState, useEffect } from "react";
import './Accordion.css'

const Accordion = () => {

    const [accordions, setAccordions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5002/accordion")
          .then((response) => response.json())
          .then((data) => setAccordions(data))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
    

  return (
    <div className="accordion ">
      <h2 className="section-heading">Accordion</h2>
      <ul className="accordion-container">
      {accordions.map((accordion) => (
        <li className="last-row row accordion-row" key={accordion.id}>
        <button className="accordian--trigger">{accordion.title}</button>
        <div className="accordion--panel">
          <p>{accordion.content} </p>
        </div>
      </li>
      ))}
      </ul>
      <button className="open-all-button">Expand All</button>
      <button className="close-all-button">Collapse All</button>
    </div>
  )
}

export default Accordion;

