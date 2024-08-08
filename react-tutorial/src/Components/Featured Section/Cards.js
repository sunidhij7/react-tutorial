import React, { useState, useEffect } from "react";
import Plane from "../Icons/Plane.js"
import ReusableIcon from "../ReusableIcon.jsx";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {cards.map((cards) => (
          <div className="feature-card">
          <div className="feature-card__left">
            <ReusableIcon iconData={cards.svgdata}/>
            {/* <img src="{cards.svg}" alt="icon"/> */}
          </div>
          <div className="feature-card__right">
            <h4 className="feature-card__heading">{cards.title}</h4>
            <p className="feature-card__text">{cards.description}</p>
            <button className="modal__trigger-button black-button">
              {cards.button}
            </button>
          </div>
        </div>
        ))}
    </>
  );
};

export default Cards;
