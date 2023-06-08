import About from "./Composents/About";
import Contact from "./Composents/Contact";
import Home from "./Composents/Home";
import NavBar from "./Composents/NavBar";
import Portfolio from "./Composents/Portfolio";
import Skills from "./Composents/Skills";
import SocialLinks from "./Composents/SocialLinks";


function App() {
  return (
    <div>
      <NavBar/>  
      <SocialLinks/>    
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
