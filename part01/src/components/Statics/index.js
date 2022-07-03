import React from 'react'

const calculateTotal = (good, neutral, bad) => good + neutral + bad

const calculateAverage = (good, neutral, bad) => {
  
  //let total = good + neutral + bad
  let average = (good - bad) / calculateTotal(good, neutral, bad)
  return Number.isNaN(average) ? 0 : average
}

const calculatePositivePercentage = (good, neutral, bad) => {
  let PositivePercentage = good * 100 / calculateTotal(good, neutral, bad)
  return Number.isNaN(PositivePercentage) ? 0 : PositivePercentage
}

const Statics = ({ good, neutral, bad }) => {

  return (
    <>
      <p>Average: {calculateAverage(good, neutral, bad)}</p>
      <p>Positive Percentage: {calculatePositivePercentage(good, neutral, bad)} %</p>
    </>
  )
}

export default Statics