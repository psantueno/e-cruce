import React from "react";

const Filter = () => {

    return (
        <div className="container-filter">
            <select className="filter-by" name="category_id">
                <option value="" disabled selected> Filtrar</option>
                <option value="Game of Thrones">Game of Thrones</option>
                <option value="Marvel">Marvel</option>
                <option value="Harry Potter">Harry Potter</option>
            </select>
        </div>
    )
}

export default Filter;

