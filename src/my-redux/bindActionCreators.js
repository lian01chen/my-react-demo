export function bindActionCreators(actions, dispatch) {
  let currentActions = {};
  Object.keys(actions).forEach(key => {
    currentActions[key] = (payload) => dispatch(actions[key](payload));
  })
  return currentActions;
}


export const bindActionCreators_v2 = (actions, dispatch) => {
  let newActions = {};
  for (let key in actions) {
    newActions[key] = () => dispatch(actions[key].apply(null, arguments));
  }
  return newActions;
}
