/* eslint-disable react/prop-types */
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </>
  )
}

const Header = ({name}) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => (
        <Part 
          key={part.id} 
          name={part.name}
          numExercises={part.exercises}
        />
      ))}
    </>
  )
}

const Part = ({name, numExercises}) => {
  return (
    <>
      <p>{name} {numExercises}</p>
    </>
  )
}

const Total = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p style={{fontWeight: "bold"}}>
      total of {totalExercises} exercises
    </p>
  )
}


export default App