import React from "react";
import Jack from "../assets/images/funko-jack.png";

const NotFound = () => {

    return (
        <div>
            <h1>404 Not Found</h1>
            <p>La página a la que usted intenta acceder no existe.</p>
            <div className="conatiner-jack">
                <img className="imgJack" src={Jack} alt="Funko Jack" ></img>
            </div>
        </div>
    )
}

export default NotFound;