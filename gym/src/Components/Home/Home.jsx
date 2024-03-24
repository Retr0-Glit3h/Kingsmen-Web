import React, {useState, useEffect} from "react";
import CarouselHome from "./Carousel/Carousel.jsx";
import ProdCard from "../Prodcard/ProdCard.jsx";
import HomeInfoSec from "./HomeInfo/homeInfoSec.jsx";
// import ProdData from "../Prodcard/prod_Data.jsx";
import JustLaunchedData from "../Prodcard/JLData.jsx";
import JLCard from "../Prodcard/JLCard.jsx";
import "./Home.css";
import "../Fonts.css";
import FooterNew from "../Footer/Footer.jsx";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import { supabase } from "../Test/supabaseClient.jsx"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () =>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
  
        window.scrollTo(0, 0);
    }, []);
  
    async function getProducts() {
        const { data } = await supabase.from("Products").select();
        setProducts(data);
    }

    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 2,
        swipeToSlide: true,
    };

    return(<>
    <div className="pageAlign">
        <div id="topCarousel">
            <CarouselHome />
        </div>
        <section className="alignHomeItems popSect">
            <br/>
            <div class="vl"><h1 className="Mont800" style={{color:"#393E46", paddingLeft:"10px"}}>Popular</h1></div>
            <br/>
            <div className="rowCard">
            <Slider {...settings}>
                {products?products.map((Prod) => (
                    <ProdCard key={Prod.id} ProdImage={Prod.ProductImg} ProdTitle={Prod.ProductName} ProdPrice={Prod.ProductPrice}/>
                    )):null
                }
            </Slider>
            </div>
            <br/><br/>    
        </section>
        <TopRedirect location="#topCarousel"/>
        <FooterNew/>
    </div>
    </>);

}

export default Home;