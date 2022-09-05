import React from "react";
import { Link } from "react-router-dom";
import CtrlLeft from "../../assets/images/control-left-pagination.png";
import CtrlRight from "../../assets/images/control-right-pagination.png";

const PaginationAllProducts = () => {

    return (
        <div className="pagination-allproducts">
            <nav aria-label="Page navigation example">
                <ul className="pagination" id="pagination-allproducts">
                    <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Previous">
                            <img src={CtrlLeft} aria-hidden="true" alt="flecha izquierda"></img>
                        </Link>
                    </li>
                    <li className="page-item"><Link id="link-item-pagination" className="page-link" to="#">1</Link></li>
                    <li className="page-item"><Link id="link-item-pagination" className="page-link" to="#">2</Link></li>
                    <li className="page-item"><Link id="link-item-pagination" className="page-link" to="#">3</Link></li>
                    <li className="page-item"><Link id="link-item-pagination" className="page-link" to="#">4</Link></li>
                    <li className="page-item"><Link id="link-item-pagination" className="page-link" to="#">5</Link></li>
                    <li className="page-item"><Link id="link-item-pagination" className="page-link" to="#">6</Link></li>
                    <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                            <img src={CtrlRight} aria-hidden="true" alt="flecha derecha"></img>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default PaginationAllProducts;