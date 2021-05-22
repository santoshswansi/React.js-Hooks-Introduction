import React, {useState} from 'react';
import useDocumentTitle from '../Hooks/useDocumentTitle';

function DocTitleOne() {

    const [count, setCount] = useState(0);
    useDocumentTitle(count);
    return (
      <div>
        <h1>Doc Title One: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
}

export default DocTitleOne
