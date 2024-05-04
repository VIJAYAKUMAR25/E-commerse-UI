import React from "react";
import { CartItem } from "../components/cartItem/cartitem";


const Cart = ()=>{
    return(
        <div className="container-fluid mt-5">
            <div className="cart mt-5">
                <CartItem/>
            </div>
        </div>
    );
}

export default Cart;