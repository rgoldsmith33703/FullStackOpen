/* eslint-disable react/prop-types */
const Notification = ({ message }) => {
  const style = {
    color: 'green',
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
    <div style={style}className="notification">
      {message}
    </div>
  )
}

export default Notification