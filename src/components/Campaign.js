import React from "react";
import CardProductCampaign from "./products/CardProductCampaign";
import CtrlCarousel from "../assets/images/controles-carrusel.png";

import ShowPages from "../assets/images/show-pages.png";
import BigPic from "../assets/images/big-picture.png";
import SmallPic from "../assets/images/small-picture.png";

const Campaign = () => {

    return (

        <div className="container-campaign">
            <div className="images-campaign">
                <img className="img-big" src={BigPic} alt="Fotografía grande"></img>
                <img className="img-small" src={SmallPic} alt="Fotografía chica"></img>
            </div>
            <div className="product-pagination">
                <div className="product-individual">
                    <CardProductCampaign />
                </div>
                <div className="pagination-campaign">
                        <img src={ShowPages} className="pages-info" aria-hidden="true" alt="página"></img>
                        <img src={CtrlCarousel} className="pages-arrows" aria-hidden="true" alt="controles carrousel"></img>
                </div>
            </div>
        </div>
    )
}

export default Campaign;