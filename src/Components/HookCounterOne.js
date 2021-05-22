import React, {useState} from 'react';

function HookCounterOne() {

    const [count, updateCount] = useState(0);
    return (
        <div>
            <button onClick={() => updateCount(count+1)}>{count} click(s)</button>
        </div>
    );
}

export default HookCounterOne;
