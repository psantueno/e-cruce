import React from "react";
import BackpackDino from "./BackpackDino";
import RobotDino from "./RobotDino";
import Timer from "../assets/images/timer.png"


const MostWantedTimer = () => {
  return (
    <div className="container-wanted-timer">
      <img className="image-container-wanted" src={Timer} alt="reloj timer"></img>
      <div className="section-wanted">
        <BackpackDino />
        <RobotDino />
        <RobotDino />
        <BackpackDino />
      </div>
    </div>
  );
}

export default MostWantedTimer;