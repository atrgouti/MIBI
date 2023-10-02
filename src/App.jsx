import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/women" element={<WomenClothing />}></Route>
        <Route path="/Men" element={<MenClothing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
