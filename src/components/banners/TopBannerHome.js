import React from "react";

const TopBannerHome = () => {

    return (
        <React.Fragment>
            <div className="container-topbanner-home">
            <div className="slider">
                <p className="top-banner-tablet">Mantené pulsado cualquier artículo para agregarlo al carrito   <i className="fas fa-times"></i> </p>
                <div className="container-topbanner-desktop">
                    <p className="top-banner-desktop">Sólo por hoy: envío gratis en todos los productos!</p>
                    <i className="fas fa-times"></i>
                </div>
                <div className="slide-track">
                    <div className="slide">
                        <div>Mantené pulsado cualquier artículo para agregarlo al carrito - </div>
                    </div>
                    <div className="slide">
                        <div>Mantené pulsado cualquier artículo para agregarlo al carrito - </div>
                    </div>
                    <div className="slide">
                        <div>Mantené pulsado cualquier artículo para agregarlo al carrito - </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment >
    )

}

export default TopBannerHome;