import React from "react";
import SectionProducts from "./SectionProducts";
import BtnCollection from "./buttons/BtnCollection";

const Season = () => {

    return (

        <React.Fragment>
            <div className="container-season">
                <div className="title-season-mobile">
                    <h1 className="top-banner-title">Llegó el invierno, encontralo antes que nadie</h1>
                </div>
                <SectionProducts />
                <div className="title-season-desktop">
                    <h1 className="top-banner-title">Llegó el invierno, encontralo antes que nadie</h1>
                    <h5 className="top-banner-subtitle">La colección más completa de Game of Thrones está en X</h5>
                    <div className="btn-collection-desktop">
                        <BtnCollection />
                    </div>
                </div>
                <SectionProducts />
                <div className="section-products-plus">
                    <SectionProducts />
                </div>
                <div className="btn-collection-mobile">
                    <BtnCollection />
                </div>
            </div>
        </React.Fragment >
    )

}

export default Season;