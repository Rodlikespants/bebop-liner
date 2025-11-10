import logo from './logo.svg';
import './App.css';
import Score from './score';
// import Score from 'react-vexflow';


function App() {
  const exampleStaves = [
        [['g3', 8], ['d4', 8], ['e4', 2], 'd4'],
        ['a4', 'd4', 'e4', 'd4'],
        ['a4', 'a4', 'b4', 'a4'],
        ['d4', 'e4', ['g3', 2]],
      ]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Score staves={exampleStaves} width={600} height={200}/>
    </div>
  );
}

export default App;
