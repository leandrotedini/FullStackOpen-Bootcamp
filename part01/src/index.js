import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGoodComents = () => {
    setGood(good + 1)
  }

  const incrementNeutralComents = () => {
    setNeutral(neutral + 1)
  }

  const incrementBadComents = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={incrementGoodComents}>good</button>
      <button onClick={incrementNeutralComents}>neutral</button>
      <button onClick={incrementBadComents}>bad</button>



      <h1>statics</h1>

      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)