import React from 'react';
import Logo from '../assets/img/Logo.png'
import './App.css';
import Button from '../Button/Button.js'

console.log(Logo);
var version="1.0.0";


function App() {

    return (
        <div className="App" >
            <header className="App-header">
              <div id="top" name="top">
                <div id="logo" >
                <img src={Logo} alt="Vitim+"></img>
                </div>
              </div>
            </header>
            <div id="form">
                <input id="in_email" type="text" required placeholder="Username or Email"></input>
                <input id="in_password" type="password" required placeholder="Password"></input>
                    <a href="" id="forgot">Forgot your password?</a>
                <Button login > </Button >
                No have account? Sign up for free.
                 <a href=""><font id="sign_up">Sign up</font></a>
            </div>
            <div id="bottom">
                <a href="">Support</a>
                <div>Version {version} </div>
                <a href="">Disclaimer</a>
            </div>
        </div>
    );
}

export default App;
