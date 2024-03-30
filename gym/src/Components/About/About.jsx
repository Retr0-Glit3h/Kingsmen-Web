import React from "react";
import "./About.css";
import "../Fonts.css";
import FooterNew from "../Footer/Footer.jsx";
import TopRedirect from "../TopRedirectButton/TopRedirect";

const About = () =>{
    return(<>
    <section className="alignAboutItems imgFull" id="abtTop" style={{backgroundSize: 'cover', backgroundImage: `url("https://wallpaperaccess.com/full/4975987.jpg")`}}>
        <div className="cardAlign">
            <h1 className="Mont800" style={{color:"white"}}>Kingsmen <span className="Mont800" style={{color:"#FFD369"}}>Suits</span></h1>
            <div className="abtCard1">
                <p className="Mont400">Welcome to Kingsmen Suits where timeless sophistication meets impeccable craftsmanship , and leads to the creation of elegent suits for different occasions.</p>
                <p className="Mont400">Here suit are made in such a way which gives you Comfort and Confidence at the same time .Here you will understand the difference between 'Wearing a suit' and 'Suiting Up' </p>
            </div>
            <br/><br/>
        </div>
    </section>
    <section className="sectSide1" >
        <div style={{paddingTop:"250px" , paddingLeft:"200px", paddingBottom:"50px" }}>
            <div className="abtCard2">
                <img src="https://www.looper.com/img/gallery/the-secret-meaning-behind-aldo-rains-undercover-name-in-inglourious-basterds/intro-1609892771.jpg" alt="about"/>
            </div>
        </div>
        <div>
            <div className="alnContentRight">
                <h1 className="Mont800" style={{color:"#393E46"}}>The  <span className="Mont800" style={{color:"#FFD369"}}> Origin </span></h1>
                <p className="Mont400"></p>
                <p className="Mont400">Established in 1949, Kingsmen is an Italy based company with unparalleled craftsmanship and timeless designs.It was founded by Mr.Enzo Gorlomi with a vision to revolutionize the world of menswear,He went on a journey to redefine what it means to wear a suit. He Once said "Un albero attraversa anni di lotta per diventare grande e risaltare in una folla di piccoli alberi, allo stesso modo farò un abito per uomini che hanno lottato per anni per distinguersi in un gruppo di popoli" which translates to "A Tree goes through years of struggle to become big and standout in a croud of small trees, in the same way I'll make suit for men who has struggled for years to standout in a group of peoples" </p>
            </div>
        </div>
    </section>
    <section className="sectSide1" style={{backgroundColor:"#838383"}}>
        <div>
            <div className="alnContentLeft">
                <h1 className="Mont800" style={{color:"#FFF"}}>Product<span className="Mont800" style={{color:"#393E46"}}> & Progress</span></h1>
                <p className="Mont400" style={{color:"#393E46"}}>At Kingsmen, every suit tells a story of meticulous craftsmanship and attention to detail. From the selection of the finest fabrics to the precision tailoring by our skilled artisans, each garment is crafted with utmost care and dedication. We take pride in the quality of our workmanship, ensuring that every stitch reflects our commitment to excellence.</p>
                <p className="Mont400" style={{color:"#393E46"}}>Hence keeping it only till Italy would have been Dishonorable. So Mr. Dominic Gorlomi Son of mr.Enzo Gorlomi opened many outlets and spread the company all over Europe and USA in the year 1969. And in the year 2010 Ms.Alessia Gorlomi Grand child of Enzo Gorlami Made the company Globle through internet. </p>
            </div>
        </div>
        <div style={{paddingTop:"250px" , paddingRight:"150px", paddingBottom:"50px" }}>
            <div className="abtCard3">
                <img src="https://i.pinimg.com/736x/fe/bc/bb/febcbb34fcead6b3ac7894baea63b1a9.jpg" alt="about"/>
            </div>
        </div>
    </section>
    <section className="sectSide1">
        <div style={{paddingTop:"250px" , paddingLeft:"200px", paddingBottom:"50px" }}>
            <div className="abtCard4">
                <img src="https://www.suitsexpert.com/wp-content/uploads/2019/08/most-expensive-mens-suits-cover-1080x675.jpg" alt="about"/>
            </div>
        </div>
        <div>
            <div className="alnContentRight">
                <h1 className="Mont800" style={{color:"#FFD369"}}>Qualitied <span className="Mont800" style={{color:"#393E46"}}>Suits</span></h1>
                <p className="Mont400">Quality is the cornerstone of everything we do at Kingsmen. We source premium fabrics from renowned mills around the world, ensuring that our suits not only look exceptional but also feel luxurious to wear. Our rigorous quality control processes guarantee that each garment meets our exacting standards before it reaches our customers.</p>
                <p className="Mont400">Our vision is to empower men to embrace their individuality and express their personal style through impeccably tailored suits. We aspire to be the destination of choice for discerning gentlemen seeking quality, sophistication, and timeless elegance in their wardrobe.</p>
            </div>
        </div>
    </section>
    <TopRedirect location="#abtTop"/>
    <FooterNew/>
    </>);
}

export default About;