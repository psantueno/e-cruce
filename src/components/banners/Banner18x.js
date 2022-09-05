import React from "react";
import { useRef } from "react";
import Alert18 from "../../assets/images/pestania.png";

const Banner18x = () => {

    const cuotas18 = useRef();

    const close = () => {
        cuotas18.current.style.display = "none";
    }

    return (
        <div className="box-18x" ref={cuotas18}>
            <img src={Alert18} className="button-18x" alt="18 cuotas sin interés"></img>
            <i onClick={close} id="icono-cerrar" className="far fa-times-circle"></i>
            <p id="title-18x">Aprovechá hasta 18 cuotas sin interés</p>
        </div>
    )
}

export default Banner18x;