import React, { useState,useEffect } from "react";
import SinglePost from "./SinglePost.jsx";
import "./Feeds.css";
import db from '../firebase.js'

function Feeds(){
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    db.collection("posts").onSnapshot((snapshot)=>{
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All data in 'books' collection", data);
      setPosts(data)
    })
  },[])

  return(
    <div className="feeds">
        <ul>{
           posts.map(post=>(
          <li>
          <SinglePost key={post.id} title={post.title} content={post.content} likesCount={post.likesCount}/>
        </li>
        ))          
          }
        </ul>
      </div>
  )
}


export default Feeds;
