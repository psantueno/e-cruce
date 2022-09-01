import React from "react";
import { Link } from "react-router-dom";
import BannerList from "../../assets/images/banner.png";
import AllProducts from "../products/AllProducts";
import ButtonGoTop from "../ButtonGoTop";
import CtrlLeft from "../../assets/images/control-left-pagination.png";
import CtrlRight from "../../assets/images/control-right-pagination.png";

function MainBar() {

    return (
        <div className="container-mainbar">
            <div className="navbar-head">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Juguetes</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Funko Pop</li>
                    </ol>
                </nav>
            </div>
            <div className="container-filter-by">
                <div className="form-filter">
                    <i className="fas fa-filter"></i>
                    <form className="form-search-home">
                        <input type="text" className="form-control form-input-filter" placeholder="Filtrar"></input>
                    </form>
                </div>
            </div>
            <div className="container-order-by">
                <select className="order-by-btn" name="category_id" required>
                    <option value="" disabled selected>Ordenar por</option>
                    <option value="Menor precio">Menor Precio</option>
                    <option value="Mayor precio">Mayor Precio</option>
                    <option value="Mas relevantes">Más relevantes</option>
                </select>
            </div>
            <div className="container-banner-list-products">
                <img src={BannerList} alt="Banner Funko" ></img>
            </div>
            <AllProducts />
            <ButtonGoTop />
            <div className="pagination-allproducts">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Previous">
                                <img src={CtrlLeft} aria-hidden="true"></img>
                            </Link>
                        </li>
                        <li className="page-item"><Link id="link-item-pagination" className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link id="link-item-pagination" className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link id="link-item-pagination" className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Next">
                                <img src={CtrlRight} aria-hidden="true"></img>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MainBar;
