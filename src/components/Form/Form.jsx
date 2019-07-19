import React from 'react'
import ReactDOM from 'react-dom'
import './Form.css'
import Login from '../Login/Login.jsx'
import Registration from '../Registration/Registration.jsx'
import Button from '../Button/Button.jsx'
import { tsPropertySignature } from '@babel/types'

class Form extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      active: 'FIRST'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.active = this.state.active
    this.newActive = this.active === 'FIRST' ? 'SECOND' : 'FIRST'
    this.setState({
      active: this.newActive
    })
  }

  render () {
    this.active = this.state.active

    return (
      <div>
        {this.active === 'FIRST' ? (
          <Login />
        ) : this.active === 'SECOND' ? (
          <Registration />
        ) : null}
        <Button type={this.active} onClick={this.handleClick} />
      </div>
    )
  }
}

export default Form
