import React from "react";
import BackpackDino from "./products/BackpackDino";
import RobotDino from "./products/RobotDino";
import Timer from "../assets/images/timer.png"


const MostWantedTimer = () => {
  return (
    <div className="container-wanted-timer">
      <img className="image-container-wanted" src={Timer} alt="reloj timer"></img>
      <div className="section-wanted">
        <BackpackDino />
        <div className="amount-dino">
          <RobotDino />
        </div>
        <RobotDino />
        <BackpackDino />
      </div>
    </div>
  );
}

export default MostWantedTimer;