import logo from './components/logo.svg';
import ShowArea from './components/ShowArea';
import Buttons from './components/Buttons';
import Todos from './components/Todos';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ShowArea />
        <Buttons />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1
        </a>
        <Todos style={{ marginTop: 20 }} />
      </header>
    </div>
  );
}

export default Home;
