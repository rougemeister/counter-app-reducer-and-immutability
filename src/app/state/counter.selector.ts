import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCountState = (state: AppState) => state.count;

export const selectCount = createSelector(
  selectCountState,
  (count: number) => count
);

