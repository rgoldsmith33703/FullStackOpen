/* eslint-disable react/prop-types */
const ErrorMessage = ({ message }) => {
  const style = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    border: '2px solid black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  
  if (message === null) {
    return null
  }

  return (
    <div style={style}className="ErrorMessage">
      {message}
    </div>
  )
}

export default ErrorMessage