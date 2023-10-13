/* eslint-disable react/prop-types */
import { useState } from "react"

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  let newArray = new Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(newArray)


  function randomAnecdote() {
    let randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  function voteForAnecdote() {
    setPoints(prevState => {
      let copyPrevState = [...prevState]
      copyPrevState[selected] += 1
      return copyPrevState
    })
  }
  
  let maxPointsIndex = points.indexOf(Math.max(...points))
  let maxPoints = points[maxPointsIndex]



  return (
    <div>
      <Antidote
        heading="Anecdote of the day"
        anecdote={anecdotes[selected]}
        numberVotes={points[selected]} />
      <Button 
        handleClick={voteForAnecdote}
        text="vote"
      />
      <Button 
        handleClick={randomAnecdote}
        text="next anecdote"
      />
      {points.some(e => e > 0) &&
      <Antidote
        heading="Anecdote with most votes"
        anecdote={anecdotes[maxPointsIndex]}
        numberVotes={maxPoints} />}
    </div>
  )
}

const Antidote = ({heading, anecdote, numberVotes}) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{anecdote}</p>
      <p>has {numberVotes} votes</p>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

export default App