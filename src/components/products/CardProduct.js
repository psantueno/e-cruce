import React from "react";
import Product1 from "../../assets/images/4048.png";
import Cart from "../../assets/images/cart.png";

const CardProduct = () => {
    
    return (
    <div className="cardProduct">
        <img className="image-product" src={Product1} alt="Funko Pop" />
        <h4  className="brand-product" id="neue-machina">Funko</h4>
        <h4 className="title-product">Funko POP | Game Of Thrones - Daenerys 25</h4>
        <h4 className="payment-product">6 Cuotas s/interés de</h4>
        <h4 className="installments"><b>$211,50</b></h4>
        <div className="box-price">
            <div className="text-final">Final:</div> 
            <div className="without-discount">$2390</div> 
            <div className="with-discount"><b>$1.269</b></div>
        </div>
        {/* <div className="box-cart">
            <img className="icon-cart" src={Cart} alt="Logo cart"/>
        </div> */}
    </div>
    );
  }
  
  export default CardProduct;