import React from "react";
import BackpackDino from "./products/BackpackDino";
import RobotDino from "./products/RobotDino";


const MostWanted = () => {
  return (
    <div className="section-wanted">
      <h1 className="title-container-wanted">Lo más buscado</h1>
      <BackpackDino />
      <div className="amount-dino">
        <RobotDino />
      </div>
      <RobotDino />
      <BackpackDino />
    </div>
  );
}

export default MostWanted;