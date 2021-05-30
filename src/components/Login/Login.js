import React from 'react';
import './Login.css';
import facebook from '../../images/social/facebook.png';
import twitter from '../../images/social/twitter.png';
import google from '../../images/social/google.png';
import user from '../../images/user.png';
import key from '../../images/key.png';

const Login = () => {
    const formSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className="App-header">
            <section className="parent-login">
                <form onSubmit={formSubmit} className="center-col custom-form rounded">
                    <h1 className="mb-3">Sign in</h1>
                    <div className="input-div">
                        <img className="icon" src={user} alt="" />
                        <input className="input" type="email" placeholder="Username" />
                    </div>
                    <div className="input-div">
                        <img src={key} alt="key" />
                        <input className="input" type="password" placeholder="Password" />
                    </div>
                    <span className="mt-2 w-100"><p className="text-end"><small>Forget password?</small></p></span>
                    <input className="btn btn-outline-dark" type="submit" value="LOGIN" />
                    <span className="mt-2">Don't have an account? <span className="text-danger">Sign up</span></span>
                    <section className="d-flex justify-content-around w-100 mt-4">
                        <img src={google} alt="google" />
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                    </section>
                </form>
            </section>
        </div>
    );
};

export default Login;