import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutMe"
import Portfolio from "./pages/Porfolio"
import Services from "./pages/Service"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
