import React from "react";
import { Link } from "react-router-dom";

const NavBarHead = () => {

    return (
        <div className="navbar-head">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                    <li className="breadcrumb-item"><Link to="#">Juguetes</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Funko Pop</li>
                </ol>
            </nav>
        </div>
    )
}

export default NavBarHead;
