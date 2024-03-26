import React from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Prod from "./Components/Categories/Categories";
import DietCalc from "./Components/DietPlan/DietCalc";
import NavBar from "./Components/Navbar/Navbar";
import ProductDesc from "./Components/ProductDescPage/ProductDesc";
import CategoriesPage from "./Components/Categories/CategoriesPage/CategoriesPage";
import Test from "./Components/Test/Test";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Categories" element={<Prod />} />
          <Route exact path="/Categories/:id" element={<CategoriesPage />} />
          <Route exact path="/DietCalc" element={<DietCalc />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/ProductDesc" element={<ProductDesc/>} />
          <Route exact path="/Test" element={<Test/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

