
import React from "react";
import './NewCollection.css'
import { Item } from "../item/item";
import new_collection from '../Assets/new_collections.js';

export function NewCollection(){



    return(
        <div className="newCollection">
            <p className="h1">NEW COLLECTION</p>
            <hr />
            <div className="collections">
                {
                    new_collection.map((item,i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })
                }
            </div>
        </div>
    )
}