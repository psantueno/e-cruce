import React from "react";
import {useRef} from "react";
import Header from '../Header';
import TopBanner from "../TopBanner";
import SearchMobile from "../SearchMobile";
import Season from "../Season";
import ToyDay from "../ToyDay";
import Brands from "../Brands";
import MostWanted from "../MostWanted";
import Benefits from "../Benefits";
import News from "../News";
import Campaign from "../Campaign";
import MostWantedTimer from "../MostWantedTimer";
import Recommended from "../Recommended";
import ButtonGoTop from "../ButtonGoTop";
import Footer from "../Footer";
import Wapp from "../../assets/images/whatsapp.png";
import Alert18 from "../../assets/images/pestania.png"


const Home = () => {

    const cuotas18 = useRef();

    const close = () => {
        cuotas18.current.style.display = "none";
    }

    return (
        <React.Fragment>
            <div className="home">
                <a className="button-whatsapp" href="https://api.whatsapp.com/send?phone=[+54][987654321]" target="_blank">
                    <img className="button-whatsapp" src={Wapp} alt="Icono de Whatsapp"></img>
                </a>
                <div className="box-18x" ref={cuotas18}>
                    <img src={Alert18} className="button-18x"></img>
                    <i onClick={close} id="icono-cerrar" class="far fa-times-circle"></i>
                    <p id="title-18x">Aprovechá hasta 18 cuotas sin interés</p>
                </div>
                <Header />
                <TopBanner />
                <SearchMobile />
                <Season />
                <Brands />
                <Benefits />
                <ToyDay />
                <MostWanted />
                <News />
                <Campaign />
                <MostWantedTimer />
                <Recommended />
                <ButtonGoTop />
                <Footer />

            </div>
        </React.Fragment >
    )
}

export default Home;