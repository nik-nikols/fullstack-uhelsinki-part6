import { createSlice } from '@reduxjs/toolkit';
import anecdoteServer from '../services/anecdotes';

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

//const initialState = anecdotesAtStart.map(asObject)

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      return state.concat(action.payload);
    },
    incrementVote(state, action) {
      const id = action.payload;
      console.log('incrementVote: id: ', id);
      return state.map(item => item.id === id ? {...item, votes: item.votes + 1} : item);
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const items = await anecdoteServer.getAll();
    dispatch(setAnecdotes(items));
  };
};

export const createNew = (content) => {
  return async (dispatch) => {
    const newItem = await anecdoteServer.createNew(content);
    dispatch(appendAnecdote(newItem));
  };
};

export const incrementAnecdoteVote = (id) => {
  return async (dispatch, getState) => {
    const item = getState().anecdotes.find(el => el.id == id);
    const newItem = await anecdoteServer.updateItem({...item, votes: item.votes + 1});
    dispatch(incrementVote(id));
  };
};

export const { setAnecdotes, appendAnecdote, incrementVote} = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
