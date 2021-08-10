import React, {Component} from 'react';
import "../Pages/Login.css"
import "../Pages/Login_bubles.css"


function RegisterForm() {

    return (
        <div className='pageSize'>
            <div className="loginScreen">
                <div className="container">
                    <form className="loginForm">
                        <h2> Account</h2>

                        <div className="emailDiv">
                            <p>Email</p>
                            <input type="text " placeholder="Email" className="loginUsername"/>
                        </div>
                        <div className="passwordDiv">
                            <p>User Name</p>
                            <input type="text" placeholder="User Name" className="loginPassword"/>
                        </div>
                        <div className="passwordDiv">
                            <p>PASSWORD</p>
                            <input type="password" placeholder="Password" className="loginPassword"/>
                        </div>
                        <button type="submit">
                            Log in
                        </button>


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
class RegisterScreen extends React.Component{
    render(){
        return(
            <RegisterForm/>
        )
    }

}

export default RegisterScreen;