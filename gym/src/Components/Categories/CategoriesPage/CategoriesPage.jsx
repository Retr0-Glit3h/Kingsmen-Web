import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import ProdCard  from "../../Prodcard/ProdCard"
import './CategoriesPage.css';
import NavBar from "../../Navbar/Navbar";

const CategoriesPage = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getProducts();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        filterData();
    },[products]);

    function filterData() {
        const filteredData = products.filter((product) => product.ProductCategory === id);
        setFilteredData(filteredData);
    }
  
    async function getProducts() {
        const { data } = await supabase.from("Products").select();
        setProducts(data);
    }

    console.log(filteredData);

    return (<>
        <NavBar/>
        <div className="categoriesPage">
            <h1>{id.toUpperCase()}</h1>
            <div className="ProductCards">
                {filteredData.map((product) => (
                    <ProdCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </>);

}

export default CategoriesPage;