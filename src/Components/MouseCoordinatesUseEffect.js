import React, {useState, useEffect} from 'react';

function MouseCoordinatesUseEffect() {

    const [x, setX] = useState(0); 
    const [y, setY] = useState(0); 

    const logMousePosition = e => {
        console.log("Mouse Event");

        // update the coordinates 
        setX(e.clientX);
        setY(e.clientY);
    }

    // Empty Dependency Array : It resemble the function of
    // of `componentDidMount`  
    useEffect(() => {
        console.log("useEffect called!");
        
        // add event listener to the window only when the 
        // component is first mounted
        window.addEventListener('mousemove', logMousePosition)

        // return clean up function (Equivalent to what could
        // be done on `componentWillUnmount`)
        return () => {
            console.log("Component un-mounting");
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return (
        <div>
            X = {x}, Y = {y}
        </div>
    )
}

export default MouseCoordinatesUseEffect;
