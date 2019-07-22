import React, { Component } from 'react'
import './Registration.css'
import Button from '../Button/Button.jsx'
import { FormErrors } from './RegistrationError'

class RegistrationForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConf: '',
      username: '',
      fName: '',
      lName: '',
      phone: '',
      date: '',
      formErrors: { email: '',
        password: '',
        passwordConf: '',
        username: '',
        fName: '',
        lName: '',
        phone: '',
        date: '' },
      emailValid: false,
      passwordValid: false,
      passwordConfValid: false,
      usernameValid: false,
      fNameValid: false,
      lNameValid: false,
      dateValid: false,
      phoneValid: false,
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
    let passwordConfValid = this.state.passwordConfValid
    let usernameValid = this.state.usernameValid
    let fNameValid = this.state.fNameValid
    let lNameValid = this.state.lNameValid
    let dateValid = this.state.dateValid
    let phoneValid = this.state.phoneValid
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'
        break
      case 'password':
        passwordValid = value.length >= 8
        fieldValidationErrors.password = passwordValid ? '' : ' is too short'
        break
      case 'passwordConf':
        passwordConfValid = this.state.password === value
        fieldValidationErrors.passwordConf = passwordConfValid ? '' : 'does not match'
        break
      case 'username':
        usernameValid = value.length >= 3
        fieldValidationErrors.username = usernameValid ? '' : ' is too short'
        break
      case 'fName':
        fNameValid = value.length >= 1
        fieldValidationErrors.fName = fNameValid ? '' : ' is not filled'
        break
      case 'lName':
        lNameValid = value.length >= 1
        fieldValidationErrors.lName = lNameValid ? '' : ' is not filled'
        break
      case 'date':
        dateValid = value.length >= 1
        fieldValidationErrors.date = dateValid ? '' : ' is not filled'
        break
      case 'phone':
        phoneValid = value.length >= 1
        fieldValidationErrors.phone = phoneValid ? '' : ' is not filled'
        break
      default:
        break
    }
    this.setState({ formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      passwordConfValid: passwordConfValid,
      usernameValid: usernameValid,
      fNameValid: fNameValid,
      lNameValid: lNameValid,
      dateValid: dateValid,
      phoneValid: phoneValid
    }, this.validateForm)
  }

  validateForm () {
    this.setState({ formValid: this.state.emailValid &&
                              this.state.passwordValid &&
                              this.state.passwordConfValid &&
                              this.state.usernameValid &&
                              this.state.fNameValid &&
                              this.state.lNameValid &&
                              this.state.dateValid &&
                              this.state.phoneValid })
  }

  errorClass (error) {
    return (error.length === 0 ? '' : 'has-error')
  }

  render () {
    console.log(this.state.formErrors)
    return (
      <div className="Registration">
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className="form-signin ">
          <input value={this.state.fName} title={this.state.formErrors} onChange={this.handleUserInput} type="text" required placeholder="First Name" id="inputFrName" class={`form-control up ${this.errorClass(this.state.formErrors.fName)}`} name="fName"/>
          <input type="text" required placeholder="Middle Name (Not required)" id="inputMdName" class="form-control md"/>
          <input value={this.state.lName} onChange={this.handleUserInput} type="text" required placeholder="Last Name" id="inputLsName" class={`form-control md ${this.errorClass(this.state.formErrors.lName)}`} name="lName"/>
          <input value={this.state.date} onChange={this.handleUserInput} class={`form-control down ${this.errorClass(this.state.formErrors.date)}`} name="date" type="date" id="reg_Date" required="required" placeholder="Date of Birth" />
        </div>
        <div className="form-signin marg" >
          <input value={this.state.email} onChange={this.handleUserInput} class={`form-control up ${this.errorClass(this.state.formErrors.email)}`} name="email" type="email" id="reg_Email" required="required" placeholder="Email" />
          <input value={this.state.phone} onChange={this.handleUserInput} class={`form-control down ${this.errorClass(this.state.formErrors.phone)}`} name="phone" type="tel" id="reg_Phone" required="required" placeholder="Phone Number" />
        </div>
        <div className="form-signin">
          <input value={this.state.username} onChange={this.handleUserInput} class={`form-control up ${this.errorClass(this.state.formErrors.username)}`} name="username" type="text" id="reg_username" required="required" placeholder="Username" />
          <input value={this.state.password} onChange={this.handleUserInput} class={`form-control md ${this.errorClass(this.state.formErrors.password)}`} name="password" type="password" id="reg_password" required="required" placeholder="Password" />
          <input value={this.state.passwordConf} onChange={this.handleUserInput} class={`form-control down ${this.errorClass(this.state.formErrors.passwordConf)}`} name="passwordConf" type="password" id="reg_passwordConf" required="required" placeholder="Password confirm" />
          <div className="Psw">
          The password must contain at least 8 characters. You can use letters, numbers and symbols from the list: `! @ # $% ^ &amp; * () _ - + = [] {}; : " |,. &lt;&gt; \ /?
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div id="SCTCUargee" class="col" >
              I have read, understood and accept Secure Checks Terms & Conditions of Use
              </div>
              <div class="col col-lg-auto align-self-center">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <Button type="Registration_Handler" />
      </div>

    )
  }
}

export default RegistrationForm
