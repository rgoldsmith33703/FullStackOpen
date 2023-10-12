/* eslint-disable react/prop-types */
import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleClick(event) {
    switch(event.target.innerText) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
      default:
        console.log('An error has occured in click handling.');
    }
  }



  return (
    <div>
      <Feedback 
        handleClick={handleClick}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

const Feedback = ({handleClick}) => {
  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick={handleClick} text="good" />
      <Button handleClick={handleClick} text="neutral" />
      <Button handleClick={handleClick} 
      text="bad" />
    </>

  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <h2>statistics</h2>
      <Total text="good" total={good} />
      <Total text="neutral" total={neutral} />
      <Total text="bad" total={bad} />
    </>
  )
}

const Total = ({text, total}) => {
  return (
    <>
      {text} {total}
      <br />
    </>
  )
}

export default App