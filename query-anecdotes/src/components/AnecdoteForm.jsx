import { useAddNewMutation } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {

  const [addNew, addNewResult] = useAddNewMutation();

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    addNew(content);
    console.log('new anecdote');
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
