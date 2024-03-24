import React from "react";
import PrePostWorkoutCard from "./ProductCard/PrePostWorkoutCard";
import PrePostWorkoutData from "./ProductData/PrePostWorkoutData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const PrePostWorkout = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Pre/Post <span className="Mont800" style={{color:"white"}}>Workout</span></h1>
        <p className="Mont400" style={{fontSize:13}}>We offer the best pre-workout supplements & post-workout supplements that help in boosting your performance & recovery and delaying fatigue along with boosting muscle growth.</p>
          <div className="ProdAlnCard">
              {PrePostWorkoutData.map((PrePostWorkoutData) => (
                  <PrePostWorkoutCard key={PrePostWorkoutData.id} PrePostWorkoutData={PrePostWorkoutData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default PrePostWorkout;
