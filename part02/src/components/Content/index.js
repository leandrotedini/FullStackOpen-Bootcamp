import React from "react";
import Part from "../Part";

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map(part => 
        <li key={part.id}><Part name={part.name} exercises={part.exercises} /></li>
      )}
    </ul>
  )
}

export default Content