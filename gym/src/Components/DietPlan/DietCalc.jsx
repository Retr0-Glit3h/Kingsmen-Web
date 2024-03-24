import React from "react";
import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './DietCalc.css'
import './DietCard.css'
import '../Fonts.css'
import FooterNew from "../Footer/Footer";
import TopRedirect from "../TopRedirectButton/TopRedirect";
// import Accordion from 'react-bootstrap/Accordion';

const DietCalc = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0); 

    const handleChange1 = (event) => {
        setWeight(event.target.value);
    };

    const handleChange2 = (event) => {
        setHeight(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    var bmi = 0
    var h = height / 100
    bmi = weight / (h * h)

    const BmiText = () => {
            if (bmi < 18.5 && bmi > 0) {
                return(<p className="input__description" style={{color:"#FFD369"}}>You are Underweight</p>)
            } 
            else if (bmi >= 18.5 && bmi < 25){
                return(<p className="input__description" style={{color:"#FFD369"}}>You are Normal</p>)
            }
            else if (bmi >= 25 && bmi < 30){
                return(<p className="input__description" style={{color:"#FFD369"}}>You are Overweight</p>)
            }
            else if (bmi >= 30){
                return(<p className="input__description" style={{color:"#FFD369"}}>You are Obese</p>)
            }
        }

    const DietPlan = () => {
            if (height === 0 || weight === 0) {
                return(<p className="dietPlan__description" style={{color: "#fff", textAlign:"center"}}>
                    Enter your weight and height to get your diet plan!
                    </p>)
            }

            else if (height === null || weight === null) {
                return(<p className="dietPlan__description" style={{color: "#fff", textAlign:"center"}}>
                    Invalid weight and height!
                </p>)
            }

            else if (height < 0 || weight < 0) {
                return(<p className="dietPlan__description" style={{color: "#fff", textAlign:"center"}}>
                    Invalid weight and height!
                </p>)
            }

            else if (bmi < 18.5 && bmi > 0) {
                return(<p className="dietPlan__description" style={{color: "#fff"}}>
                    If you are underweight, you may need to make some changes to your diet to gain weight. Here are some tips:
                    <br/><br/>
                    <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <label className="Mont800">Vegetarian</label>
                    </AccordionSummary>
                    <AccordionDetails>
                            <ul style={{paddingLeft:"10px"}}>
                                <li><label className="Mont800">Breakfast</label>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Oatmeal with berries and nuts</li>
                                            <li>Yogurt with fruit and granola</li>
                                            <li>Smoothie made with fruits, yogurt, vegetables and protein powder</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><label className="Mont800">Lunch</label>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Chickpea salad sandwich on whole-wheat bread</li>
                                            <li>Lentil soup with whole-wheat bread</li>
                                            <li>Tofu stir-fry with brown ricer</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><label className="Mont800">Dinner</label>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Vegetarian chili</li>
                                            <li>Pasta with tomato sauce and vegetables</li>
                                            <li>Lentil soup</li>
                                            <li>Black bean burgers with sweet potato fries</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><label className="Mont800">Snacks</label>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                        <li>Trail mix (nuts, seeds, and dried fruit)</li>
                                        <li>Fruits and vegetables</li>
                                        <li>Hard-boiled eggs</li>
                                        <li>Protein shakes</li>
                                        <li>Avocado toast</li>
                                        </i>
                                    </ul>
                                </li>
                            </ul>
                    </AccordionDetails>
                     </Accordion>   
                        <br/>
                    <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <label className="Mont800">Non-Vegetarian</label>
                    </AccordionSummary>
                    <AccordionDetails >
                    <ul style={{paddingLeft:"10px"}}>
                                <li><label className="Mont800">Breakfast</label>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Oatmeal with berries and nuts</li>
                                            <li>Yogurt with fruit and granola</li>
                                            <li>Whole-wheat toast with avocado and eggs</li>
                                            <li>Smoothie made with fruits, yogurt, and protein powder</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><label className="Mont800">Lunch</label>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Salad with grilled chicken or fish</li>
                                            <li>Soup and sandwich</li>
                                            <li>Leftovers from dinner</li>
                                            <li>Chicken tikka / Paneer sandwich on whole-wheat bread with avocado</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><label className="Mont800">Dinner</label>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Grilled salmon with roasted vegetables</li>
                                            <li>Chicken stir-fry with brown rice</li>
                                            <li>Lentil soup</li>
                                            <li>Pasta with lean protein and vegetables</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><label className="Mont800">Snacks</label>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                        <li>Fruits and vegetables</li>
                                        <li>Nuts and seeds</li>
                                        <li>Hard-boiled eggs</li>
                                        <li>Protein shakes</li>
                                        <li>Trail mix</li>
                                        </i>
                                    </ul>
                                </li>
                            </ul>
                    </AccordionDetails>
                    </Accordion>
                    <br/>
                    You should also aim to eat three meals and two to three snacks per day. This will help you to consume more calories throughout the day.
                    <br/><br/>
                    If you are struggling to gain weight, you may want to consider talking to your doctor or a registered dietitian. They can help you to create a personalized diet plan that meets your individual needs.
                </p>)
            } 
            else if (bmi >= 18.5 && bmi < 25){
                return(<p className="dietPlan__description" style={{color: "#fff"}}>
                    This is a healthy BMI, so no major changes to your diet are necessary. However, it is still important to eat a balanced diet that includes plenty of fruits, vegetables, whole grains, and lean protein.
                    </p>)
            }
            else if (bmi >= 25 && bmi < 30){
                return(<p className="dietPlan__description" style={{color: "#fff"}}>                   
                            If you are overweight, you may need to make some changes to your diet to lose weight. Here are some tips:
                            <ul>
                                <li>Choose fiber-rich foods, such as fruits, vegetables, and whole grains.</li>
                                <li>Choose lean sources of protein, such as fish and beans.</li>
                                <li>Limit processed foods, sugary drinks, and unhealthy fats.</li>
                                <li>Eat plenty of fruits and vegetables.</li>
                                <li>Limit alcohol.</li>
                                <li>Exercise regularly.</li>
                            </ul>
                    </p>)
            }
            else if (bmi >= 30){
                return(<p className="dietPlan__description" style={{color: "#fff"}}>
                    If you are obese, you may need to make some significant changes to your diet to lose weight and improve your health. Here are some tips:
                    <ul>
                        <li>Eat a healthy diet that is low in calories and high in nutrients.</li>
                        <li>Avoid processed foods, sugary drinks, and unhealthy fats.</li>
                        <li>Eat plenty of fruits and vegetables.</li>
                        <li>Limit alcohol.</li>
                        <li>Exercise regularly.</li>
                    </ul>
                    <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <label className="Mont800">Vegetarian</label>
                    </AccordionSummary>
                    <AccordionDetails>
                    <ul>
                        <li>Breakfast
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Oatmeal with berries and nuts</li>
                                    <li>Yogurt with fruit and granola</li>
                                    <li>Smoothie made with fruits, yogurt, vegetables and protein powder</li>
                                </i>
                            </ul>
                        </li>
                        <li>Lunch
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Salad with grilled tofu or tempeh</li>
                                    <li>Lentil soup with whole-wheat bread</li>
                                    <li>Tofu stir-fry with brown rice</li>
                                </i>
                            </ul>
                        </li>
                        <li>Dinner
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Vegetarian chili</li>
                                    <li>Pasta with tomato sauce and vegetables</li>
                                    <li>Black bean burgers with sweet potato fries</li>
                                </i>
                            </ul>
                        </li>
                        <li>Snacks
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                <li>Trail mix (nuts, seeds, and dried fruit)</li>
                                <li>Protein shakes</li>
                                <li>Avocado toast</li>
                                </i>
                            </ul>
                        </li>
                    </ul>
                    </AccordionDetails>
                     </Accordion>   
                        <br/>
                    <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <label className="Mont800">Non-Vegetarian</label>
                    </AccordionSummary>
                    <AccordionDetails >
                <ul>
                        <li>Breakfast
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Oatmeal with berries and nuts</li>
                                    <li>Yogurt with fruit and granola</li>
                                    <li>Whole-wheat toast with avocado and eggs</li>
                                </i>
                            </ul>
                        </li>
                        <li>Lunch
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Salad with grilled chicken or fish</li>
                                    <li>Soup and sandwich</li>
                                    <li>Leftovers from dinner</li>
                                </i>
                            </ul>
                        </li>
                        <li>Dinner
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Grilled salmon with roasted vegetables</li>
                                    <li>Chicken stir-fry with brown rice</li>
                                    <li>Lentil soup</li>
                                </i>
                            </ul>
                        </li>
                        <li>Snacks
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Fruits and vegetables</li>
                                    <li>Nuts and seeds</li>
                                    <li>Hard-boiled eggs</li>
                                </i>
                            </ul>
                        </li>
                    </ul>
                    </AccordionDetails>
                    </Accordion>
            <br/>
        </p>)
            }
        }
    
    return (<>
    <section className="topSec" id="top">
            <div className="BmiCardAlign">
                <div>
                
                <div className="bmiInfoCard" style={{fontSize:13}}>
                    <h1 className="Mont800" style={{color:"#FFD369", fontSize:30}}>BMI <span className="Mont800" style={{color:"#393E46"}}>Calculator</span></h1>
                    <p className="Mont400">BMI calculator is a tool that estimates the amount of body fat a person has. It is calculated by dividing weight in kilograms by the square of height in meters.</p>
                    <p className="Mont400">BMI is a good general indicator of whether a person is underweight, normal weight, overweight, or obese. However, it is important to note that BMI does not take into account muscle mass or body composition. For example, a very muscular person may have a high BMI even though they have a low percentage of body fat.</p>
                </div>
                </div>
            </div>
        <div className="col alignBox">
            {/* BMI Calculator */}
            <form className="card1" onSubmit={handleSubmit}>
                <h1 className='Mont800 al_txt' style={{color:"#FFD369"}} >BMI Calculator</h1>
                <label class="input__label">Weight (in kgs)</label>
                <input className="input" placeholder="Enter your weight" type="number" value={weight} onChange={handleChange1}/>
                <br/>
                <label class="input__label">Height (in cms)</label>
                <input className="input" placeholder="Enter your height" type="number" value={height} onChange={handleChange2}/>
                <p className="input__description">BMI: {bmi.toFixed(2)}</p>
                <BmiText/>
            </form>
            <br></br>
            <br></br>

            {/* Diet Plan */}
            <div className="card2 ">
                <h1 className="Mont800 al_txt"  style={{color:"#FFD369", flexDirection:"row"}}>Diet Plan</h1>
                <div style={{ flexGrow: 0 }}>
                    <DietPlan/>
                </div>
            </div>
        </div>
        {/* <div className="BmiCardAlign alnNote">
                <div className="abtCard1" style={{fontSize:12}}>
                <h1 className="Mont800" style={{color:"#393E46", fontSize:20}}>*Note</h1>
                    <p className="Mont400">BMI is a useful tool for screening for weight categories that may lead to health problems, but it is important to note that it has some limitations. For example, BMI does not:
                        <ul >
                            <i>
                            <li className="Mont400">Take into account muscle mass or body composition.</li>
                            <li className="Mont400">Accurately reflect body fat percentage in certain groups of people, such as athletes, pregnant women, and the elderly.</li>
                            <li className="Mont400">Diagnose body fatness or health problems.</li>
                            </i>
                        </ul>
                        <p className="Mont400" style={{color:"#ff4d40"}}>*If you have any concerns about your weight or health, it is important to talk to your doctor.*</p>
                    </p>
                </div>
            </div> */}
    </section>
    <section className="bottomSec">
        
    </section>
    <TopRedirect location="#top"/>
    <FooterNew/>
    
    </>);
  }
  
  export default DietCalc;