
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums/breadcrums";
import ProductDisplay from "../components/ProductDisplay/productdisplay";
import { DescriptionBox } from "../components/DescriptionBox/descriptionbox";
import { RelatedProduct } from "../components/RelatedProduct/relatedproducts";



const Product = ()=>{
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId));
    return(
        <div style={{marginTop:'100px'}}>
           <Breadcrums product={product}/> 
           <ProductDisplay product = {product}/>
           <DescriptionBox/>
           <RelatedProduct/>
        </div>
    );
};

export default Product;