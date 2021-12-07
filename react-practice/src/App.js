import logo from './logo.svg';
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import './App.css';
import UseReducer from './Components/UseReducer';

function App() {
  return (
    <div className="App">
     <UseState />
     <hr />
     <UseEffect />
     <hr />
     <UseReducer/>
    </div>
  );
}

export default App;
