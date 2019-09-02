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
    this.check = this.check.bind(this)
  }

  check () {
    console.log(this.state.checked)
    if (this.state.checked === true) {
      this.setState({ checked: false })
    } else {
      this.setState({ checked: false })
    }
  }

  render () {
    return (
      <div className="Appt" >
        <div className="App-header">
          <input checked={this.state.checked} type="checkbox" className="TopHov"/>
          <span className="top" onClick={this.check} name="top">
            <div className="logo" >
              <img className="logi" src={Logo} alt="Vitim+"></img>
            </div>
          </span>
        </div>
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
