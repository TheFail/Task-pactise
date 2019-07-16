import React from 'react';
import './Button.css';
import Login from '../Login/Login.js'


function Button (props)
{
 if (props.type=="Login_Handler") {
    return (
    <div>
        <button type="button" id="button" className="button" onClick={Login}><span>Login</span></button>
    </div>
    )
}

else if (props.type=="Registration_Handler") {
    return (
        <div>
            <button type="button" id="button" className="button"><span>Registration</span></button>
        </div>
        )
}
};

export default Button;
