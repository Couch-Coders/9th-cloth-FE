import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import count from './count';

const combinedReducer = combineReducers({
    count,
});

const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    } else {
      return combinedReducer(state, action);
    }
  };
export default rootReducer;
