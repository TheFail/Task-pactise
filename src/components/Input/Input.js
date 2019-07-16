import React from 'react';
import './Input.css';

function Input (props) {


    if (props.type==="log_email") {
        return (
        <div>
            <input id={props.type} type="text" required placeholder="Username or Email"></input>
        </div>
        )
    }

    else if (props.type==="log_password") {
        return (
            <div>
                <input id={props.type} type="password" required placeholder="Password"></input>
            </div>
            )
    }


};

export default Input;
