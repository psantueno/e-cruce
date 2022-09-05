import React from "react";
import Disney from "../assets/images/disney.png";
import Marvel from "../assets/images/marvel.png";
import Funko from "../assets/images/funko.png";
import Lol from "../assets/images/lol.png";
import Next from "../assets/images/control-derech.png";
import Prev from "../assets/images/control-izq.png";

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
            <div className="carousel-brands-desktop">
                    <div id="carousel-brands" className="carousel slide" data-bs-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Disney} className="img-benefit-desktop" alt="Logo Disney"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={Marvel} className="img-benefit-desktop" alt="Logo Marvel"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={Funko} className="img-benefit-desktop" alt="Logo Funko"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={Lol} className="img-benefit-desktop" alt="Logo LOL"></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" id="without-shadow" type="button" data-bs-target="#carousel-brands" data-bs-slide="prev">
                            <span>
                                <img src={Prev} id="big-arrows" className="carousel-control-prev-icon" aria-hidden="true" alt="Anterior beneficio"></img>
                            </span>
                        </button>
                        <button className="carousel-control-next" id="without-shadow" type="button" data-bs-target="#carousel-brands" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true">
                                <img src={Next} id="big-arrows" className="carousel-control-next-icon" aria-hidden="true" alt="Siguiente beneficio"></img>
                            </span>
                        </button>
                    </div>
                </div>
        </div >

    );
}

export default Brands;