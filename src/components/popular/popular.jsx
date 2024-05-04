import React from 'react';
import './popular.css';
import { Item } from "../item/item";
import popularProducts from '../Assets/data.js';


export function Popular(){

    
    return(
        <div className="popular">
            <p className="h1">POPULAR IN WOMEN</p>
            <hr />
            <div className="popular-item">
                {
                    popularProducts.map((item,i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })
                }
            </div>
        </div>
    )
}