import React from "react";
import Cards from "./Cards/Cards.js";
import './Featured.css'

export default function Featured() {
  return (
    <>
      <h2 className="section-heading">Featured</h2>
      <div className="card-container">
        <Cards/>
      </div>
    </>
  );
}
