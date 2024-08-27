import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter Component] Increment',
  props<{ amount: number }>()
);

export const decrement = createAction(
  '[Counter Component] Decrement',
  props<{ amount: number }>()
);

export const reset = createAction('[Counter Component] Reset');

export const setCounter = createAction(
  '[Counter Component] Set Counter',
  props<{ value: number }>()
);

export const incrementBy = createAction(
  '[Counter] Increment By',
  props<{ value: number }>()  // Expecting a property named 'value'
);

export const decrementBy = createAction(
  '[Counter Component] Decrement By',
  props<{ value: number }>() // This will carry the payload
);

// Add the undo action here
export const undo = createAction('[Counter Component] Undo');
