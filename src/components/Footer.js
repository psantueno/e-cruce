import React from "react";
import Instagram from "../assets/images/instagram.png";
import Facebook from "../assets/images/facebook.png";
import Youtube from "../assets/images/youtube.png";
import Cace from "../assets/images/cace.png";
import Ahora18 from "../assets/images/ahora18.png"
import HotWeek from "../assets/images/hotsale.png";
import Afip from "../assets/images/afip.png";
import Vtex from "../assets/images/vtex.png";
import Cruce from "../assets/images/logo.png";

const Footer = () => {

    return (

        <footer>
            <div id="footer" className="container-footer">
                <div className="footer-top">
                    <div className="contact">
                        <h4 className="title-contact">Contacto</h4>
                        <h6 className="subtitle-contact">MAYORISTAS</h6>
                    </div>
                    <div className="offers">
                        <h6 className="form-title">¿BUSCÁS OFERTAS?</h6>
                        <form className="form-offers">
                            <input placeholder="eMail" className="input-form-email"></input>
                            <button className="button-form">ENVIAR</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="box-redes">
                        <h6 className="items-footer">INSTAGRAM</h6>
                        <h6 className="items-footer">YOUTUBE</h6>
                        <h6 className="items-footer">FACEBOOK</h6>
                    </div>
                    <div className="box-logos">
                        <img className="logo-redes" src={Instagram}></img>
                        <img className="logo-redes" src={Youtube}></img>
                        <img className="logo-redes" src={Facebook}></img>
                    </div>
                    <div className="footer-box-items">
                        <h6 className="items-footer">PREGUNTAS FREC.</h6>
                        <h6 className="items-footer">TÉRM & COND</h6>
                        <h6 className="items-footer">MIS PEDIDOS</h6>
                    </div>
                </div>
                <div className="footer-promo-legal">
                    <div className="box-promos">
                        <img className="logo-cace" src={Cace} alt="Logo CACE"></img>
                        <img className="logo-promo" src={Ahora18} alt="Logo Ahora 18"></img>
                        <img className="logo-hotweek" src={HotWeek} alt="Logo Hot Week"></img>
                    </div>
                    <div className="box-legal">
                        <img src={Afip} alt="Logo Afip"></img>
                        <img src={Vtex} alt="Logo VTEX"></img>
                        <img src={Cruce} alt="Logo Cruce"></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;