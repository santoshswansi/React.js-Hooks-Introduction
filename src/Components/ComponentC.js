import React, {useContext} from 'react';
import {NameContext, RollContext} from '../index';

function ComponentC() {

    const name = useContext(NameContext);
    const roll = useContext(RollContext);

    return (
        <div>
            Name: {name}, Roll: {roll} 
        </div>
    )
}

export default ComponentC;
