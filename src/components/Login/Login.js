import React from 'react'
import './Login.css'
import Button from '../Button/Button.js'
import Input from '../Input/Input.js'
import Form from '../Form/Form.js'
import Registration from '../Registration/Registration.js'
import App from '../App/App.js'

function Login () {
  return (
    <div className="Login">
      <div className="form-signin">
        <input class="form-control up" type="text" id="reg_username" required="required" placeholder="Username" />
        <input class="form-control down" type="password" id="reg_password" required="required" placeholder="Password" />
      </div>
      <a href="" id="forgot">Forgot your password?</a>
      <Button type="Login_Handler"></Button >
      <div className="RegLink">
        No have account? <a href="" onClick={<App form={<Registration/>} />}> Sign up </a> for free.
      </div>
    </div>
  )
}

export default Login
