import React from "react";

const OrderBy = () => {

    return (
        <div className="container-order-by">
            <select className="order-by-btn" name="category_id">
                <option value="" disabled selected>Ordenar por</option>
                <option value="Menor precio">Menor Precio</option>
                <option value="Mayor precio">Mayor Precio</option>
                <option value="Mas relevantes">Más relevantes</option>
            </select>
        </div>
    )
}

export default OrderBy;