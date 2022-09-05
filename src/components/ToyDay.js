import React from "react";
import CardProductRow from "./products/CardProductRow";
import Video from "../assets/images/video.png";

const ToyDay = () => {
    return (
        <div className="container-toy-day">
            <div>
                <h1 className="title-day">Juguete del día</h1>
            </div>
            <div className="toy-day-flex">
            <img className="video-toy-day" src={Video} alt="Video juguete del día" ></img>
            <div className="box-day-flex">
                <div className="product-day">
                    <CardProductRow />
                </div>
            </div>
            </div>
        </div>
    );
}

export default ToyDay;