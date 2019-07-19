import React from 'react'
import './Registration.css'
import Button from '../Button/Button.jsx'
import Login from '../Login/Login.jsx'
import Form from '../Form/Form.jsx'
import App from '../App/App.js'
import $ from 'jquery'

function RegistrationForm () {
  return (
    <div className="Registration">
      <div className="form-signin ">
        <input type="text" required placeholder="First Name" id="inputFrName" class="form-control up"/>
        <input type="text" required placeholder="Middle Name (Not required)" id="inputMdName" class="form-control md"/>
        <input type="text" required placeholder="Last Name" id="inputLsName" class="form-control md"/>
        <input class="form-control down" type="date" id="reg_Date" required="required" placeholder="Date of Birth" />
      </div>
      <div className="form-signin marg" >
        <input class="form-control up" type="email" id="reg_Email" required="required" placeholder="Email" />
        <input class="form-control down" type="tel" id="reg_Phone" required="required" placeholder="Phone Number" />
      </div>
      <div className="form-signin">
        <input class="form-control up" type="text" id="reg_username" required="required" placeholder="Username" />
        <input class="form-control md" type="password" id="reg_password" required="required" placeholder="Password" />
        <input class="form-control down" type="password" id="reg_passwordconf" required="required" placeholder="Password confirm" />
        <div className="Psw">
        The password must contain at least 8 characters. You can use letters, numbers and symbols from the list: `! @ # $% ^ &amp; * () _ - + = [] {}; : " |,. &lt;&gt; \ /?
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div id="SCTCUargee" class="col" >
            I have read, understood and accept Secure Checks Terms & Conditions of Use
            </div>
            <div class="col col-lg-auto align-self-center">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Button type="Registration_Handler" />
      <a href="" onClick={<Form />}>Back to Login</a>
    </div>

  )
}

export default RegistrationForm
