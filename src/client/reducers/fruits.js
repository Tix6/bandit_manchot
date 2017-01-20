import { FRUIT_LOADED, FINAL_FRUITS } from '../actions/';

const fruits = (state = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case FRUIT_LOADED:
      return state.map(f => ((f.id === payload.id) ? payload : f));
    case FINAL_FRUITS:
      return state.map(f => ({ ...payload, id: f.id }));
    default:
      return state;
  }
};

export default fruits;
