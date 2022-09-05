import React from "react";
import Header from '../Header';
import TopBannerHome from "../banners/TopBannerHome";
import SearchMobile from "../SearchMobile";
import Season from "../Season";
import ToyDay from "../ToyDay";
import Brands from "../Brands";
import MostWanted from "../MostWanted";
import BannerBenefitsMobile from "../banners/BannerBenefitsMobile";
import BannerBenefitsDesktop  from "../banners/BannerBenefitsDesktop";
import News from "../News";
import Campaign from "../Campaign";
import MostWantedTimer from "../MostWantedTimer";
import Recommended from "../Recommended";
import BtnGoTop from "../buttons/BtnGoTop";
import Footer from "../Footer";
import Whatsapp from "../buttons/Whatsapp";
import Banner18x from "../banners/Banner18x";


const Home = () => {

    return (
        <React.Fragment>
            <div className="home">
                <Whatsapp />
                <Banner18x />
                <Header />
                <TopBannerHome />
                <div className="benefits-desktop">
                    <BannerBenefitsDesktop />
                </div>
                <SearchMobile />
                <Season />
                <Brands />
                <div id="benefits-mobile">
                    <BannerBenefitsMobile />
                </div>
                <ToyDay />
                <MostWanted />
                <News />
                <Campaign />
                <MostWantedTimer />
                <Recommended />
                <BtnGoTop />
                <Footer />

            </div>
        </React.Fragment >
    )
}

export default Home;