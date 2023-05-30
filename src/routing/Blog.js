import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      console.log(result.data);
      setPosts(result.data);
    });
  }, []);

  return (
    <>
      <h3>Blog</h3>
      <div className="posts">
        {posts.map((post) => {
          return (
            <>
              <div className="post" key={post.id}>
                <h2>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p>{post.body}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Main;
