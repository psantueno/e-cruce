import React from "react";
import { Link } from "react-router-dom";
import BtnBurger from "../components/buttons/BtnBurger";
import Logo from "../assets/images/logo.png";
import BtnCart from "../components/buttons/BtnCart";
import LogoSale from "../assets/images/logo-sale.png";
import BtnSearch from "../assets/images/buscador.png";


const Header = () => {

    return (

        <React.Fragment>

            {/*<!-- Header -->*/}
            <header>
                <div className="main-header">

                    {/* <!-- Start menu mobile/tablet--> */}

                    <div className="mobile-mainbar">
                        <BtnBurger />
                        <div className="container-cruce">
                            <img className="logo" src={Logo} alt="Logo" ></img>
                        </div>
                        <div className="container-cart">
                            <BtnCart/>
                        </div>
                    </div>
                    {/* <!-- End menu mobile/tablet--> */}

                    {/* <!-- Start menu Desktop--> */}
                    <div className="desktop-mainbar">
                        <div className="box-menu-categories">
                            <BtnBurger />Categorías
                            <button className="btn-mainbar" id="box-lol"><Link className="links-burguer" to="#">LOL</Link></button>
                            <br />
                            <button className="btn-mainbar"><Link className="links-burguer" to="#">CryBabies</Link></button>
                            <br />
                            <button className="btn-mainbar"><Link className="links-burguer" to="/listproducts">Funko</Link></button>
                            <br />
                            <button className="btn-hotsale"><Link className="link-sale" to="#"><img src={LogoSale} alt="Logo Hot Sale"></img></Link></button>
                        </div>
                        <div className="box-buttons-right">
                            <button className="btn-right"><img src={BtnSearch} alt="Buscador"></img></button>
                            <button className="btn-right" id="logo-user"><i className="far fa-user"></i></button>
                            <BtnCart/>
                        </div>
                    </div>
                    {/* <!-- End menu Desktop--> */}
                </div>
            </header>
            {/*<!-- End of Header -->*/}

        </React.Fragment>
    )
}

export default Header;