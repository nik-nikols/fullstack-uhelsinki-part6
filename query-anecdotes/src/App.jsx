import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useGetAllQuery } from './reducers/anecdoteReducer';

const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const {
    data: anecdotes,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllQuery();

  console.log('anecdotes: ', anecdotes);
  console.log('isSuccess: ', isSuccess);
  console.log('isLoading: ', isLoading);
  console.log('isError: ', isError);
  console.log('error: ', error);

  // const anecdotes = [
  //   {
  //     "content": "If it hurts, do it more often",
  //     "id": "47145",
  //     "votes": 0
  //   },
  // ]

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (isError) {
    return (
      <h2>anecdote service not available due to problems in server</h2>
    );
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
