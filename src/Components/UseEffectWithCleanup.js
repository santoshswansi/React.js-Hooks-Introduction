import React, {useState} from 'react';

// local imports
import MouseCoordinatesUseEffect from './MouseCoordinatesUseEffect';

function UseEffectWithCleanup() {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <MouseCoordinatesUseEffect/>}
        </div>
    )
}

export default UseEffectWithCleanup;
