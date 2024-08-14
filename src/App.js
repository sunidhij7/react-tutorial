import './App.css';
import Accordion from './Components/AccordionSection/Accordion.js';
import Featured from './Components/FeaturedSection/Featured.js';
import Header from './Components/Header/Header.js'
import Dropdown from './Components/DropdownSection/Dropdown.js';
import EndSection from './Components/EndSection/EndSection.js';
import RecentCampaigns from './Components/RecentCampaignsSection/RecentCampaigns.js';
import NextActivities from './Components/NextActivitiesSection/NextActivities.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Featured/>      
      <Accordion/>
      <Dropdown/>
      <RecentCampaigns/>
      <NextActivities/>
      <EndSection/>
    </div>
  );
}

export default App;
