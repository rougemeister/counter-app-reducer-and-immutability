// undo.reducer.ts
import { ActionReducer } from '@ngrx/store';

export interface UndoableState<T> {
  past: T[];
  present: T;
  future: T[];
}

export function undoRedo<T>(reducer: ActionReducer<T>): ActionReducer<UndoableState<T>> {
  const initialState: UndoableState<T> = {
    past: [],
    present: reducer(undefined, { type: '' }),
    future: [],
  };

  return (state = initialState, action): UndoableState<T> => {
    switch (action.type) {
      case '[Undo] Undo': {
        const { past, present, future } = state;
        if (past.length === 0) return state; // No past states to undo

        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        };
      }

      case '[Undo] Redo': {
        const { past, present, future } = state;
        if (future.length === 0) return state; // No future states to redo

        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        };
      }

      default: {
        const newPresent = reducer(state.present, action);
        if (state.present === newPresent) return state; // No state change, no need to save history

        return {
          past: [...state.past, state.present],
          present: newPresent,
          future: [],
        };
      }
    }
  };
}
