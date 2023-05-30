import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";
function SingleBlog() {

  let navigaet = useNavigate();

    const {id} = useParams()
    const [singlepost, setSinglepost] = useState({})
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((result) => {
        console.log(result);
        setSinglepost(result.data);
      })
      .catch((err)=>{
        return navigaet("*")

      })
  }, []);

  return (
    <>
    <h1>single post</h1>
    <div className="Single_post">
        <h4>{singlepost.title}</h4>
        <p>{singlepost.body}</p>
    </div>
    </>

  )
}

export default SingleBlog;
