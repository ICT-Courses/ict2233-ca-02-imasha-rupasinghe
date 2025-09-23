import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home' ;
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  
return (
    <><div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

      </Routes>
      </div>
    </>
      );
    }
export default App;
