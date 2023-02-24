/**
 * test useReducer
 * 1. useReducer 在简单组件内控制状态，无法存取全局的store，如果要全局，则要配合使用useContext hook ，这样又使得性能不够
 * 2. useReducer 不能配合middleware使用
 * 3. useReducer中的dispatch 和 store中的dispatch不是一个，所以用useReducer中的dispatch并不能触发store 中reducer注册的对应的action
 */
import { connect } from 'react-redux';
import { useReducer, useState } from 'react';
import './todo.css';

function updateTodo(state = [], action) {
  switch (action.type) {
    case 'addTodo':
      return [].concat(state, action.payload);
    case 'removeTodo':
      const { index } = action
      const temp = state.slice();
      temp.splice(index, 1);
      return temp
    default:
      return state;
  }
}

function TodoList(props) {
  const { color } = props;
  const [todoList, dispatch] = useReducer(updateTodo, []);
  const [textVal, setTextVal] = useState('');
  return (
    <div style={props.style}>
      <div>this is your todo list :</div>
      <div>
        <label htmlFor="addTodo">add a todo:</label>
        <input
          type="text"
          id="addTodo"
          // style={{ marginLeft: 10, background: '#282c34', border: 'none', borderBottom: '1px solid #fff' }}
          value={textVal}
          onChange={(e) => { setTextVal(e.target.value.trim()); }}
        />
        <button
          style={{ color: '#fff', width: 66, height: 28, fontSize: 18, fontWeight: 'bold', backgroundColor: "rgb(1,189,88)", borderRadius: 4, borderColor: 'transparent', marginLeft: 10, }}
          onClick={() => {
            if (!textVal) return;
            dispatch({
              type: 'addTodo', payload: {
                text: textVal,
                color
              }
            });
            setTextVal('');
          }}
        >
          add
        </button>
      </div>
      {
        todoList?.map((item, index) => {
          const { color, text } = item || {};
          return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 32 }} key={text + index}>
              <li style={{ textAlign: 'left', color, fontSize: 18 }} >{text}</li>
              <button
                style={{ color, width: 66, height: 20, fontSize: 13, fontWeight: 'bold', backgroundColor: "#fff", borderRadius: 4, borderColor: 'transparent', marginLeft: 20, }}
                onClick={() => {
                  dispatch({ type: 'removeTodo', index });
                }}
              >
                remove
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

// 可以获取store中数据
const mapStateToProps = (state, props) => {
  return {
    ...state,
    ...props
  }
}

export default connect(mapStateToProps)(TodoList); 