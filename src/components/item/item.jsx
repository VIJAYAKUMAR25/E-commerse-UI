import React from "react";
import './item.css';
import { Link } from "react-router-dom";
export function Item(props){
    return(
        <div className="item card rounded-2">
            <Link to={`/product/${props.id}`}>
                 <img src={props.image} onClick={window.scrollTo(0,0)} className="card-img-top p-2 rounded-4" alt="" />
            </Link>

            <div className="card-body">
                <h5 className="card-title my-3 p-2 fs-4">{props.name}</h5>
            </div>
            <div className="item-prices card-footer">
                <div className="item-price-new">
                $ {props.new_price}
                </div>
                <div className="item-price-old">
                $ {props.old_price}
                </div>
            </div>
        </div>
    )
}


