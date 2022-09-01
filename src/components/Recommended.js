import React from "react";
import CardProduct from "./products/CardProduct";
import ControlNext from "../assets/images/control-next.png";
import ControlPrev from "../assets/images/control-prev.png";
import ShowPages from "../assets/images/show-pages.png";

const Recommended = () => {

    return (

        <div className="container-recommended">
            <div className="title-subtitle-news">
                <h1 className="title-news">Te recomendamos</h1>
                <h6 className="see-more">VER TODO</h6>
            </div>
            <div className="box-products-double">
                <div className="individual-box">
                    <CardProduct />
                </div>
                <div className="individual-box">
                    <CardProduct />
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <img src={ControlPrev} className="carousel-control-prev-icon" aria-hidden="true" alt="Anterior"></img>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <img src={ControlNext} className="carousel-control-next-icon" aria-hidden="true" alt="Siguiente"></img>
                        </a>
                    </li>
                    <div className="show-pages-img">
                        <img src={ShowPages} className="pages-info" aria-hidden="true" alt="página 2 de 12"></img>
                    </div>
                </ul>
            </nav>
        </div>

    )

}

export default Recommended;