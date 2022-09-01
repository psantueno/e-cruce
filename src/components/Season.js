import React from "react";
import SectionProducts from "./SectionProducts";

const Season = () => {

    return (

        <React.Fragment>
            <div className="container-season">
                <div>
                    <h1 className="top-banner-mobile">Llegó el invierno, encontralo antes que nadie</h1>
                </div>
                <SectionProducts />
                <SectionProducts />
                <div className="box-button">
                    <button id="btn-collection-mobile">Ver colección</button>
                </div>
            </div>
        </React.Fragment >
    )

}

export default Season;