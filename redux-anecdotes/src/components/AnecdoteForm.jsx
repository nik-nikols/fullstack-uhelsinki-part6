import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const addNew = (event) => {
        event.preventDefault();
        const content = event.target.newContent.value;
        event.target.newContent.value = '';
        dispatch(createNew(content));
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
