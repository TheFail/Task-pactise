import React from 'react'
import './Button.css'


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
      <div className="RegLink">
        No have account? <a href="javascript:void(null);" onClick={props.onClick}> Sign up </a> for free.
      </div>)
  } else if (props.type === 'SECOND') {
    return (
      <div>
        <a href="javascript:void(null);" onClick={props.onClick}>Back to Login</a>
      </div>)
  }
};

export default Button
