import React, { Component } from 'react'
import './Login.css'
import Putton from '../Button/Button.jsx'
import {FormErrors} from './LoginError'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    this.handleUserInput = this.handleUserInput.bind(this)
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

  render () {
    return (
      <div className="Login">
        <div className="form-signin">
          <input value={this.state.email} onChange={this.handleUserInput} className= {`form-control up ${this.errorClass(this.state.formErrors.email)}`} type="email" id="log_email" required="required" placeholder="Email" name="email" />
          <input value={this.state.password} onChange={this.handleUserInput} className={`form-control down ${this.errorClass(this.state.formErrors.password)}`} type="password" id="log_password" required="required" placeholder="Password" name="password" />
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} className="fORMeRR"/>
          </div>
        </div>
        <a href="" id="forgot">Forgot your password?</a>
        <Putton type="Login_Handler" disabled={!this.state.formValid} onClick="showMessage()"></Putton >
      </div>
    )
  }
};

export default Login
