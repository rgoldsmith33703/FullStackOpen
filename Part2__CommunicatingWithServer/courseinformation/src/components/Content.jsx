/* eslint-disable react/prop-types */

import Part from './Part'

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

export default Content