import React from 'react'

const Button = ({ onClick, caption }) => {
  return (
    <button onClick={onClick}>{caption}</button>
  )
}

export default Button