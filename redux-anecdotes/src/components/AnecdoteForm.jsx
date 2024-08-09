import { useDispatch } from 'react-redux'
import { appendAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer';
import anecdoteServer from '../services/anecdotes';

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const addNew = async (event) => {
        event.preventDefault();
        const content = event.target.newContent.value;
        event.target.newContent.value = '';
        const newItem = await anecdoteServer.createNew(content);
        dispatch(appendAnecdote(newItem));
        dispatch(setNotification(`Added anecdote '${content}'`));
        setTimeout(() => dispatch(setNotification(null)), 5000);
      };
    
      return (
        <>
          <h2>create new</h2>
          <form onSubmit={addNew}>
            <div><input name='newContent' /></div>
            <button type='submit'>create</button>
          </form>
        </>
      );
};

export default AnecdoteForm;
