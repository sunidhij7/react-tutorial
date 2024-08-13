import React, { useState, useEffect } from "react";
import "./Cards.css";
import Icon from "../../ReusableComponents/Icon/Icon.js";
import BlackButton from "../../ReusableComponents/BlackButton/BlackButton.js";
import Modal from "../Modal/Modal.js";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);

  useEffect(() => {
    fetch("http://localhost:5002/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="card--left">
            <Icon iconData={card.svgdata} />
          </div>
          <div className="card--right">
            <h4 className="card--right__title">{card.title}</h4>
            <p className="card--right__description">{card.description}</p>
              <BlackButton onClick={() => openModal(card.id)} buttonTitle={card.button} />
            {openModalId === card.id && (
              <Modal
                isOpen={true}
                onClose={closeModal}
                className="card--modal"
                modalData={card.modaldata}
                modalHeading ={card.button}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
