import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./Test.css";

function Test() {
  const [data, setData] = useState([]);
  // Fetches the watchlist from the database
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("Products").select();
    setData(data);
  }
  console.log(data);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Price</th>
            <th>Product Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((match) => (
            <tr key={match.id}>
              <td>{match.ProductName}</td>
              <td> <img src={match.ProductImg}/></td>
              <td>{match.ProductPrice}</td>
              <td>{match.ProductCategory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Test;
