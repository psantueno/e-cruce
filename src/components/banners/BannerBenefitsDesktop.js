import React from "react";
import Cuotas from "../../assets/images/beneficio-cuotas.png";
import SendFree from "../../assets/images/beneficio-envio.png";
import SendExpress from "../../assets/images/beneficio-24hs.png";


const BannerBenefitsDesktop = () => {

    return (

        <div className="container-benefits-desktop">
                <img src={Cuotas} className="img-benefit" alt="12 y 18 cuotas sin interés"></img>
                <div className="rotate-border"></div>
                <img src={SendFree} id="send-free" className="img-benefit" alt="Envíos gratis en todas las compras"></img>
                <div className="rotate-border"></div>
                <img src={SendExpress} id="send-24hs" className="img-benefit" alt="Envío dentro de las 24 hs con costo adicional"></img>
            </div>
    )
}

export default BannerBenefitsDesktop;