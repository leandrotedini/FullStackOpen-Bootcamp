import React from "react";

const Filter = ({ filter, handler }) => {

  return (
    <div>
      <span>filter shown with </span> 
      <input value={filter} onChange={handler} />
    </div>
  )
}

export default Filter