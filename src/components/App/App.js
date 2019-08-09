import React from 'react'
import Logo from '../assets/img/Logo.png'
import './App.css'
import Form from '../Form/Form.jsx'

console.log(Logo)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true
    }
    this.cneck = this.cneck.bind(this)
  }

  cneck () {
    console.log(this.state.checked)
    if (this.state.checked === true) {
      this.setState({ checked: false })
    } else {
      this.setState({ checked: true })
    }
  }

  render () {
    return (
      <div className="Appt" >
        <header className="App-header">
          <input checked={this.state.checked} type="checkbox" className="TopHov" name="top"/>
          <span className="top" onClick={this.cneck} name="top">
            <div className="logo" >
              <img className="log" src={Logo} alt="Vitim+"></img>
            </div>
          </span>
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
