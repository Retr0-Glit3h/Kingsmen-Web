import React from "react";
import "./About.css";
import "../Fonts.css";
import FooterNew from "../Footer/Footer.jsx";
import TopRedirect from "../TopRedirectButton/TopRedirect";

const About = () =>{
    return(<>
    <section className="alignAboutItems imgFull" id="abtTop" style={{backgroundSize: 'cover', backgroundImage: `url("https://static1.hkrtcdn.com/mbnext/static/media/misc/banner.png")`}}>
        <div className="cardAlign">
            <h1 className="Mont800" style={{color:"white"}}>Our <span className="Mont800" style={{color:"#FFD369"}}>Story</span></h1>
            <p className="Mont600" style={{color:"white"}}>The journey of becoming India’s leading Sports Nutrition Brand</p>
            <div className="abtCard1">
                <p className="Mont400">MuscleBlaze® was founded in 2012 with the idea of providing India with sports nutrition supplements that are specifically focused on Indian customer needs and listens to their sentiments day in day out.</p>
                <p className="Mont400">MuscleBlaze® has quickly risen as consumer’s favorite brand with industry-first concept introductions like authenticity, protein test certificates, scoop on top, clinically researched products, etc.</p>
            </div>
            <br/><br/>
        </div>
    </section>
    <section className="sectSide1" >
        <div style={{paddingTop:"250px" , paddingLeft:"200px", paddingBottom:"50px" }}>
            <div className="abtCard2">
                <img src="https://static1.hkrtcdn.com/mbnext/static/media/aboutUs/img1.png" alt="about"/>
            </div>
        </div>
        <div>
            <div className="alnContentRight">
                <h1 className="Mont800" style={{color:"#FFD369"}}>Industry-First <span className="Mont800" style={{color:"#393E46"}}>Innovations</span></h1>
                <p className="Mont400">Understanding and acting upon the consumer pulse have always driven MuscleBlaze® to provide industry-first solutions. Be it the problem of fake supplements, customers’ tussle in finding the scoop in a new jar or low results from a regular protein supplement, MuscleBlaze® had answers to all of them.</p>
                <p className="Mont400">MuscleBlaze® was the first in India to introduce an SMS based product authenticity mechanism supported by a protein test certificate from NABL certified labs. MuscleBlaze® was also the first to introduce a patented Scoop-on-Top design to end the scoop tussle. And to top it all, MuscleBlaze’s Biozyme Whey is India’s first clinically tested product for Indian bodies which helps the consumers with enhanced protein absorption and thus better results and performance.</p>
            </div>
        </div>
    </section>
    <section className="sectSide1" style={{backgroundColor:"#FFD369"}}>
        <div>
            <div className="alnContentLeft">
                <h1 className="Mont800" style={{color:"#FFF"}}>High-Quality <span className="Mont800" style={{color:"#393E46"}}>Ingredients & Processes</span></h1>
                <p className="Mont400">Our passion for bringing international-grade fitness supplements has made us look around the world to source the very best whey and flavors. At MuscleBlaze® quality doesn’t just end at procuring the finest raw materials.</p>
                <p className="Mont400">The manufacturing of the final products takes place at FSSAI, HACCP certified state of the art plant, which means that your supplement undergoes rigorous testing and multiple quality checks before it reaches you. In order to give more power to your reps and sets, we at MuscleBlaze® work hard to ensure international safety standards. MuscleBlaze® products are tested in accordance with FSSAI standards to assure you complete safety and the highest degree of quality. Put your worries to rest, because it takes a lot for a supplement to become a MuscleBlaze® supplement, your trusted fitness partner.</p>
            </div>
        </div>
        <div style={{paddingTop:"250px" , paddingRight:"150px", paddingBottom:"50px" }}>
            <div className="abtCard3">
                <img src="https://static1.hkrtcdn.com/mbnext/static/media/aboutUs/img2.png" alt="about"/>
            </div>
        </div>
    </section>
    <section className="sectSide1">
        <div style={{paddingTop:"250px" , paddingLeft:"200px", paddingBottom:"50px" }}>
            <div className="abtCard4">
                <img src="https://static1.hkrtcdn.com/mbnext/static/media/aboutUs/img3.png" alt="about"/>
            </div>
        </div>
        <div>
            <div className="alnContentRight">
                <h1 className="Mont800" style={{color:"#FFD369"}}>Research <span className="Mont800" style={{color:"#393E46"}}>Oriented</span></h1>
                <p className="Mont400">Driven by the desire to exceed your expectations, we have brought together pharmaceutical expertise and the best experts of the chocolate flavor to create a path-breaking formulation with unmatched taste.</p>
                <p className="Mont400">This gave birth to the "Best Tasting Chocolate Whey Protein Shake", which was confirmed by the consumers themselves in a blind taste study done by Nielsen in 2015.</p>
                <p className="Mont400">The same research orientation was also the bedrock for the formulation of Biozyme Whey, which was crafted over a 2-year period and clinically tested to provide 50% higher protein absorption. Our commitment to research-backed products helps us in our aim to become a sports nutrition brand that gives you international grade quality supplements and 100% safety assurance at a genuine price.</p>
            </div>
        </div>
    </section>
    <TopRedirect location="#abtTop"/>
    <FooterNew/>
    </>);
}

export default About;