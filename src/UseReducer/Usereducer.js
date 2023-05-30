import React from 'react'
import { useReducer } from 'react'

const initalStae = 0;
const reducer = (state, action)=>{
    console.log (state, action)
    if(action.type === "Increment"){
        return state + 1
    }
    if(action.type === "Decrement"){
        return state - 1
    }
    return state;
}

function Usereducer() {
  const [state, dispatch] = 
  useReducer(reducer,initalStae);
    return (
        <>
    <p>{state}</p>
    <div className=''>
        <button onClick={()=> dispatch({type: "Increment"})}> Inc</button>
        <button onClick={()=> dispatch({type: "Decrement"})}> Dec</button>
    </div>
</>

  )
}

export default Usereducer