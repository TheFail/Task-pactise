import React from 'react'
import Logo from '../assets/img/Logo.png'
import './App.css'
import Form from '../Form/Form.jsx'

console.log(Logo)

class App extends React.Component {

  render () {
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
          <Form />
          {/* {Form} */}
        </div>
        <div className="bottom">
          <a href="" className="Support"> Support</a>
          <div className="Version">Version  </div>
          <a href="" className="Disclaimer">Disclaimer</a>
        </div>
      </div>
    )
  }
}

export default App
