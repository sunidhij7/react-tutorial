import React from "react";
import CloseButton from "../../ReusableComponents/CloseButton";
import "./Modal.css";

export default function Modal({ modalData, isOpen, onClose, modalHeading }) {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("card--modal")) {
      onClose();
    }
  };

  return (
    <div className="card--modal" onClick={handleOutsideClick}>
      <div className="card--modal__panel">
        <div className="card--modal__panel--header">
          <h2 className="card--modal__panel--header__title">{modalHeading}</h2>
          <div
            onClick={handleClose}
            className="card--modal__panel--header__closebtn"
          >
            <CloseButton />
          </div>
        </div>
        <div
          className=".card--modal__panel--text"
        >
          <p>{modalData}</p>
        </div>
      </div>
    </div>
  );
}
