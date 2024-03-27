import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./ProductDesc.css";
import CartButton from "../CartPage/CartButtons/CartButton";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FooterNew from "../Footer/Footer";
import { supabase } from "../supabaseClient.jsx";


function ProductDesc() {

    const {id} = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProductsData();
    }, [id]);

    async function getProductsData() {
        const { data } = await supabase.from("Products").select();
        const product = data.filter((product) => product.ProductID === id);
        setProductData(product[0]);
        console.log(product);
    }
    

    return(<>
    <br/>
    <section className="sectProdAln">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="prodImg">
                        <img src={productData.ProductImg} alt="product" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="prodDesc">
                        <h2>{productData.ProductName}</h2>
                        <p>{productData?productData.ProductDesc:"No Data"}</p>
                        <h3>Price: Rs {productData.ProductPrice}</h3>
                        <div className="prodBtn">
                            <CartButton />
                        </div>
                        <div className="prodShip">
                            <LocalShippingOutlinedIcon />
                            <span>Free Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    <FooterNew />
    </>)
}

export default ProductDesc;
