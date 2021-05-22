import React, {useState} from 'react';

function HookCounterTwo() {

    let initialCount = 0;
    const [count, updateCount] = useState(initialCount);
    const incrementFive = () => {
        for(let i=0; i<5; ++i){
          /*
           // this will not update the count by 5
           updateCount(count + 1);
          */
          
          // correct 
          updateCount(prevCount => prevCount+1);
        }     
    };

    return (
      <div>
        <h1>{count} click(s)!</h1>
        <button onClick={() => updateCount(prevCount => prevCount+1)}>Increment</button>
        <button onClick={() => updateCount(prevCount => prevCount-1)}>Decrement</button>
        <button onClick={() => updateCount(initialCount)}>Reset</button>
        <button onClick={incrementFive}>Increment Five</button>
      </div>
    );
}

export default HookCounterTwo;
