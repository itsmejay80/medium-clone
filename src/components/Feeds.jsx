import React, { useState,useEffect } from "react";
import SinglePost from "./SinglePost.jsx";
import "./Feeds.css";
import { app } from "../firebase";

const db = app.firestore();

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
          <SinglePost key={post.id} id={post.id} title={post.title} content={post.content} imageUrl={post.imageUrl} likesCount={post.likesCount}/>
        </li>
        ))          
          }
        </ul>
      </div>
  )
}


export default Feeds;
