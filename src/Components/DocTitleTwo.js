import React, {useState} from 'react';
import useDocumentTitle from '../Hooks/useDocumentTitle';

function DocTitle() {

    const [count, setCount] = useState(0);

    // using the useDocumentTitle hook
    useDocumentTitle(count);
    return (
      <div>
        <h1>Doc Title One: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
}

export default DocTitle;
