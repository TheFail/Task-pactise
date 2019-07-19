import React from 'react'
import './Input.css'

function Input (props) {
  return (
    <div>
      <input id="inputStand" class="Input-standart" lang="en" id={props.id} type={props.type} {...props.required} placeholder={props.placeholder} value={props.value} onFocus={props.onFocus}></input>
    </div>
  )
}

export default Input
