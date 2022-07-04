import React, { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Anecdotes = () => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))


  const randomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const voteComent = (comentId) => {
    let newVotes = {...votes}
    newVotes[comentId] += 1

    setVotes(newVotes)  
  }

  const calculateMostVoted = (votes) => {
    let mostVoted = {id:0, votes:0}
    let values = Object.values(votes);
    for(let i=0; i< values.length; i++){

      if (values[i] > mostVoted.votes) {
        mostVoted.id = i
        mostVoted.votes = values[i]
      }
    }

    return mostVoted.id
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <button onClick={() => voteComent(selected)}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[calculateMostVoted(votes)]}
    </div>
  )
}


export default Anecdotes