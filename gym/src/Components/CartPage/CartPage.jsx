import React, { useState, useEffect } from "react";
import CartPageCard from "./CartPageCard/CartPageCard";
import FooterNew from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import { supabase } from "../supabaseClient";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import "./CartPage.css";

function CartPage() {
  var TotalValue = 0;

  const cartData = JSON.parse(localStorage.getItem("cartData"));

  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterData();
  }, [products, cartData]);

  async function filterData() {
    if (!products.length || !cartData) return;

    const filteredProducts = [];
    for (const productId of cartData) {
      const { data: product } = await supabase
        .from("Products")
        .select()
        .eq("ProductID", productId)
        .single();
      filteredProducts.push(product);
    }

    setFilteredData(filteredProducts);
  }

  async function getProducts() {
    const { data } = await supabase.from("Products").select();
    setProducts(data);
  }

  const handleRemoveAll = () => {
    localStorage.removeItem("cartData");
    window.location.reload();
    setFilteredData([]);
  };

  return (
    <>
      <NavBar />
      <section className="cartPage">
        <h1 className="Mont800" style={{ textAlign: "center", color: "#FFC746" }}>
              Cart
        </h1>
        <div className="cartPageAlign">
          <div>
            <div className="CartPageContBox">
              {filteredData.map((product) => (
                <CartPageCard key={product.ProductID} CartPageData={product} />
              ))}
            </div>
            <button className="removeBtn" onClick={handleRemoveAll}>Remove All</button>
          </div>
          <div className="verticalCartDivide"/>
          <div className="checkoutCardAln">
            <CheckoutCard data={filteredData}/>
          </div>
        </div>
      </section>
      <FooterNew />
    </>
  );
}

export default CartPage;
