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
      SCTCU: false,
      formErrors: { email: '',
        password: '',
        passwordConf: '',
        username: '',
        fName: '',
        lName: '',
        phone: '',
        date: '',
        SCTCU: '' },
      emailValid: false,
      passwordValid: false,
      passwordConfValid: false,
      usernameValid: false,
      fNameValid: false,
      lNameValid: false,
      dateValid: false,
      phoneValid: false,
      formValid: false,
      SCTCUValid: false
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.cneck = this.cneck.bind(this)
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
    let SCTCUValid = this.state.SCTCUValid
    switch (fieldName) {
      case 'email':
        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})/i)) {
          emailValid = true
        } else {
          emailValid = false
        }
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
        break
      case 'password':
        passwordValid = value.length >= 8
        fieldValidationErrors.password = passwordValid ? '' : 'Password is too short. Use 8 or many symbols'
        break
      case 'passwordConf':
        passwordConfValid = this.state.password === value
        fieldValidationErrors.passwordConf = passwordConfValid ? '' : 'Passwords does not match'
        break
      case 'username':
        console.log(value)
        usernameValid = value.length >= 3
        fieldValidationErrors.username = usernameValid ? '' : 'Username is too short. Use 3 or many symbols'
        break
      case 'fName':
        fNameValid = value.length >= 1
        fieldValidationErrors.fName = fNameValid ? '' : 'First Name is not filled'
        break
      case 'lName':
        lNameValid = value.length >= 1
        fieldValidationErrors.lName = lNameValid ? '' : 'Last Name is not filled'
        break
      case 'date':
        dateValid = value.length >= 1
        fieldValidationErrors.date = dateValid ? '' : 'Date is not filled'
        break
      case 'phone':
        phoneValid = value.length >= 1
        fieldValidationErrors.phone = phoneValid ? '' : 'Phone is not filled'
        break
      case 'SCTCU':
        SCTCUValid = value === 'true'
        fieldValidationErrors.SCTCU = SCTCUValid ? '' : 'You don`t have read, understood and accept Secure Checks Terms & Conditions of Use'
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
      phoneValid: phoneValid,
      SCTCUValid: SCTCUValid
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
                              this.state.phoneValid &&
                              this.state.SCTCUValid })
  }

  errorClass (error) {
    return (error.length === 0 ? '' : 'has-error')
  }

  usernameAuto () {
    const emailValue = this.state.email
    let emailDog = emailValue.search(/@/i)
    if (emailDog === -1) {
      emailDog = emailValue.length
    }
    const usermaneGet = emailValue.slice(0, emailDog)
    this.setState({ username: usermaneGet || '' })

  }

  cneck () {
    this.checked = this.refs.check_me.checked
    console.log(this.checked)
    if (this.checked === false) {
      this.setState({ SCTCU: true })
      this.checked = true
    } else {
      this.setState({ SCTCU: false })
      this.checked = false
    }
  }

  render () {
    // console.log(this.state.formErrors)
    return (
      <div className="Registration">
        <div className="form-registration ">
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} className="fORMeRR"/>
          </div>
          <input value={this.state.fName} title={this.state.formErrors} onChange={this.handleUserInput} type="text" required placeholder="First Name" id="inputFrName" className={`registration-control up ${this.errorClass(this.state.formErrors.fName)}`} name="fName"/>
          <input type="text" required placeholder="Middle Name (Not required)" id="inputMdName" className="registration-control md"/>
          <input value={this.state.lName} onChange={this.handleUserInput} type="text" required placeholder="Last Name" id="inputLsName" className={`registration-control md ${this.errorClass(this.state.formErrors.lName)}`} name="lName"/>
          <input value={this.state.date} onChange={this.handleUserInput} className={`registration-control down ${this.errorClass(this.state.formErrors.date)}`} name="date" type="date" id="reg_Date" required="required" placeholder="Date of Birth" />
        </div>
        <div className="form-registration marg" >
          <input value={this.state.email} onChange={this.handleUserInput} onKeyUp={this.usernameAuto.bind(this)} className={`registration-control up ${this.errorClass(this.state.formErrors.email)}`} name="email" type="email" id="reg_Email" required="required" placeholder="Email" />
          <input value={this.state.phone} onChange={this.handleUserInput} className={`registration-control down ${this.errorClass(this.state.formErrors.phone)}`} name="phone" type="tel" id="reg_Phone" required="required" placeholder="Phone Number" />
        </div>
        <div className="form-registration">
          <input value={this.state.username} onKeyPress={this.handleUserInput} onChange ={this.handleUserInput} className={`registration-control up ${this.errorClass(this.state.formErrors.username)}`} name="username" type="text" id="reg_username" required="required" placeholder="Username" />
          <input value={this.state.password} onChange={this.handleUserInput} className={`registration-control md ${this.errorClass(this.state.formErrors.password)}`} name="password" type="password" id="reg_password" required="required" placeholder="Password" />
          <input value={this.state.passwordConf} onChange={this.handleUserInput} className={`registration-control down ${this.errorClass(this.state.formErrors.passwordConf)}`} name="passwordConf" type="password" id="reg_passwordConf" required="required" placeholder="Password confirm" />
          <div className="Psw">
          The password must contain at least 8 characters. You can use letters, numbers and symbols from the list: `! @ # $% ^ &amp; * () _ - + = [] {}; : " |,. &lt;&gt; \ /?
          </div>
          <div className="row" >
            <div className="SCTCUargee">
              I have read, understood and accept Secure Checks Terms & Conditions of Use
            </div>
            <div className="col">
              <label className="switch">
                <input type="checkbox" checked={this.checked} ref="check_me" onClick={this.handleUserInput} className={`checkbx ${this.errorClass(this.state.formErrors.SCTCU)}`} name="SCTCU" value={this.checked}/>
                <span className="slider round" onClick={this.cneck} name="SCTCU" value></span>
              </label>
            </div>
          </div>
        </div>
        <Button type="Registration_Handler" />
      </div>
    )
  }
}

export default RegistrationForm
