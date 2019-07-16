import React from 'react';
import logo from './assets/img/Logo.png';
import './App.css';

console.log(logo);
var version="1.0.0";


function App() {

    return (
        <div className="App" >
            <header className="App-header">
              <div id="top" name="top">
                <div id="logo" >
                <img src="{logo}" alt="Vitim+"></img>
                </div>
              </div>
            </header>
            <div id="login">
                <input id="in_email" type="text" required placeholder="Username or Email"></input>
                <input id="in_password" type="password" required placeholdert="Password"></input>
                    <a href="" id="forgot">Forgot your password?</a>
                <button type="button" id="button" onClick="s" className="button"><span>Login</span></button>
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
