import React from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Prod from "./Components/Categories/Categories";
import DietCalc from "./Components/DietPlan/DietCalc";
import NavBar from "./Components/Navbar/Navbar";
import ProductDisplay from "./Components/ProductPage/ProtienPowder";
import Gainer from "./Components/ProductPage/Gainer";
import PrePostWorkout from "./Components/ProductPage/PrePostWorkout";
import CartPage from "./Components/CartPage/CartPage";
import FitFoods from "./Components/ProductPage/FitFoods";
import FatLoss from "./Components/ProductPage/FatLoss";
import Vitamins from "./Components/ProductPage/Vitamins";
import ProductDesc from "./Components/ProductDescPage/ProductDesc";
import Test from "./Components/Test/Test";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Categories" element={<Prod />} />
          <Route exact path="/DietCalc" element={<DietCalc />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/CartPage" element={<CartPage/>} />
          <Route exact path="/ProductDisplay" element={<ProductDisplay/>} />
          <Route exact path="/Gainer" element={<Gainer/>} />
          <Route exact path="/PrePostWorkout" element={<PrePostWorkout/>} />
          <Route exact path="/FitFoods" element={<FitFoods/>} />
          <Route exact path="/FatLoss" element={<FatLoss/>} />
          <Route exact path="/Vitamins" element={<Vitamins/>} />
          <Route exact path="/ProductDesc" element={<ProductDesc/>} />
          <Route exact path="/Test" element={<Test/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

