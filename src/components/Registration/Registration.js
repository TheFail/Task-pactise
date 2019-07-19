import React from 'react'
import './Registration.css'
import Button from '../Button/Button.js'
import Input from '../Input/Input.js'
import Login from '../Login/Login.js'
import Form from '../Form/Form.js'
import App from '../App/App.js'

function RegistrationForm () {
  return (
    <div className="Registration">
      {/* <div className="Name">
        <table cellspacing="0">
          <th>
            <tr>
              <Input type="text" id="reg_FName" required="required" placeholder="First Name" />
            </tr>
            <tr>
              <Input type="text" id="reg_MName" required="" placeholder="Middle Name (Not necessary)" />
            </tr>
            <tr>
              <Input type="text" id="reg_LName" required="required" placeholder="Last Name" />
            </tr>
          </th>
        </table>
      </div> */}

      <div class="input-group-vertical-collapse">
        <input type="text" class="form-control"/>
        <input type="text" class="form-control"/>
      </div>

      <div className="Date">
        <Input type="date" id="reg_Date" required="required" placeholder="Date of Birth" />
      </div>
      <div className="Contact">
        <table>
          <td>
            <tr>
              <Input type="email" id="reg_Email" required="required" placeholder="Email" />
            </tr>
            <tr>
              <Input type="tel" id="reg_Phone" required="required" placeholder="Phone Number" />
            </tr>
          </td>
        </table>
      </div>
      <div className="Password">
        <Input type="password" id="reg_password" required="required" placeholder="Password" />
        <font size="2" color="grey">"The password must contain at least 8 characters. You can use letters, numbers and symbols from the list: `! @ # $% ^ &amp; * () _ - + = [] {}; : " |,. &lt;&gt; \ /?" size="8" </font>
        <font id="Read" size="3" color="Black"><br/>I have read, understood and accept Secure
        Checks Terms & Conditions of Use
        </font>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round">
          </span>
        </label>

      </div>
      <Button type="Registration_Handler" />
      <button type="button" class="btn btn-primary">Primary</button>
      <a href="" onClick="{<App form={<Login/>} />}">Back to Login</a>
    </div>

  )
}

export default RegistrationForm
