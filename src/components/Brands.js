import React from "react";
import Disney from "../assets/images/disney.png";
import Marvel from "../assets/images/marvel.png";
import Funko from "../assets/images/funko.png";
import Lol from "../assets/images/lol.png";

const Brands = () => {
    return (

        <div className="brands">
                    <div className="our-brands">
                        <h1 className="brands-banner-mobile">Nuestras marcas</h1>
                    </div>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Disney} className="img-brand" alt="Marca Disney"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={Marvel} className="img-brand" alt="Marca Marvel"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={Funko} className="img-brand" alt="Marca Funko"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={Lol} className="img-brand" alt="Marca Lol"></img>
                            </div>
                        </div>
                    </div>
                </div>
        
    );
}

export default Brands;