import React from "react";
import Cuotas from "../assets/images/beneficio-cuotas.png";
import SendFree from "../assets/images/beneficio-envio.png";
import SendExpress from "../assets/images/beneficio-24hs.png";
import Next from "../assets/images/arrow-next.png";
import Prev from "../assets/images/arrow-prev.png";

const Benefits = () => {

    return (

        <div className="benefits">
            <div id="carouselExampleControls" className="carousel slide" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Cuotas} className="img-benefit" alt="12 y 18 cuotas sin interés"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={SendFree} className="img-benefit" alt="Envíos gratis en todas las compras"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={SendExpress} className="img-benefit" alt="Envío dentro de las 24 hs con costo adicional"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" id="without-shadow" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span>
                        <img src={Prev} className="carousel-control-prev-icon" aria-hidden="true" alt="Anterior beneficio"></img>
                    </span>
                </button>
                <button className="carousel-control-next" id="without-shadow" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">
                        <img src={Next} className="carousel-control-next-icon" aria-hidden="true" alt="Siguiente beneficio"></img>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Benefits;