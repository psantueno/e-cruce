import React from "react";
import InfoCards from "./InfoCards";



const AllProducts = () => {

    const info = [
        {
            image: "../../images/4048.png"
        },
        {
            image: "../../images/4049.png"
        },
        {
            image: "../../images/4050.png"
        },
        {
            image: "../../images/4051.png"
        },
        {
            image: "../../images/4052.png"
        },
        {
            image: "../../images/4053.png"
        },
        {
            image: "../../images/4054.png"
        },
        {
            image: "../../images/4055.png"
        }

    ];

    return (
        <div className="all-products">
            {
                info.map((elemento, i) => (

                    <InfoCards
                        key={elemento + i}
                        image={elemento.image}
                    />
                ))

            }
        </div>
    );
}

export default AllProducts;