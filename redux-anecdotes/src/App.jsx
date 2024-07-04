import { useSelector, useDispatch } from 'react-redux'
import { incrementVote, createNew } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(incrementVote(id))
  }

  const addNew = (event) => {
    event.preventDefault()
    const content = event.target.newContent.value
    event.target.newContent.value = ''
    dispatch(createNew(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div><input name='newContent' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App