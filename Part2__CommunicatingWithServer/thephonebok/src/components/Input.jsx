/* eslint-disable react/prop-types */
export default function Input({text, value, handleChange}) {
  return (
    <div>
      {text}: <input
                value={value} 
                onChange={handleChange}
              />
    </div>
  )
}