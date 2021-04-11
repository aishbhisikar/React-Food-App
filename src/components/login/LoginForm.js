import React,{useState} from 'react'
import {  Link } from "react-router-dom";


import './login.css'

function LoginForm() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

    // function loginHandle(e)
    // {
    //     if(user.length<3 || password.length<3)
    //     {
    //         alert("type correct values")
    //     }
    //     else
    //     {
    //         alert("all good :)")
    //     }
    //     console.log(e)
    //     e.preventDefault()
    // }

    function userHandler(e){
        let item=e.target.value;
        if(/^\s+$/.test(item))
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
    return (
        <>
        <div className="mainBox"> 
            <form action='' >
                <div className="box">
                    <h2>Sign in</h2>
                </div>
                <div className="box">
                    <input type="text" name="email" id="email" placeholder="Username or email address"
                     autoComplete="off" pattern="\S+"
                     onChange={userHandler}/>{userErr?<span>whitespace is detected </span>:""}
                </div>
                <div className="box">
                    <input type="password" name="password" id="password" placeholder="Password"
                    onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Keep me signed in</label>
                    </div>
                </div>

                
                
                <Link to="/home" >
                <button type="button" className="btn btn-primary btn-lg btn-block">Login</button></Link>
                <p className="forgot-password text-left">
                    <a href=""> I Forgot My Password</a>
                    <br/>
                    <a href=""> Resend Verification Email</a>
                </p>  
            </form>
        </div>
        </>
    )
}

export default LoginForm