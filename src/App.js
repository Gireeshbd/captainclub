
import './App.css';
import Navbar from"./components/Navbar/navbar.js"
import Welcome from './components/welcome/welcome';
import Team from './components/team/team.js';
import Faq from './components/faq/faq';
import Roadmap from './components/roadmap/roadmap';
import Onramper from './components/onramper/onramper';
import About from './components/aboutus/aboutus';
function App() {
  return (
    <div className="App">
       <Navbar/>
      <Welcome/>
      <About/>
      <Roadmap />
      <Team />
      <Faq/>
    </div>
  );
}

export default App;
