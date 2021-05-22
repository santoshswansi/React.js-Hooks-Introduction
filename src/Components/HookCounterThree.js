import React, {useState} from 'react';

function HookCounterThree() {

    // state can be object, array, boolean, etc
    const [name, setName] = useState({firstName: '', lastName: ''});
    return (
      <div>
        <form>
          <input
            type="text"
            value={name.firstName}
            /*                 
               While updating a particular key of state 
               we need to include the remaining keys
               (Here merging is required which is not 
               automatically done in in classes)
            */    
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
          <h1>First Name is {name.firstName}</h1>
          <h1>First Name is {name.lastName}</h1>
        </form>
      </div>
    );
}

export default HookCounterThree;
