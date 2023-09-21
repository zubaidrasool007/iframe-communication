import logo from './logo.svg';
import './App.css';
import EmbeddedComponent from './embedded/embedded';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EmbeddedComponent />
      </header>
    </div>
  );
}

export default App;
