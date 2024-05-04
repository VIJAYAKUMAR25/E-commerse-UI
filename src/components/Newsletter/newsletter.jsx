import React, { useState } from "react";
import "./newsletter.css";

export function NewsLetter() {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    function handleEmailBlur() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div className="newsletter">
            <p className="title">Get Exclusive Offers On Your Email</p>
            <p className="sub">Subscribe to our newsletter and stay updated</p>
            <div className="btn-group">
                <input type="email" className={`form-control ${isValidEmail ? "" : "is-invalid"}`} placeholder="Your Email" value={email} onBlur={handleEmailBlur} onChange={handleEmailChange}/>
                <button className="btn btn-dark">Subscribe</button>
            </div>
        </div>
    );
}
