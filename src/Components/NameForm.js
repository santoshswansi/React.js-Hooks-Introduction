import React from 'react';
import useInput from '../Hooks/useInput';

function NameForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput("");
    
    const submitHandler = () => {
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    };

    return (
      <div>
        <form onSubmit={() => submitHandler()}>
          <div>
            <label>First Name:</label>
            <input type="text" {...bindFirstName} />
          </div>

          <div>
            <label>Last Name:</label>
            <input type="text" {...bindLastName} />
          </div>
          <div>
              <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
}

export default NameForm;
