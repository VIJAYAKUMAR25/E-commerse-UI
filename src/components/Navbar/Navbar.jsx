
import React, { useContext, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {

    const[menu,setMenu] =useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <nav className='navbar navbar-expand-lg fixed-top p-lg-2 p-sm-4'>
      <div className="container-fluid">
        <button className='navbar-toggler fs-5 me-3' type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls='offcanvasNavbar' aria-label='Toggle navigation'>
          <span className='bi bi-justify  d-inline-block'></span>
        </button>
        <div className='navbar-brand fw-bold me-auto'>
          <img src={logo} alt="Logo" width={40} height={40} />
          <a href='' className= 'brand-logo ms-3 mt-2 '>Voguer.</a>
        </div>
        <div className='offcanvas offcanvas-start' tabIndex={-1} id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' >
          <div className='offcanvas-header'>
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src={logo} alt="Logo" width={40} height={40} />
              <a href='' className= 'brand-logo ms-3 mt-2 '>Voguer.</a>
            </h5>
            <button className='btn-close' type='button' data-bs-dismiss="offcanvas" aria-label='Close'></button>
          </div>
          <div className="offcanvas-body fs-4  text-center" >
            <ul className='navbar-nav justify-content-center d-flex align-items-center flex-grow-1  text-center me-4' >
              <li className='nav-item' data-bs-dismiss="offcanvas" onClick={()=>{setMenu("shop")}}>
                <Link className='nav-link mx-lg-2 pt-3' style={{textDecoration:"none",color:'#2d2e32'}} to = "/">Shop</Link>{menu==="shop"?<hr/>:<></>}
              </li>
              <li className='nav-item' data-bs-dismiss="offcanvas" onClick={()=>{setMenu("mens")}}>
                <Link className='nav-link mx-lg-2 pt-3' style={{textDecoration:"none",color:'#2d2e32'}} to = "/mens">Men</Link>{menu==="mens"?<hr/>:<></>}
              </li>
              <li className='nav-item' data-bs-dismiss="offcanvas" onClick={()=>{setMenu("womens")}}>
                <Link className='nav-link mx-lg-2 pt-3' style={{textDecoration:"none",color:'#2d2e32'}} to = "/womens">Women</Link>{menu==="womens"?<hr/>:<></>}
              </li>
              <li className='nav-item' data-bs-dismiss="offcanvas" onClick={()=>{setMenu("kids")}}>
                <Link className='nav-link mx-lg-2 pt-3' style={{textDecoration:"none",color:'#2d2e32'}} to = "/kids">Kid</Link>{menu==="kids"?<hr/>:<></>}
              </li>
            </ul>
          </div>
        </div>
        <div className='nav-login-cart me-3'>
          {localStorage.getItem('auth-token')?
          <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>:<Link style={{textDecoration:"none",color:'#2d2e32'}} to='/login'><button >Login</button></Link>}
          <Link style={{textDecoration:"none",color:'#2d2e32'}} to='/cart'>
            <div className='bi bi-cart4'>
                <span className='badge bg-danger text-white rounded rounded-circle position-absolute'>
                   {getTotalCartItems()} 
                </span>
            </div>
        </Link>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
