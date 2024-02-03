import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Product from "./pages/product";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
