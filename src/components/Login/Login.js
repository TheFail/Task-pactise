import React from 'react'
import './Login'
import Button from '../Button/Button.js';
import Input from '../Input/Input.js';
import Form from '../Form/Form.js';
import Registration from '../Registration/Registration.js'
import App from '../App/App.js';


function Login() {

return(
<div id="Login">
    <Input type="text" id="log_email" required="required" placeholder="Email"></Input>
    <Input type="password" id="log_password" required="required" placeholder="Password"></Input>
        <a href="" id="forgot">Forgot your password?</a>
    <Button type="Login_Handler"></Button >
    No have account? <a href="" onClick={<App form={<Registration/>} />}>Sign up</a> for free.

</div>
)
}

export default Login
