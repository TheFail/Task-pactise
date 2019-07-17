import React from 'react'
import ReactDOM from 'react-dom'
import './Form.css'
import Login from '../Login/Login.js';
import Registration from '../Registration/Registration.js'
import { tsPropertySignature } from '@babel/types';

function Form (prop)
{
        return(
            <div id="form">
                {prop.name}
            </div>
        )
}

export default  Form;
