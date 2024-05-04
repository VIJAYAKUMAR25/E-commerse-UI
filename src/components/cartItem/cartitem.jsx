import React, { useContext } from "react";
import './cartitem.css';
import { ShopContext } from "../../context/ShopContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function CartItem(){

    const {getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return(
        <div className="container-fluid">
            <div className="cartitem">
                <div className="cartitems-format-main" id="cart-format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {all_product.map((e) => {
                    if(cartItems[e.id]>0) {
                        
                   return   <div key={e.id} className="cartitems-format  cartitems-format-main">
                                <img src={e.image} className="cartitems-product-icon" alt="" />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className="cartitem-quantity">{cartItems[e.id]}</button>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <span className="btn btn-close d-inline-block" onClick={() => { removeFromCart(e.id) }}></span>
                                <hr/>
                            </div>
                    }
                    return null;
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <p className="h1">Cart Totals</p>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p className="h3">Total</p>
                                <p className="h3">${getTotalCartAmount()}</p>
                            </div>
                        </div>
                        <Button variant="contained" className=" py-3 fs-5" style={{background:'#7f5af0',width:'200px'}}>PROCEED TO CHECKOUT</Button>
                    </div>
                    <div className="cartitems-promocode">
                        <p className="fs-5 fw-bold text-secondary">If you have a promo code, Enter in here</p>
                        <div className="cartitems-promobox d-flex flex-column">
                            <TextField  label="Promo code" InputLabelProps={{style:{fontSize:'1.6rem'}}} inputProps={{style:{fontSize:'1.6rem',height:'1.8rem'}}} variant="filled" />
                            <Button variant="contained" className="mt-4 fs-5" style={{background:'#7f5af0',width:"170px"}}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
