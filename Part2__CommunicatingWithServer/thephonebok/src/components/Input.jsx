/* eslint-disable react/prop-types */
import React from 'react'
export default function Input({ text, value, handleChange }) {
  return (
    <div>
      {text}: <input
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}