import React, {useReducer} from 'react';


// Using useReducer for state management of multiple states
// is easier to code and much cleaner

// Use multiple reducer if two state variables have same set
// of operations
const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};

const reducer = (state, action) => {
    switch (action.type) {
      case "increment1":
        return {...state, firstCounter: state.firstCounter + action.value};
      case "decrement1":
        return {...state, firstCounter: state.firstCounter - action.value};
      case "increment2":
        return {...state, secondCounter: state.secondCounter + action.value};
      case "decrement2":
        return {...state, secondCounter: state.secondCounter - action.value};
      case "reset":
        return {firstCounter: initialState.firstCounter, secondCounter: initialState.secondCounter};
      default:
        return state;
    }
}

function CounterTwoUseReducer() {

    const [newState, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Counter1 {newState.firstCounter}</h1>
            <h1>Counter2 {newState.secondCounter}</h1>
            <div>
                <button onClick={() => dispatch({type: "increment1", value: 1})}>Increment 1</button>
                <button onClick={() => dispatch({type: "decrement1", value: 1})}>Decrement 1</button>
                <button onClick={() => dispatch({type: "increment1", value: 5})}>Increment 5</button>
                <button onClick={() => dispatch({type: "decrement1", value: 5})}>Decrement 5</button>
            </div>
            <div>
                <p>For Second Counter</p>
                <button onClick={() => dispatch({type: "increment2", value: 2})}>Increment 2</button>
                <button onClick={() => dispatch({type: "decrement2", value: 2})}>Decrement 2</button> 
            </div>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwoUseReducer;
