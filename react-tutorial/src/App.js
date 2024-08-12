import './App.css';
import Accordion from './Components/Accordion section/Accordion.js';
import Featured from './Components/Featured Section/Featured.js';
import Header from './Components/Header/Header.js'
import Dropdown from './Components/Dropdown Section/Dropdown.js';
import EndSection from './Components/End Section/EndSection.js';
import RecentCampaigns from './Components/Recent Campaigns Section/RecentCampaigns.js';
import NextActivities from './Components/Next Activities Section/NextActivities.js';

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
