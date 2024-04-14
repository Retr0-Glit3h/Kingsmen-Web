import React, {useState, useEffect} from "react";
import CarouselHome from "./Carousel/Carousel.jsx";
import ProdCard from "../Prodcard/ProdCard.jsx";
import SeasonalFavs from "./Categories/seasonalFavs.jsx";
import HomeInfoSec from "./HomeInfo/homeInfoSec.jsx";
import "./Home.css";
import "../Fonts.css";
import FooterNew from "../Footer/Footer.jsx";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import { supabase } from "../supabaseClient.jsx"
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
        slidesToShow: 5,
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
            <div>
                <div className="sectionTitleBar">
                    <div class="vl" />
                    <span className="sectionTitle">New <span className="sectionTitle2">Arrivals</span></span>
                </div>
                <div className="rowCard">
                    <Slider {...settings}>
                        {products?products.map((product) => (
                            <ProdCard key={product.id} product={product}/>
                            )):null
                        }
                    </Slider>
                </div>
            </div>
            <div>
                {/* <div className="sectionTitleBar">
                    <div class="vl" />
                    <span className="sectionTitle">Seasonal <span className="sectionTitle2">Collection</span></span>
                </div>
                <div className="seasonalSection">
                    <SeasonalFavs />
                </div> */}
            </div>
            <div>
                <div className="sectionTitleBar">
                    <div class="vl" />
                    <span className="sectionTitle">Seasonal <span className="sectionTitle2">Favs</span></span>
                </div>
                <div className="rowCard">
                    <Slider {...settings}>
                        {products?products.map((product) => (
                            <ProdCard key={product.id} product={product}/>
                            )):null
                        }
                    </Slider>
                </div>
            </div>
            <br/><br/>    
        </section>
        <TopRedirect location="#topCarousel"/>
        <FooterNew/>
    </div>
    </>);

}

export default Home;