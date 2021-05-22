import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {},
};

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            };
        case 'FETCH_ERROR':
            return {
              loading: false,
              error: "Something went wrong!",
              post: {},
            };
        default:
            return state;        
    }
};

function DataFetchingUseReducer() {
    const [newState, dispatch] = useReducer(reducer, initialState);
    
    const {loading, error, post} = newState;
    
    useEffect(() => {

        const randomPost = Math.floor(Math.random() * 100) + 1;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${randomPost}`)
        .then(res => {
            dispatch({type: 'FETCH_SUCCESS', payload: res.data});
        })
        .catch(err => {
            dispatch({type: 'FETCH_ERROR'});
        })
    }, []); // execute the function when the component is loaded

    return (
      <div>
        {
            loading ? "Loading..." : error ?
         (<h1>{error}</h1>) : (<h1>{post.title}</h1>)
        }
      </div>
    );
}

export default DataFetchingUseReducer;
