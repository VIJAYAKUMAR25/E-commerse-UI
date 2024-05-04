import React from "react";
import footer_logo from '../Assets/logo_big.png';
import './footer.css'
export function Footer(){
    return(
        <div className="footer d-flex flex-column justify-content-center align-items-center">
            <div className="footer-logo d-flex">
                <img src={footer_logo} width={100} height={100}/>
                <p>Voguer.</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <span className="bi bi-instagram d-inline-block"></span>
                    <span className="bi bi-pinterest d-inline-block"></span>
                    <span className="bi bi-whatsapp d-inline-block"></span>
                    <span className="bi bi-twitter-x d-inline-block"></span>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright &copy; 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}