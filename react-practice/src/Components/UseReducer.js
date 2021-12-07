import React,{ useReducer } from 'react'
const initialState = 0;


const reducer = (state,action) =>{
    // console.log(action);
    if(action.type === "Increment"){
        return state+1;
    }
    if(action.type === "Decrement"){
       return state-1;
    }
    return 0;
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <h1>Implementation using useReducer Hook</h1>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
             <h1>{state}</h1>
             <div style={{display:"flex",justifyContent:"center"}}>
              <button onClick={()=> dispatch({type: "Increment"})}>Increase</button>
              <button onClick={()=> dispatch({type: "Reset"})}>Reset</button>
              <button onClick={()=> dispatch({type: "Decrement"})}>Decrease</button>
             </div>
        </div>
        </>
    )
}

export default UseReducer




// useReducer ---> component-> dispatch(action) -> reducer -> store -> notify the change to component

// const [state,dispatch]  = useReducer(reducer,initialState) --> reducer is a function and initialState is initial value