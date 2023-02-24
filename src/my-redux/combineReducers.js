/**
 * input: 输入一个reducer object，多个reduer文件或者对象
 * output: 输出一个包含完整state结构的state对象 ,reducer 返回的一定是state
 * TODO: 对比源码好像有一个区分是否源码的过程 
 * 注意：
 *   return currentState 必须在function内，否则视图不更新
 * @param {*} reducers 
 */
export function combineReducers(reducers) {
  let rootReducer = {};
  Object.keys(reducers).forEach(itemKey => {
    if (typeof reducers[itemKey] === 'function') {
      rootReducer[itemKey] = reducers[itemKey];
    }
  })

  return function (state = {}, action) {
    // currentState 必须注册在这里，保证每次return一个新的对象，否则视图不更新
    const currentState = {};
    Object.keys(rootReducer).forEach(key => {
      currentState[key] = rootReducer[key](state[key], action);
    })
    return currentState;
  }
}

/**
 * 在这里实现一个简写的版本
 */
export const combineReducers_v2 = (reducers) => (state = {}, action) => {
  let currentState = {};
  Object.keys(reducers).forEach(key => {
    currentState[key] = reducers[key](state[key], action);
  })
  return currentState
}