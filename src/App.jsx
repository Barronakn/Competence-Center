import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cours from "./pages/Cours";
import Learn from "./pages/Learn";
import Ressources from "./pages/Ressources";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/Ressources" element={<Ressources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
