import React from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Prod from "./Components/Categories/Categories";
import NavBar from "./Components/Navbar/Navbar";
import ProductDesc from "./Components/ProductDescPage/ProductDesc";
import CategoriesPage from "./Components/Categories/CategoriesPage/CategoriesPage";
import Test from "./Components/Test/Test";
import Signin from "./Components/Authentication/Signin";
import Signup from "./Components/Authentication/Signup";
function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Categories" element={<Prod />} />
          <Route exact path="/Categories/:id" element={<CategoriesPage />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Details/:id" element={<ProductDesc/>} />
          <Route exact path="/Test" element={<Test/>} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
  
    
  }
  


export default App;

