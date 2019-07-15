import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App" style="font-family: 'Roboto', sans-serif;">
            <header className="App-header">
              <div id="top">
                <div id="logo"> 
                 <img src="..\assets\img\Logo.png"></img>
                </div>
              </div>
              <div id="login">
                <input id="in_email" type="text" required pattern="Username or Email"></input>
                <input id="in_password" type="password" required pattern="Password"></input>
                    <a href="">Forgot your password?</a>
                <button type="submit" id>Login</button>
                No have account? Sign up for free.
                <a href=""><font id="sign_up">Sign up</font></a>
              </div>
              <div id="bottom">
                <a href="">Support</a> 
                <div>Version {Version} </div>
                <a href="">Disclaimer</a>
              </div>
            </header>
        </div>
    );
}

function Version(){
  return(
    
  );
}

export default App;
