import React from 'react'

const Input = (props) => {
  return (
    <div className='Container'>
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.type} id={props.id} onChange ={props.onChange} value={props.value} />
    </div>
  )
}

export default Input