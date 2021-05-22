import React, {useContext} from 'react';

import {CounterContext} from '../index';

function ComponentI() {

    const {state, dispatch} = useContext(CounterContext);
    return (
      <div>
        <h1>Component I: {state.counter}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    );
}

export default ComponentI;
