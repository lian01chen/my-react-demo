import React from 'react';
import { store, providerContext, connect } from './redux';

export default function Try() {
  return (
    <providerContext.Provider value={store}>
      <div>
        have a try!
      </div>
      <hr />
      <CompA />
      <hr />
      <CompB />
      <hr />
      <CompC />
    </providerContext.Provider>
  )
}


function CompA() {
  console.log('CompA');
  return (
    <div>
      CompA
      <User />
    </div>
  )
}

function CompB() {
  console.log('CompB');
  return (
    <div>
      CompB
      <ModifyUser />
    </div>
  )
}


const CompC = connect(state => state.group)(
  ({ name }) => {
    console.log('CompC');
    return (
      <div>
        CompC
        <div>group:{name}</div>
      </div>
    )
  }
)


const User = connect(state => state.user)(({ name }) => {
  console.log('User');
  return (
    <div>
      当前用户是-{name}
    </div>
  )
});

const ModifyUser = connect(null, (dispatch) => {
  return { updateUser: payload => dispatch({ type: 'updateUser', payload }) }
})
  ((props) => {
    console.log('ModifyUser');
    const { updateUser, state } = props;
    return (
      <div>
        <input type="text"
          value={state.user.name}
          onChange={e => {
            updateUser({ name: e.target.value });
          }} />
      </div>
    )
  });