import React from 'react';
import Logo from '../assets/img/Logo.png'
import './App.css';
import Button from '../Button/Button.js';
import Input from '../Input/Input.js';

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
                <Input type="log_email"></Input>
                <Input type="log_password"></Input>
                    <a href="" id="forgot">Forgot your password?</a>
                <Button type="Login_Handler"></Button >
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
