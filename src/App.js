import "./App.css";
import DenseAppBar from "./Appbar";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer";

function App() {
  
  return (
  <div className="App">
    <DenseAppBar />

    <Routes>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/aboutme" element={<AboutMe/>}></Route>
      <Route path="/" element={<AboutMe/>}></Route>
      <Route path="/education" element={<Education/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/contactme" element={<ContactMe/>}></Route>
      
    </Routes>
    <Footer />

    
  </div>
  )
}

export default App;


function NotFound(){
  return(
    <div>
      <h3>Not Found</h3>
    </div>
  )
}






