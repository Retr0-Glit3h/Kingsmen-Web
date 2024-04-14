import React, {useState, useEffect} from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Prod from "./Components/Categories/Categories";
import ProductDesc from "./Components/ProductDescPage/ProductDesc";
import CategoriesPage from "./Components/Categories/CategoriesPage/CategoriesPage";
import Test from "./Components/Test/Test";
import Signin from "./Components/Authentication/Signin";
import Signup from "./Components/Authentication/Signup";
import Error from "./Components/Error/Error"
import CartPage from "./Components/CartPage/CartPage";

function App() {
  const [token, setToken] = useState(false);

  if(token){
    localStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if(localStorage.getItem("token")){
      let data = JSON.parse(localStorage.getItem("token"));
      setToken(data);
    }
    else{
      setToken(false);
    }
  },[]);

  return (
    <>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin setToken={setToken}/>} />
          <Route exact path="/Signup" element={<Signup />} />
          {token?<Route exact path="/home" element={<Home token={token}/>} />:""}
          {token?<Route exact path="/Categories" element={<Prod token={token}/>} />:""}
          {token?<Route exact path="/Categories/:id" element={<CategoriesPage token={token}/>} />:""}
          {token?<Route exact path="/About" element={<About token={token}/>} />:""}
          {token?<Route exact path="/Details/:id" element={<ProductDesc token={token}/>} />:""}
          {token?<Route exact path="/Test" element={<Test token={token}/>} />:""}
          {token?<Route exact path="/Cart" element={<CartPage token={token}/>} />:""}

          <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
  
    
  }
  


export default App;

