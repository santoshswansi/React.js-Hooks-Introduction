import React, {useState} from 'react';

function HookCounterFour() {

    let count = 0;
    const [items, addItem] = useState([]);
    return (
        <div>
            <button onClick={() => addItem([
                    ...items,
                    {
                        id: ++count,
                        number: Math.floor(Math.random()*10) + 1,
                    }                    
            ])}>
            Add Item!    
            </button>
            <ul>
                {
                    items.map(item => 
                        <li key={item.id}>{item.number}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default HookCounterFour;
