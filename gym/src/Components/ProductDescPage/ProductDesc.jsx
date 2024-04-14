import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./ProductDesc.css";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import FooterNew from "../Footer/Footer";
import { supabase } from "../supabaseClient.jsx";
import NavBar from "../Navbar/Navbar.jsx";


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

    const handleAddToCart = () => {
        // storing product id in local storage with key "productID"
        if(localStorage.getItem("cartData")) {
            let cartData = JSON.parse(localStorage.getItem("cartData"));
            cartData.push(id);
            localStorage.setItem("cartData", JSON.stringify(cartData));
        }
        else {
            let cartData = [];
            cartData.push(id);
            localStorage.setItem("cartData", JSON.stringify(cartData));
        }
        alert("Product added to cart");
    }
    

    return(<>
    <NavBar />
    <section className="sectProdAln">
        <div >
            <div className="row">
                <div className="col-md-2">
                    <div className="prodImg">
                        <img src={productData.ProductImg} alt="product" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="prodDesc">
                        <div className="alignProdTitleInfo">
                            <span className="productTitleMain">{productData.ProductName}</span>
                            <span className="productPriceMain">Price: <span className="productPriceMain2">₹ {productData.ProductPrice}</span></span>
                        </div>
                        <div className="btnAlign">
                            <button className="ATCbtn" onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                        <div className="horizontalLine" />
                        <div className="prodShip">
                            <div className="prodShipAlign">
                                <LocalShippingOutlinedIcon />
                                <span>Free Shipping</span>
                            </div>
                            <div className="prodShipAlign">
                                <ScreenRotationAltIcon />
                                <span>14 Days return</span>
                            </div>
                            <div className="prodShipAlign">
                                <ShieldOutlinedIcon />
                                <span>Secure Transaction</span>
                            </div>
                            
                        </div>
                        <div className="horizontalLine" />
                        <p className="productPriceDesc">{productData?productData.Description:"No Data"}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    <FooterNew />
    </>)
}

export default ProductDesc;
