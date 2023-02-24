import { connect } from 'react-redux';

function rgbColor() {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

function Buttons(props) {
  const { dispatch } = props;
  return (
    <div>
      <button
        style={{ color: '#fff', width: 66, height: 34, fontSize: 20, fontWeight: 'bold', backgroundColor: '#198cff', borderRadius: 4, borderColor: 'transparent' }}
        onClick={() => {
          console.log('+');
          dispatch({ type: 'add' });
        }}
      >
        +
      </button>
      <button
        style={{ color: '#fff', width: 66, height: 34, fontSize: 20, fontWeight: 'bold', backgroundColor: '#FF5959', borderRadius: 4, borderColor: 'transparent', marginLeft: 10, marginRight: 10 }}
        onClick={() => {
          console.log('-');
          dispatch({ type: 'minus' });
        }}
      >
        -
      </button>
      <div style={{ margin: 20 }}>
        <button
          style={{ color: '#222', width: 152, height: 44, fontSize: 20, fontWeight: 'bold', backgroundColor: '#B3D2FF', borderRadius: 4, borderColor: 'transparent' }}
          onClick={() => {
            dispatch({ type: 'color', payload: rgbColor() });
          }}
        >
          change color
        </button>
      </div>

    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    ...state,
    ...props
  }
}
export default connect(mapStateToProps)(Buttons);