import React from 'react';
import './Button.css';


function Button (props)
{
 if (props.type=="Login_Handler") {
    return (
    <div>
        <button type="button" id="button" className="button"><span>Login</span></button>
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
