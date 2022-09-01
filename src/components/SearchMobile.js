import React from "react";

const SearchMobile = () => {

    return (

        <React.Fragment>
            <div class="container-search">
                    <div className="form">
                        <i class="fa fa-search"></i>
                        <form className="form-search-home">
                            <input type="text" className="form-control form-input" placeholder="¿Qué estas buscando?"></input>
                        </form>
                    </div>
                </div>
        </React.Fragment>
    )

}

export default SearchMobile;