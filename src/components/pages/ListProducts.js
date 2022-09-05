import React from "react";
import NavBarHead from "../listproducts/NavBarHead";
import Filter from "../listproducts/Filter";
import OrderBy from "../listproducts/OrderBy";
import BigFunkoBanner from "../banners/BigFunkoBanner";
import PaginationAllProducts from "../listproducts/PaginationAllProducts";
import AllProducts from "../products/AllProducts";
import BtnGoTop from "../buttons/BtnGoTop";
import Whatsapp from "../buttons/Whatsapp";
import Banner18x from "../banners/Banner18x";


const ListProducts = () => {

  return (
    <div className="list-products">
      <Whatsapp />
      <Banner18x />
      <div className="banner-desktop">
        <BigFunkoBanner />
      </div>
      <div className="header-flex">
        <NavBarHead />
        <Filter />
        <OrderBy />
      </div>
      <div className="banner-mobile">
        <BigFunkoBanner />
      </div>
      <AllProducts />
      <BtnGoTop />
      <PaginationAllProducts />
    </div>
  );
}

export default ListProducts;