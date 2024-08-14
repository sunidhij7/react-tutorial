import React from "react";
import Table from "../ReusableComponents/Table/Table";
import ReusableButton from "../ReusableComponents/ReusableButton/ReusableButton";

const RecentCampaigns = () => {
  const apiUrl = "https://run.mocky.io/v3/1107f63f-87c0-4cc8-a43a-bfa2d695c15b";

  return (
    <>
      <div className="section-header">
        <h2 className="section-heading section-title">Recent campaigns</h2>
        <ReusableButton buttonTitle="Go to Campaigns" variant="purple-button"/>
        <ReusableButton buttonTitle="Create a campaign" variant="grey-button"/>
      </div>
      <Table apiUrl={apiUrl} dataKey="recentCampaigns" />
    </>
  );
};

export default RecentCampaigns;
