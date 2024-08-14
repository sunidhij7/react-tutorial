import React from "react";
import "./EndSection.css";
import ReusableButton from "../ReusableComponents/ReusableButton/ReusableButton";

export default function EndSection() {
  return (
    <>
      <div class="section-header">
        <h2 class="section-heading section-title">
          More ways to grow your business{" "}
        </h2>
      </div>

      <div class="table-container last-section">
        <h4>Brevo Transactional emails</h4>
        <h3>Follow your transactional email metrics on your homepage</h3>
        <p>
          How many emails did you send today? What is the delivery rate? How
          many hard bounces? Add a dashboard to your homepage to drive your
          transactional email activity.
        </p>
        <ReusableButton
          variant="black-button"
          buttonTitle="Show transactional emails on the homepage"
        />
      </div>
    </>
  );
}
