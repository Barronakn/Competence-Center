import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Competence-Center" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
