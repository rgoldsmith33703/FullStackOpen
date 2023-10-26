/* eslint-disable react/prop-types */
import React from 'react'
export default function Button({ text, type, handleClick }) {
  return (
    <button
      type={type}
      onClick={handleClick}>
      {text}
    </button>
  )
}