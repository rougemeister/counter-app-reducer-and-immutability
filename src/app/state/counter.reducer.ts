import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setCounter, incrementBy, decrementBy } from './counter.actions';

export const initialState = JSON.parse(localStorage.getItem('count') ?? '0');



export const countReducer = createReducer(
  initialState,
  on(increment, (state, { amount }) => state + amount), // Handle the increment action with a fixed amount
  on(decrement, (state, { amount }) => Math.max(0, state - amount)), // Handle the decrement action with a fixed amount
  on(reset, () => 0), // Reset state to 0
  on(setCounter, (state, { value }) => value), // Set the counter to a specific value
  on(incrementBy, (state, { value }) => state + value), // Handle incrementBy with dynamic payload
  on(decrementBy, (state, { value }) => Math.max(0, state - value)) // Handle decrementBy with dynamic payload
);
