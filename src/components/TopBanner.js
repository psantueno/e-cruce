import React from "react";

const TopBanner = () => {

    return (

        <React.Fragment>

            {/*<!-- TopBanner mobile-->*/}
            <div className="slider">
                <p>Mantené pulsado cualquier artículo para agregarlo al carrito   <i class="fas fa-times"></i> </p>
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
            {/*<!-- End of TopBanner mobile-->*/}

        </React.Fragment>
    )

}

export default TopBanner;