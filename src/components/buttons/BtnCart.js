import React from "react";
import Cart from "../../assets/images/carrito.png";


const BtnCart = () => {

    return (
        <div className="container-cart">
            <img className="cart" src={Cart} alt="Logo carrito" ></img>
        </div>
    )
}

export default BtnCart;