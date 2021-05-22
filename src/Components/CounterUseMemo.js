import React, {useState, useMemo} from 'react';

function CounterUseMemo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }
    
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        // Increase the time complexity of it
        let i=0;
        while(i < 1000000000){
            ++i;
        }

        return counterOne%2 === 0;
    }, [counterOne]); 
    // re-call the function passed to `useMemo` when counterOne
    // changes, and use the memoized output for others 

    return (
      <div>
        <div>
          <h1>CounterOne-{counterOne}</h1>
          <p>{isEven ? 'Even' : 'Odd'}</p>
          <button onClick={() => incrementOne()}>IncrementOne</button>
        </div>
        <div>
          <h1>CounterTwo-{counterTwo}</h1>
          <button onClick={() => incrementTwo()}>IncrementTwo</button>
        </div>
      </div>
    );
}

export default CounterUseMemo;
