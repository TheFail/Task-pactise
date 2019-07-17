import React from 'react'
import './Registration.css'
import Button from '../Button/Button.js'
import Input from '../Input/Input.js'
import Login from '../Login/Login.js'
import Form from '../Form/Form.js'
import App from '../App/App.js'

function Registration_Form () {
  return (
    <div id="Registration">
      <div id="Name">
        <table >
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
      </div>
      <div id="Date">
        <Input type="date" id="reg_Date" required="required" placeholder="Date of Birth" />
      </div>
      <div id="Contact">
        <table >
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
      <div id="Password">
        <Input type="password" id="reg_password" required="required" placeholder="Password" />
      </div>
      <font value="The password must contain at least 8 characters. You can use letters, numbers and symbols from the list: `! @ # $% ^ & * () _ - + = [] {}; :  |,. <> \ /?" size="8" />
      <Button type="Registration_Handler" />
      <a href="" onClick='{<App form={<Login/>} />}'>Back to Login</a>
    </div>

  )
}

export default Registration_Form
