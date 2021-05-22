import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {

    const [post, setPost] =  useState({});
    const [id, setId] =  useState(1);
    const [idOnButtonClick, setIdOnButtonClick] = useState(1);

    useEffect(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${idOnButtonClick}`)
          .then((res) => {
              setPost(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
    }, [idOnButtonClick]);

    return (
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={() => setIdOnButtonClick(id)}>Fetch Post</button>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
}

export default DataFetching;

