import React from 'react';
import './App.css';
import { useSelector , useDispatch } from "react-redux" 
import { increase, decrease } from './actions/Toggle';
function App() {
  const myState = useSelector((state) => state)
  const dispatch = useDispatch();
  return (
    <>
    <h1>Implemented Redux in create-react-app</h1>
      <h1>{myState}</h1>
      <button onClick = {() => dispatch(increase())}>Increase</button>
      <button onClick = {()=> dispatch(decrease())}>Decrease</button>
    </>
  );
}

export default App;
