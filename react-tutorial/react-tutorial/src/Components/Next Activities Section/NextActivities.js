import React from "react";
import Table from "../ReusableComponents/Table/Table";

const NextActivities = () => {
  const apiUrl = "http://localhost:5002/nextActivities"; // The API URL you want to pass

  return (
    <>
      <div className="section-header">
        <h2 class="section-heading section-title">Next Activities</h2>
        <button className="section-heading__button purple-button">
          Go to tasks
        </button>
        <button class="section-heading__button grey-button">
          Create a task
        </button>
      </div>
      <Table apiUrl={apiUrl} />
    </>
  );
};

export default NextActivities;
