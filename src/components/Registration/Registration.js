import React from 'react';
import ReactDOM from 'react-dom'
import './Registration.css';
import Button from '../Button/Button.js';
import Input from '../Input/Input.js';
import Login from '../Login/Login.js';

function  Registration_Form () {
    return  (
    <div id="Registration">
        <div id="Name">
            <Input type="text" id="reg_FName" required="required" placeholder="First Name" />
            <Input type="text" id="reg_MName" required="" placeholder="Middle Name (Not necessary)" />
            <Input type="text" id="reg_LName" required="required" placeholder="Last Name" />
        </div>
        <div id="Date">
            <Input type="date" id="reg_Date" required="required" placeholder="Date of Birth" />
        </div>
        <div id="Contact">
            <Input type="email" id="reg_Email" required="required" placeholder="Email" />
            <Input type="tel" id="reg_Phone" required="required" placeholder="Phone Number" />
        </div>
        <div id="Password">
            <Input type="password" id="reg_password" required="required" placeholder="Password" />
        </div>
        <Button type="Registration_Handler" />
        <a href="" >Back to Login</a>
    </div>

    )
}

export default Registration_Form;

