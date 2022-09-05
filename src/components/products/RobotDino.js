import React from "react";
import Robot from "../../assets/images/robot-dino.png"

const RobotDino = () => {
    return (
    <div className="box-product-wanted">
        <div id="product-wanted-row">
            <img id="img-wanted" src={Robot} alt="Juguete robot dinosaurio para armar"></img>
            <section className="info-wanted-column">
                <h4 className="title-product-wanted">Dinosaurio robot para armar</h4>
                <h4 className="price-wanted">$1.500</h4>
                <h4 className="price-wanted-dues">$1.350</h4>
            </section>    
        </div>    
    </div>
    );
  }
  
  export default RobotDino;