// import React from "react";
import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "../component/global/Navbar";
// import Footer from "../component/global/Footer";
// import Contact from "../pages/Contact";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import App from "../App";

function Routing() {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default Routing;
