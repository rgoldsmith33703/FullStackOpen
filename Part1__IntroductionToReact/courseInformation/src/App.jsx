const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content part={parts[0]} exercise={exercises[0]} />
      <Content part={parts[1]} exercise={exercises[1]} />
      <Content part={parts[2]} exercise={exercises[2]} />
      <Total totalExercises={exercises[0] + exercises[1] + exercises[2]} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.totalExercises}
    </p>
  )
}

export default App


