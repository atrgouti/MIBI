import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenClothing from "./pages/MenClothing";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Men" element={<MenClothing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
