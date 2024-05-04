import React, { useContext } from "react";
import './css/shop-category.css'
import { ShopContext } from "../context/ShopContext";
import { Item } from "../components/item/item";
const ShopCategory = (props) =>{

    const {all_product} = useContext(ShopContext);
    return(
        <div className="shop-category">
            <img src={props.banner} alt="" className="shopcategory-banner"/>
            <div className="shopcategory-indexsort d-flex flex-column mt-4">
                <p className="fs-4">
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort fs-5">
                    sort by <span className="bi bi-chevron-double-down d-inline-block"></span>
                </div>
                <div className="shopcategory-products">
                    {all_product.map((item,i)=>{
                        if(props.category===item.category){
                           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        }
                        else{
                            return null;
                        }
                    })}
                </div>
                <div className="shopcategory-loadmore d-flex justify-content-center align-items-center my-4">
                    Explore More <span className="bi bi-arrow-right px-2 d-inline-block"></span>
                </div>
            </div>
        </div>
    );
}


export default ShopCategory;