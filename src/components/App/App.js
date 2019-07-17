import React from 'react';
import Logo from '../assets/img/Logo.png';
import './App.css';
import Form from '../Form/Form.js';
import Login from '../Login/Login.js';
import Registration from '../Registration/Registration.js'



console.log(Logo);
var version="1.0.0";

function App(prop) {

    return (
        <div className="Appt" >
            <header className="App-header">
              <div id="top" name="top">
                <div id="logo" >
                <img src={Logo} alt="Vitim+"></img>
                </div>
              </div>
            </header>
            <div id="Go">
             <Registration />

            {prop.form}
            </div>
            <div id="bottom">
                <a href="" id="Support">Support</a>
                <div id="Version">Version {version} </div>
                <a href="" id="Disclaimer">Disclaimer</a>
            </div>
        </div>
    );
}

export default App;
