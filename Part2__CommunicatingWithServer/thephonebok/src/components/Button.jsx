/* eslint-disable react/prop-types */
export default function Button({text, type, handleClick}) {
  return (
    <button 
      type={type}
      onClick={handleClick}>
      {text}
    </button>
  )
}