import React from "react";
import Robot from "../assets/images/robot-dino.png"

const RobotDino = () => {
    return (
    <div className="box-product-wanted">
        <div id="product-wanted-row">
            <img id="img-wanted" src={Robot} alt="Juguete robot dinosaurio para armar"></img>
            <section className="info-wanted-column">
                <h4 className="title-product-wanted">Dinosaurio robot para armar</h4>
                <br/>
                <h4 className="price-wanted-final">$1.350</h4>
            </section>    
        </div>    
    </div>
    );
  }
  
  export default RobotDino;