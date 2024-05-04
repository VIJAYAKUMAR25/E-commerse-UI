import React from "react";
import "./breadcrums.css";

const Breadcrums = (props) =>{
    const {product} = props;
    return(
        <div className="breadcrum">
            HOME <span className="bi bi-chevron-right d-inline-block mx-2"></span>
            SHOP<span className="bi bi-chevron-right d-inline-block mx-2"></span>
            {product.category}<span className="bi bi-chevron-right d-inline-block mx-2"></span>{product.name}
        </div>
    )
}
export default Breadcrums;