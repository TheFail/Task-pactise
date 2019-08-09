import React, { Component } from 'react'
import './Login.css'
import Putton from '../Button/Button.jsx'
import { FormErrors } from './LoginError'
import PassVis from '../assets/img/passVis.png'
import PassLock from '../assets/img/PassLock.png'
import PassUnLock from '../assets/img/PassUnLock.png'

console.log(PassVis)
console.log(PassLock)
console.log(PassUnLock)

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      type: 'password',
      score: 'null'
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.showHide = this.showHide.bind(this)
  }

  handleUserInput (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value },
      () => { this.validateField(name, value) })
  }

  validateField (fieldName, value) {
    const fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
        break
      case 'password':
        passwordValid = value.length >= 8
        fieldValidationErrors.password = passwordValid ? '' : 'Passsword is too short'
        break
      default:
        break
    }
    this.setState({ formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm)
  }

  validateForm () {
    this.setState({ formValid: this.state.emailValid &&
                              this.state.passwordValid })
  }

  errorClass (error) {
    return (error.length === 0 ? '' : 'has-error')
  }

  showHide (e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }

  render () {
    return (
      <div className="Login">
        <div className="form-login">
          <input value={this.state.email} onChange={this.handleUserInput} className= {`login-control up ${this.errorClass(this.state.formErrors.email)}`} type="email" id="log_email" required="required" placeholder="Email" name="email" />
          <div className="password">
            <input value={this.state.password} onChange={this.handleUserInput} className={`login-control down password__input ${this.errorClass(this.state.formErrors.password)}`} type={this.state.type} id="log_password" required="required" placeholder="Password" name="password"/>
            <span className="password__show" onClick={this.showHide}><img className="locking" src={this.state.type === 'input' ? PassUnLock : PassLock} alt={this.state.type === 'input' ? 'PassLock' : 'Show'}></img></span>
          </div>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} className="fORMeRR"/>
          </div>
        </div>
        <a href="" id="forgot">Forgot your password?</a>
        <Putton type="Login_Handler" onClick="showMessage()"></Putton >
        <script>
        </script>
      </div>
    )
  }
}

export default Login
