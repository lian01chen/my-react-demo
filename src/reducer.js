// import { combineReducers } from 'redux';
import { combineReducers, combineReducers_v2 } from './my-redux/combineReducers';

function updateCount(state = 0, actoin) {
  switch (actoin.type) {
    case 'add':
      return (state + 1);
    case 'minus':
      return state - 1;
    default:
      return state;
  }
};

function updateColor(state = 'blue', action) {
  switch (action.type) {
    case 'color':
      return action.payload
    default:
      return state;
  }
}



export default combineReducers_v2({
  count: updateCount,
  color: updateColor,
})