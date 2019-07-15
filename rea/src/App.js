import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
              <div id="top">
                <div id="logo"> 
                 <img src="..\assets\Logo.png"></img>
                </div>
              </div>
              <div id="login">
                <input id="in_email" type="text" required pattern="Username or Email"></input>
                <input id="in_password" type="password" required pattern="Password"></input>
                    <a href="">Forgot your password?</a>
                <button type="submit" id>Login</button>
                No have account? Sign up for free.
                <a href=""><font ></font></a>
              </div>
            </header>
        </div>
    );
}

export default App;
