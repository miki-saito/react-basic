import React, { useState, useEffect } from "react";
// import axios from "axios";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);

  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    //   axiosで取得する場合
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //   .then((res) => {
    //     setPosts(res.data);
    //   });

    // fetchで取得する場合
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
    // eslint-disable-next-line
  }, [clicked]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(env) => setId(env.target.value)}
      />
      <br />
      <button type="button" onClick={handlerClicked}>
        Get post
      </button>
      <br />
      {posts.title}
    </div>
  );
};

export default ApiFetch;
