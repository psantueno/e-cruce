import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const BtnBurger = () => {

    return (

        <div className="container-burger">
            <button className="btn-burguer" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                <FaBars className="fa-bars" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><Link className="dropdown-item" to="/listproducts">Productos</Link></li>
                <li><Link className="dropdown-item" to="/#footer">Contacto</Link></li>
            </ul>
        </div>

    )
}

export default BtnBurger;