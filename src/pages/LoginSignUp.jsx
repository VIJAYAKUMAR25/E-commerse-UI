import React, { useState } from "react";
import './css/loginsignup.css';
import  TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
const LoginSignUp = ()=>{

    const [state,setState] = useState('login');
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const Login = async () =>{
        console.log('login function executed',formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }else{
            alert(responseData.errors);
        }
    }

    const SignUp = async () =>{
        console.log('Signup function executed',formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }else{
            alert(responseData.errors);
        }
    }

    return(
        <div className="loginsignup">
            <div className="loginsignup-container rounded-3">
                <h1 className="my-3 text-center py-1">{state}</h1>
                <div className="loginsignup-fields fs-3">
                    {state==="Sign Up"?<TextField id="outlined-basic" name="username" label="User Name" InputLabelProps={{style:{fontSize:'1.6rem'}}} value={formData.username} onChange={changeHandler} inputProps={{style:{fontSize:'1.6rem',height:'1.8rem'}}} variant="filled" />:<></>}
                    <TextField id="outlined-basic" name="email" value={formData.email} onChange={changeHandler} label="Email address" InputLabelProps={{style:{fontSize:'1.6rem'}}} inputProps={{style:{fontSize:'1.6rem',height:'1.8rem'}}} variant="filled" />
                    <TextField id="outlined-basic" name="password" value={formData.password} onChange={changeHandler} label="password" InputLabelProps={{style:{fontSize:'1.6rem'}}} inputProps={{style:{fontSize:'1.6rem',height:'1.8rem'}}} variant="filled" />
                    {state==="Sign Up"?<TextField id="outlined-basic" label="confirm Password" InputLabelProps={{style:{fontSize:'1.6rem'}}} inputProps={{style:{fontSize:'1.6rem',height:'1.8rem'}}} variant="filled" />:<></>}
                    
                </div>
                <Button variant="contained" className="fs-5 my-3 w-100 py-3 mb-3" style={{background:"#7f5af0"}} onClick={()=>{state ==="login"?Login():SignUp()}}>Continue</Button>
                {state ==="Sign Up"?<p className="loginsignup-login">Already have an acoount? <span onClick={()=>{setState("login")}}>Login here</span></p>:
                <p className="loginsignup-login">Create an account? &nbsp; <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" />
                    <p className="mt-3">By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
}
export default LoginSignUp;