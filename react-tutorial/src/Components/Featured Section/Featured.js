import React from "react";
import Cards from "./Cards.js";

export default function Featured() {
  return (
    <>
      <h2 className="section-heading">Featured</h2>
      <div className="feature-card-container">
        <Cards/>
      </div>
    </>
  );
}
