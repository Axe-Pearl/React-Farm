import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions/Togglebtns';
import './App.css'
function App() {
  const myState = useSelector(state => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
    <h1>Implemented Redux in vital app</h1>
     <h1>{myState}</h1>
     <button onClick = {()=> dispatch(increase()) }>Increase</button>
     <button onClick = {()=> dispatch(decrease()) }>Decrease</button>
    </>
  )
}

export default App
