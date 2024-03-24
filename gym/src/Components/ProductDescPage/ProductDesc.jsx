import React from "react";
import "./ProductDesc.css";
import CartButton from "../CartPage/CartButtons/CartButton";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import FooterNew from "../Footer/Footer";


function ProductDesc() {
    return(<>
    <br/>
    <section className="sectProdAln">
        <div className="prodDescImgCard">
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">Home</Link>
            <Link underline="hover" color="inherit" to="/Categories">Categories</Link>
            <Link underline="hover" color="inherit" to="/ProductDisplay">Protien Powder</Link>
            <Link underline="hover" color="text.primary" to="/ProductDesc" aria-current="page">Breadcrumbs</Link>
        </Breadcrumbs>
            <div className="productDescImg">
                <img src="https://img4.hkrtcdn.com/30466/prd_3046513-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg" alt="product" />
                <img className="prodimgInfo" src="https://img4.hkrtcdn.com/27177/bnr_2717634_o.jpg" alt="product" />
            </div>
        </div>
        <div className="prodDescInfo">
            <span className="Mont400">Whey Protiens</span>
            <h2 className="Mont800">MuscleBlaze Biozyme Performance Whey</h2>
            <p className="Mont600">2 kg (4.4 lb), Rich Chocolate</p>
            <div className="prodDescPrice">
                <p className="Mont400">MRP: <s>₹3,999</s></p>
                <h3 className="Mont600" style={{fontSize:23}}>Price: ₹5,999 <span style={{color:"#23B295", fontSize:16}}>(33% off)</span></h3>
                <p className="Mont400" style={{fontSize:14}}>Inclusive all Taxes</p>
                <hr />
                <div className="quantityBtn">
                    <span>Select Quantity</span>
                    <CartButton />
                </div>
                <hr />
                <div className="prodDescShipping">
                    <LocalShippingOutlinedIcon style={{fontSize:30, transform: "scaleX(-1)"}}/> 
                    <span className="Mont600" style={{fontSize:"20px"}}> Deliver to</span>
                    <br/>
                    <span className="Mont400" style={{fontSize:14}}>Enter Pincode to check Delivery Date</span>
                    <div class="inputCoupon">
                        <input type="text" class="CouponTxt" id="Coupon" name="Coupon" placeholder="Enter Pincode" autocomplete="off" />
                        <input class="button--submit" value="Check" type="submit" />
                    </div>
                </div>
                <hr />
                <div>
                    <p className="Mont600 vl-2">Product Benefits</p>
                    <div className="benAln">
                        <ul>
                            <li className="Mont400">"INFORMED CHOICE, UK, LABDOOR, USA & TRUSTIFIED- TESTED & CERTIFIED It has been regularly & rigorously tested, certified by Informed Choice Program U.K., Labdoor USA, Trustified for Accuracy of label Claims (Protein content, no amino spiking) & Purity (free from heavy metals or biological contaminants)"</li>
                            <li className="Mont400">ENHANCED ABSORPTION FORMULA (EAF ®) in MB Biozyme Performance Whey ensures 50% higher protein absorption & 60% superior BCAA absorption compared to other whey proteins. This proprietary formulation of MB is international patent-applied</li>
                            <li className="Mont400">FIRST CLINICALLY TESTED Whey Protein offerings in India, the leading Biozyme range by MuscleBlaze ® is proven for efficacy of absorption, having direct impact on muscle-building</li>
                            <li className="Mont400">EASY PROTEIN DIGESTION in Biozyme Performance Whey makes it widely recommended since it significantly lowers any possible stomach discomfort/ challenge from protein digestion</li>
                            <li className="Mont400">25g PROTEIN, 11.75g EAA, 5.51g BCAA- Biozyme Performance Whey delivers all this per scoop powered by all-imported, highest grade, international quality Whey Protein Concentrate</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div>
                    <span className="Mont400">Per 36gm of 56 servings Contains*</span>
                    <div className="prodNutriCardAln">
                            <div className="prodNutriCard">
                                <span >25g</span>
                                <span className="Mont400" style={{fontSize:10}}>of Protien</span>  
                            </div>
                            <div className="prodNutriCard">
                                <span >5.51g</span>
                                <span className="Mont400" style={{fontSize:10}}>of BCAA</span>  
                            </div>
                            <div className="prodNutriCard">
                                <span >11.75g</span>
                                <span className="Mont400" style={{fontSize:10}}>of EAA</span>  
                            </div>
                            <div className="prodNutriCard">
                                <span >4.38g</span>
                                <span className="Mont400" style={{fontSize:10}}>of Glutamic acid</span>  
                            </div>
                            <div className="prodNutriCard">
                                <span >141</span>
                                <span className="Mont400" style={{fontSize:10}}>of Kcal</span>  
                            </div>
                            <div className="prodNutriCard">
                                <span >69.0</span>
                                <span className="Mont400" style={{fontSize:10}}>of Protien % per Serving</span>  
                            </div>
                    </div>
                </div>
                <hr />
                <div className="alnProdGuarantee">
                    <div className="alnProdGuaranteeIcon boxLine">
                        <img src="https://static1.hkrtcdn.com/mbnext/static/media/icons/revamp/100safe_v1.svg" alt="" />
                        <span className="Mont400">Authenticity Guaranteed</span>
                    </div>
                    <div className="alnProdGuaranteeIcon boxLine">
                        <img src="https://static1.hkrtcdn.com/mbnext/static/media/pdp/return_product_icon_v1.svg" alt="" />
                        <span className="Mont400">14 Days Returnable</span>
                    </div>
                    <div className="alnProdGuaranteeIcon boxLine">
                        <img src="https://static1.hkrtcdn.com/mbnext/static/media/icons/revamp/shipping_new_v1.svg" alt="" />
                        <span className="Mont400">Free Shipping</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    </section>
    <FooterNew />
    </>)
}

export default ProductDesc;
