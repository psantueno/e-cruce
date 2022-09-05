import React from "react";
import Backpack from "../../assets/images/mochila.png"

const BackpackDino = () => {
    return (
    <div className="box-product-wanted">
        <div id="product-wanted-row">
            <img id="img-wanted" src={Backpack} alt="Mochila de ToyStory Dinosaurio Rex"></img>
            <section className="info-wanted-column">
                <h4 className="title-product-wanted">Mochila de ToyStory Dinosaurio REX</h4>
                <h4 className="price-wanted-final">$2.580</h4>
            </section>    
        </div>
    </div>
    );
  }
  
  export default BackpackDino;