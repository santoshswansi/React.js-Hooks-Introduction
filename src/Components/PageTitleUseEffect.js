import React, { useState, useEffect } from "react";

function PageTitleUseEffect() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // Function inside the useEffect will be called after 
    // every render

    // "Conditionally run effect": Pass an array[dependency
    // array] as second arg to useEffect()
    useEffect(() => {
        document.title = `${count} clicks!`; 
        console.log("Updating the title")
    }, [count]); 

    return (
        <div>
            <input 
                type="text" 
                value = {name} 
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count+1)}>{count} clicks!</button>
        </div>
    )
}

export default PageTitleUseEffect;
