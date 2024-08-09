import './App.css';
import Accordion from './Components/Accordion section/Accordion.js';
import Featured from './Components/Featured Section/Featured.js';
import Header from './Components/Header/Header.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Featured/>      
      <Accordion/>
    </div>
  );
}

export default App;
