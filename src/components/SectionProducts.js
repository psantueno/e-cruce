import React from "react";
import CardProduct from "./products/CardProduct";

const SectionProducts = () => {
    return (
        <div className="container-products-top">
            <div className="box-top-left">
                <CardProduct />
            </div>
            <div className="box-top-right">
                <CardProduct />
            </div>
        </div>
    )
}

export default SectionProducts;

