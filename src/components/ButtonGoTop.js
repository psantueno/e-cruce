import React from "react";
import { useRef } from "react";
import ImageButton from "../assets/images/button-go-top.png";

const ButtonGoTop = () => {

    const imgGoTop = useRef();

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (

        <div className="container-go-top">
            <div className="button-go-top">
                <img src={ImageButton} onClick={goToTop} ref={imgGoTop} ></img>
            </div>
        </div>

    )
}

export default ButtonGoTop;