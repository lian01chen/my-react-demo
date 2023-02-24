import React, { useEffect, useState, useContext } from "react";

export const providerContext = React.createContext(null);

export const store = {
  state: {
    user: { name: 'frank' },
    group: { name: 'fe' }
  },
  setState(newState) {
    store.state = newState;
    store.listeners.map(fn => fn(store.state));
  },
  listeners: [],
  subscribe(fn) {
    store.listeners.push(fn);
    // 取消订阅 这个有什么用？？？
    return () => {
      const index = store.listeners.indexOf(fn);
      store.listeners.splice(index, 1);
    }
  }
}


///  比较更新
function hasChanged(pre, nex) {
  let changed = false;
  for (let key in pre) {
    if (pre[key] !== nex[key])
      changed = true;
  }
  return changed
}

///connect 给每个组件包装一个dispatch
//高级设计： 采用两次调用的方式，可以进一步拆分，输出一个包含数据源的半成品组件生成器，然后生成别的不同的展示组件
export const connect = (selector, mapDispatchToProps) => (Component) => {
  return (props) => {
    const { state, setState } = useContext(providerContext);
    const [, update] = useState({});

    ///dispatch,规范setState流程
    const dispatch = (action) => {
      setState(reducer(state, action));
    }

    const data = (selector && typeof selector === 'function') ? selector(state) : { state };

    const dispatchers = mapDispatchToProps ? mapDispatchToProps(dispatch) : { dispatch };

    // 初始化订阅一次
    useEffect(() => store.subscribe(() => {
      /// newData 为什么不能直接用state，而要用store.state
      const newData = (selector && typeof selector === 'function') ? selector(store.state) : { state: store.state };
      // 搞清楚这里比较的是什么
      if (hasChanged(data, newData)) {
        // 用来发现订阅的次数
        console.log('update')
        update({});
      }
    }), [selector])

    return (
      <Component {...props} {...data}  {...dispatchers} />
    )
  }
}


// reducer,规范state创建的reducer纯函数
export function reducer(state, action) {
  if (action.type === 'updateUser') {
    return {
      ...state,
      user: {
        ...state.user,
        ...action.payload
      }
    }
  }
  return state;
}
