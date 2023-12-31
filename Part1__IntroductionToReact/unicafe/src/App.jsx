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
  let all = good + neutral + bad
  let avg = (good - bad) / all
  let pos = good / all
  
  return (
    <>
      <h2>statistics</h2>
      { (all === 0) ?  
      <p>No feedback given</p> :
      <table>
        <tbody>  
          <tr>
            <StatisticLine text="good" total={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" total={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" total={bad} />
          </tr>
          <tr>
            <StatisticLine text="all" total={all} />
          </tr>
          <tr>
            <StatisticLine text="average" total={avg} />
          </tr>
          <tr>
            <StatisticLine text="positive" total={pos} />
          </tr>
        </tbody>
      </table>}
    </>
  )
}

const StatisticLine = ({text, total}) => {
  return (
    <>
      <td>{text}</td>
      <td>{total}</td>
    </>
  )
}

export default App