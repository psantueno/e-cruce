import React from "react";
import Product2 from "../../assets/images/backpack.png";
// import Cart from "../../assets/images/cart.png";

const CardProductCampaign = () => {  // se repite código unicamente para mostrar la mochila.
                                     // Para los demás productos se utilizará, con el fin de establecer el maquetado, una sola imagen del producto funko.
    return (
    <div className="cardProduct">
        <img className="image-product" src={Product2} alt="Mochila Jansport" />
        <h4  className="brand-product" id="neue-machina">Jansport</h4>
        <h4 className="title-product">Mochila Madalyn Floral</h4>
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
  
  export default CardProductCampaign;