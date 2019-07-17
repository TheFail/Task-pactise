import React from 'react'
import './Login'
import Button from '../Button/Button.js';
import Input from '../Input/Input.js';

function Login() {

return(
<div id="form">
    <Input type="text" id="log_email" required="required" placeholder="Email"></Input>
    <Input type="password" id="log_password" required="required" placeholder="Password"></Input>
        <a href="" id="forgot">Forgot your password?</a>
    <Button type="Login_Handler"></Button >
    No have account? Sign up for free.
     <a href="" >Sign up</a>
</div>
)
}

export default Login
