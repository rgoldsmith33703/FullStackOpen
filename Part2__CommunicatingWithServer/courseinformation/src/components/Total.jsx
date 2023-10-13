/* eslint-disable react/prop-types */

const Total = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p style={{fontWeight: "bold"}}>
      total of {totalExercises} exercises
    </p>
  )
}

export default Total