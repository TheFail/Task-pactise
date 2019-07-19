import React from 'react'
import Logo from '../assets/img/Logo.png'
import './App.css'
import Form from '../Form/Form.js'
import Login from '../Login/Login.js'
import Registration from '../Registration/Registration.js'

console.log(Logo)

function App (prop) {
  return (
    <div className="Appt" >
      <header className="App-header">
        <div className="top" name="top">
          <div className="logo" >
            <img src={Logo} alt="Vitim+"></img>
          </div>
        </div>
      </header>
      <div className="Go">
        <Login />

        {/* {prop.form} */}
      </div>
      <div className="bottom">
        <a href="" className="Support"> Support</a>
        <div className="Version">Version  </div>
        <a href="" className="Disclaimer">Disclaimer</a>
      </div>
    </div>
  )
}

export default App
