import React from 'react';
import ReactDOM from 'react-dom';

// local imports 
// import HookCounterOne from './Components/HookCounterOne';
// import HookCounterTwo from "./Components/HookCounterTwo";
// import HookCounterThree from "./Components/HookCounterThree";
// import HookCounterFour from './Components/HookCounterFour';
// import PageTitleUseEffect from "./Components/PageTitleUseEffect";
// import MouseCoordinatesUseEffect from "./Components/MouseCoordinatesUseEffect";
// import UseEffectWithCleanup from './Components/UseEffectWithCleanup';
// import DataFetching from './Components/DataFetching';
// import ComponentA from './Components/ComponentA';
// import CounterOneUseReducer from './Components/CounterOneUseReducer';
// import CounterTwoUseReducer from './Components/CounterTwoUseReducer';

// import ComponentI from "./Components/ComponentI";
// import ComponentII from "./Components/ComponentII";
// import ComponentIII from "./Components/ComponentIII";

// import DataFetchingUseReducer from './Components/DataFetchingUseReducer';

// import CounterUseMemo from './Components/CounterUseMemo';
// import FocusUseRef from './Components/FocusUseRef';
// import DocTitleOne from './Components/DocTitleOne';
// import DocTitleTwo from "./Components/DocTitleTwo";

import NameForm from './Components/NameForm';



// we will share name and roll with 
// component C using useContext
//        Main Component
//              |
//              A
//              |
//              B
//              |
//              C   
// const NameContext = React.createContext();
// const RollContext = React.createContext();


// sharing state between components A, D and F using 
// useReducer and useContext

/*
             Main Component 
                  |
    ---------------------------
    |            |            |
    I            II           III
                 |            |
                 IV           V
                              |
                              VI
*/

// export const CounterContext = React.createContext();

// const initialState = {
//   counter: 0,
// };

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return { counter: state.counter + 1 };
//     case "decrement":
//       return { counter: state.counter - 1 };
//     case "reset":
//       return { counter: initialState.counter};
//     default:
//       return state;  
//   }
// };

function App() {
    // const [newState, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        {/* <HookCounterOne /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <PageTitleUseEffect /> */}
        {/* <MouseCoordinatesUseEffect /> */}
        {/* <UseEffectWithCleanup/> */}
        {/* < DataFetching /> */}

        {/* <NameContext.Provider value="Santosh Swansi">
          <RollContext.Provider value="732">
              <ComponentA />
          </RollContext.Provider>
        </NameContext.Provider> */}
        {/* <CounterOneUseReducer /> */}
        {/* <CounterTwoUseReducer/> */}

        {/* useReducer() with useContext() */}
        {/* <CounterContext.Provider value={{state: newState, dispatch: dispatch}}>
          <h1 style={{color: 'red'}}>State Sharing Among Multiple Components!</h1>
          <h1>{newState.counter}</h1>
          <ComponentI />
          <ComponentII />
          <ComponentIII />
        </CounterContext.Provider> */}
        {/* <DataFetchingUseReducer /> */}
        {/* <CounterUseMemo /> */}
        {/* <FocusUseRef /> */}
        {/* <DocTitleOne />
        <DocTitleTwo /> */}
        <NameForm />
      </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// export {NameContext, RollContext};