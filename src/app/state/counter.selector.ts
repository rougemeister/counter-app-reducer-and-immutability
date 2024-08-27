// counter.selectors.ts
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CounterState } from '../counter.state';

// Select the feature state
export const selectCountState = (state: AppState) => state.count;

// Select the current count from the CounterState
export const selectCurrentCount = createSelector(
  selectCountState,
  (state: CounterState) => state.current
);
export const selectHistory = createSelector(
  selectCountState,
  (state: CounterState) => state.history
);