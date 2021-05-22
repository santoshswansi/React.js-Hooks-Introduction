# Introduction to React Hooks

## What are Hooks?

- It is a new feature of React which allow us to use React features without using classes
- Hooks are functions that let us "hook into" React state and lifecycle features from functional components
- Ex: State of a component
- **Note:** Hooks do not work inside classes

## Why Hooks?

- __Reason Set 1__
  - need to understand how `this` keyword work in JavaScript
  - need to bind event handlers in class components
  - classes do not minify very well and make hot reloading very unreliable

> **Hot Reloading**: It only refreshes the files that were changed without losing the state of the app

- __Reason Set 2__
  - There is no particular way to re-use stateful component logic ( HOC & `render` props patterns do address this problem)
  - Makes the code harder to follow
  - There is a need to share stateful logic in a better way

- __Reason Set 3__
  - While creating components for complex scenarios such as "data fetching" & "subscribing to events", related code is not organized in place
  - __Example__
    - Data fetching - In `componentDidMount` & `componentDidUpdate`
    - Event Listeners - In `componentDidMount` & `componentWillUnmount`
  
  - Because of stateful logic - cannot break components into smaller ones

## `useState` hook
  
- It let us add state to the functional components 
- In classes, the state is always a object, with the
`useState` hook the state does not need to have to be an object
- `useState` hook returns an array with 2 elements :-
  - The first element is the name of the state
  - The second element is the state setter function

- Must use the previous state value to operate on it which modify it continuously
- While using with arrays or objects, always make sure to spread our state variable(Merging does not happen automatically)

## `useEffect` Hook

> __NOTE:__ Function has a side effect if it tries to modify anything outside of its body

- `useEffect` hook let us perform side effects in function components
- It can replace the functionalities of `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` lifecycle methods
- Lifecycle methods in class components put un-related code in same blocks of code, and related code in different blocks of code (__Example:__ Setting up timer/Clearing timer)

### Using multiple effects to separate concerns

- It helps us to put related code in the same block

```js
  function FriendStatusWithCounter(props) {
    
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });

    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
      function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }

      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    });
    // ...
  }
```

## `useContext` Hook

- Before hook, consuming multiple contexts being exposed by multiple providers need a `quite lines of code` 
- `useContext` provides us a much simpler approach in consuming context

## `useReducer` Hook

- It is a hook for state management in React
- It is an alternative to `useState`
- __What's the difference?__
  - `useState` is built using `useReducer` 

> __NOTE:__ It is related to reducer functions 

```js
  // Parameters: reducer function and initialState
  // Returns: An array containing newState and dispatch()
  
  // dispatch() needs a parameter to specify action 
  const [newState, dispatch] = useReducer(reducer, initialState)

  // reducer()
  newState = reducer(currentState, action)

```


### `useReducer` vs `useContext`

Scenario | useState | useReducer
---------|----------|----------
Type of State | Number, String, Boolean | Object or Array
Number of state transitions | One or Two | Too many
Related state transitions| No | Yes
Business Logic| No business logic | complex business logic
Local vs global | Local | Global

## `useCallback`

```js

  // It returns memoized version of the callback that only
  // changes if one of the dependencies has changed 

  // It avoid creation of its instance when one of the 
  // dependency list does not change thus, avoiding 
  // un-necessary render of JSX to which it is referenced
  const memoizedCallback = useCallback(() => {
      doSomething(a, b);
    }, [a, b]);

```

## useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- It returns a memoized value
- `useMemo` will only recompute the memoized value when one of the dependencies has changed

> __NOTE:__ Function passed to `useMemo` runs during rendering


## useRef

```js
  const inputRef = useRef(initialValue);
```

- It returns a mutable reference object whose `.current` property is initialized to the passed argument (`initialValue`) 
- Returned object will persist for the lifetime of the component

```js
  function TextInputWithFocusButton() {

    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };

    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>
          Focus the input
        </button>
      </>
    );
  }
```

### Other use of `useRef()`

- `ref` object is a generic container whose `current` property is mutable(changeable) and can hold any value

```js
  function Timer() {
    const intervalRef = useRef();

    useEffect(() => {
      intervalRef.current = setInterval(() => {
        // ...
      });

      return () => {
        clearInterval(intervalRef.current);
      };
    });

    // Now we can clear interval from outside 
    // using  `clearInterval(intervalRef.current)`
  }
```

## Custom Hooks

- A custom hook is a JavaScript function which starts with `use`
- A custom hook can use other hooks if required
- __WHY?__ To share logic between multiple components 