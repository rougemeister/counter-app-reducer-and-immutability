import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setCounter, incrementBy, decrementBy, undo } from './counter.actions';

// Initial state as a number with a history array to track previous states
export const initialState = {
  current: JSON.parse(localStorage.getItem('count') ?? '0'), // Current count
  history: [] as number[]  // History of previous counts
};

export const countReducer = createReducer(
  initialState,
  on(increment, (state, { amount }) => ({
    ...state,
    history: [...state.history, state.current], // Push current state to history
    current: state.current + amount // Increment the current count
  })),
  on(decrement, (state, { amount }) => ({
    ...state,
    history: [...state.history, state.current], // Push current state to history
    current: Math.max(0, state.current - amount) // Decrement the current count
  })),
  on(reset, (state) => ({
    ...state,
    history: [...state.history, state.current], // Push current state to history
    current: 0 // Reset the current count to 0
  })),
  on(setCounter, (state, { value }) => ({
    ...state,
    history: [...state.history, state.current], // Push current state to history
    current: value // Set the counter to the specified value
  })),
  on(incrementBy, (state, { value }) => ({
    ...state,
    history: [...state.history, state.current], // Push current state to history
    current: state.current + value // Increment by the specified value
  })),
  on(decrementBy, (state, { value }) => ({
    ...state,
    history: [...state.history, state.current], // Push current state to history
    current: Math.max(0, state.current - value) // Decrement by the specified value
  })),
  on(undo, (state) => ({
    ...state,
    current: state.history.length > 0 ? state.history[state.history.length - 1] : state.current, // Restore the last state
    history: state.history.slice(0, -1) // Remove the last state from history
  }))
);
