import React from "react";
import Hero from "../components/Hero/Hero";
import { Popular } from "../components/popular/popular";
import { Carousel } from "../components/carousel/carousel";
import "./shop.css"
import { NewCollection } from "../components/NewCollections/NewCollections";
import { NewsLetter } from "../components/Newsletter/newsletter";


const Shop = () =>{
    return(
        <div className="Shop">
            <Carousel/>
            <Hero/>
            <Popular/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    );
}

export default Shop;