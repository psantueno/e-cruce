import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/images/logo.png"
import Cart from "../assets/images/carrito.png"
import { FaBars } from "react-icons/fa";


const Header = () => {

    return (

        <React.Fragment>

            {/*<!-- Header -->*/}
            <header>
                <div className="main-header">

                    {/* <!-- Start menu mobile--> */}
                    <button className="btn-burguer" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaBars className="fa-bars" />
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><Link class="dropdown-item" to="/listproducts">Productos</Link></li>
                        <li><Link class="dropdown-item" to="/#footer">Contacto</Link></li>
                    </ul>
                    <div className="container-cruce">
                        <img className="logo" src={Logo} alt="Logo" ></img>
                    </div>
                    <div className="container-cart">
                        <img className="cart" src={Cart} alt="Logo" ></img>
                    </div>


                    {/* <!-- End menu mobile--> */}

                </div>


            </header>
            {/*<!-- End of Header -->*/}

        </React.Fragment>
    )

}

export default Header;