import React, {Component} from 'react';
import "../Pages/Login.css"
import "../Pages/Login_bubles.css"
import Register from "../Pages/Register"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navbar, Nav, NavLink} from "react-bootstrap";


function LoginForm() {

    return (
        <div className='pageSize'>
            <div className="loginScreen">
                <div className="container">
                    <form className="loginForm shadow">
                        <h2 > Welcome !</h2>

                        <div className="emailDiv">
                            <h3 >Email</h3>
                            <input type="text " placeholder="Username" className="loginUsername"/>
                        </div>
                        <div className="passwordDiv">
                            <h3 >Password</h3>
                            <input type="password" placeholder="Password" className="loginPassword"/>
                        </div>
                        <button  type="submit">
                            Log in
                        </button>
                        <p> Don`t you have an account? </p>
                        <div className="switchToRegister">
                            <NavLink  href="./Register" >New Account</NavLink>
                        </div>
                    </form>
                </div>

            </div>
            <div className='pageSize'>
                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

    );
}
class LoginScreen extends React.Component{
    render(){
        return(
            <><LoginForm/>
            </>
        )
    }

}

export default LoginScreen;