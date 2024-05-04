import React, { useContext } from "react";
import './productdisplay.css';
import Button from '@mui/material/Button';
import { ShopContext } from "../../context/ShopContext";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDisplay = (props) =>{



    const notify = () => toast('🦄 Item added to Cart!', {
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    return(
        <div className="container-fluid">
            <div className="productdisplay row">
            <div className=" productdisplay-left col-12 col-lg-4">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} className="productdisplay-main-img" alt="" />
                </div>
            </div>
            <div className="  productdisplay-right col-12 col-lg-8">
                <p className="heading ">{product.name}</p>
                <div className="productdisplay-right-star">
                    <span className="bi bi-star-fill d-inline-block text-warning"></span>
                    <span className="bi bi-star-fill d-inline-block text-warning"></span>
                    <span className="bi bi-star-fill d-inline-block text-warning"></span>
                    <span className="bi bi-star-fill d-inline-block text-warning"></span>
                    <span className="bi bi-star-half d-inline-block text-warning"></span>
                    <p className="mt-3">(537)</p>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        style={{marginTop:'200px'}}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        />
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description my-3 fs-5 pe-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum id officiis vero consectetur blanditiis sit ratione eaque veniam ut similique.
                </div>
                <div className="productdisplay-right-size">
                        <p className="size-title">Select Size :</p>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <Button onClick={() => {addToCart(product.id); notify();}}  variant="contained" className=" fs-5 my-3 py-3 w-auto" style={{background:'#7f5af0'}}>ADD TO CART</Button>
                    <p className='productdisplay-right-category mt-2'><span>Category :</span> &nbsp; Women , T-Shirt ,Crop Top</p>
                    <p className='productdisplay-right-category mt-2'><span>Tags :</span> &nbsp; Modern ,Latest</p>
            </div>
        </div>
        </div>
    )
}
export default ProductDisplay;