import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div  className="bg-gradient-to-r from-slate-900 to-slate-800 h-fit pt-8 overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/contacts" element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
