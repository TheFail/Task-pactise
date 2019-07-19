import React from 'react'
import './Button.css'
import Login from '../Login/Login.jsx'
import Form from '../Form/Form.jsx'

function Button (props) {
  if (props.type === 'Login_Handler') {
    return (
      <div>
        <button type="button" id="button" className="button"><span>Login</span></button>
      </div>
    )
  } else if (props.type === 'Registration_Handler') {
    return (
      <div>
        <button type="button" id="button" className="button" ><span>Registration</span></button>
      </div>
    )
  } else if (props.type === 'FIRST') {
    return (
      <div>
        <button type="button" id="change" className="button" onClick={props.onClick}><span>Sign up</span></button>
      </div>)
  } else if (props.type === 'SECOND') {
    return (
      <div>
        <button type="button" id="change" className="button" onClick={props.onClick}><span>Go to Login</span></button>
      </div>)
  }
};

export default Button
