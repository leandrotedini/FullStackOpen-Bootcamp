import React from "react";
import Part from "../Part";

const Content = ({ parts }) => {

  const totalExercises = parts.reduce(
    (previousValue, part) => {
      return previousValue += part.exercises
    }, 0);

  return (
    <>
      <ul>
        {parts.map(part => 
          <li key={part.id}><Part name={part.name} exercises={part.exercises} /></li>
        )}
      </ul>

      <strong>Total of {totalExercises} exercises</strong>
    </>
  )
}

export default Content