import { countReducer, initialState } from './counter.reducer';
import { decrement, increment, reset, setCounter } from './counter.actions';

describe('countReducer', () => {
  it('should return the initial state', () => {
    expect(countReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should increment the count', () => {
    expect(countReducer(0, increment({ amount: 1 }))).toEqual(1);
    expect(countReducer(5, increment({ amount: 2 }))).toEqual(7);
  });

  it('should decrement the count', () => {
    expect(countReducer(5, decrement({ amount: 1 }))).toEqual(4);
    expect(countReducer(3, decrement({ amount: 2 }))).toEqual(1);
    expect(countReducer(1, decrement({ amount: 2 }))).toEqual(0);
  });

  it('should reset the count', () => {
    expect(countReducer(5, reset())).toEqual(0);
    expect(countReducer(10, reset())).toEqual(0);
  });

  it('should set the count', () => {
    expect(countReducer(0, setCounter({ value: 10 }))).toEqual(10);
    expect(countReducer(5, setCounter({ value: 20 }))).toEqual(20);
  });
});