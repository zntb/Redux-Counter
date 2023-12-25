import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      // Must always set all the other states!
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    // Never do it like that!
    state.counter--;

    return {
      counter: state.counter,
      showCounter: state.showCounter,
    };

    // return {
    //   counter: state.counter - 1,
    //   showCounter: state.showCounter,
    // };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
