import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Statics from './components/Statics'

const calculateTotal = (good, neutral, bad) => good + neutral + bad

const calculateAverage = (good, neutral, bad) => {
  let average = (good - bad) / calculateTotal(good, neutral, bad)
  return Number.isNaN(average) ? 0 : average
}

const calculatePositivePercentage = (good, neutral, bad) => {
  let PositivePercentage = good * 100 / calculateTotal(good, neutral, bad)
  return Number.isNaN(PositivePercentage) ? 0 : PositivePercentage
}

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

      <Button onClick={incrementGoodComents} caption='good' />
      <Button onClick={incrementNeutralComents} caption='neutral' />
      <Button onClick={incrementBadComents} caption='bad' />

      <h1>statics</h1>

      {calculateTotal(good, neutral, bad) === 0
      ?
        <div>
          <br/>
          <strong>No feedback given</strong>
        </div>
      :
        <>
          <Statics text='good' value={good} />
          <Statics text='neutral' value={neutral} />
          <Statics text='bad' value={bad} />
          <Statics text='average' value={calculateAverage(good, neutral, bad)} />
          <Statics text='positive percentage' value={calculatePositivePercentage(good, neutral, bad) } />
        </>
      } 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)