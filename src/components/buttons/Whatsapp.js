import React from "react";
import { Link } from "react-router-dom";
import Wapp from "../../assets/images/whatsapp.png";

const Whatsapp = () => {

    return (
        <Link className="button-whatsapp" to="//wa.me/5491198765432" target="_blank" rel="noopener noreferrer">
            <img className="button-whatsapp" src={Wapp} alt="Icono de Whatsapp"></img>
        </Link>
    )
}

export default Whatsapp;