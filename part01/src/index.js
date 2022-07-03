import React from 'react'
import ReactDOM from 'react-dom'
import Anecdotes from './components/Anecdotes'

export default function App () {



  return (
    <div>
      <Anecdotes />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)