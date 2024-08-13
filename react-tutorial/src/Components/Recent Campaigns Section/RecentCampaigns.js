import React from "react";
import Table from "../ReusableComponents/Table/Table";

const RecentCampaigns = () => {
  const apiUrl = "http://localhost:3000/recentCampaigns";

  return (
    <>
      <div className="section-header">
        <h2 class="section-heading section-title">Recent campaigns</h2>
        <button className="section-heading__button purple-button">
          Go to Campaigns
        </button>
        <button class="section-heading__button grey-button">
          Create a campaign
        </button>
      </div>
      <Table apiUrl={apiUrl} />
    </>
  );
};

export default RecentCampaigns;
