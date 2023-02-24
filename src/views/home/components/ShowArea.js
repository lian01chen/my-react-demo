import React from 'react';
import { connect } from 'react-redux';

function ShowArea(props) {
  const { count, color } = props;
  return (
    <div style={{ margin: 10 }}>
      this is show-area comp.
      <div style={{ textDecorationLine: 'underline', color: color }}>now count is:{count}</div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    ...state,
    ...props
  }
}

export default connect(mapStateToProps)(ShowArea);