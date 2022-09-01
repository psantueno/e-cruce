import React from "react";
import BackpackDino from "./BackpackDino";
import RobotDino from "./RobotDino";


const MostWanted = () => {
  return (
    <div className="section-wanted">
        <h1 className="title-container-wanted">Lo más buscado</h1>
        <BackpackDino />
        <RobotDino />
        <RobotDino />
        <BackpackDino />
        
    </div>
  );
}

export default MostWanted;