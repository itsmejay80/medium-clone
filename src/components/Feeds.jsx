import React, { useState,useEffect } from "react";
import SinglePost from "./SinglePost.jsx";
import "./Feeds.css";
import db from '../firebase.js'

function Feeds(){
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    db.collection("posts").onSnapshot((snapshot)=>{
      // setPosts(snapshot.docs.map(doc=>doc.data))
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All data in 'books' collection", data);
      setPosts(data)
    })
  },[posts.title])
console.log(posts)

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
