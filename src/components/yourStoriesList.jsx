import React, { useState,useEffect,useContext } from "react";
import "./Feeds.css";
import { app } from "../firebase";
import SinglePost from "./SinglePost.jsx";


import {AuthContext} from "../Auth";

const db = app.firestore();

const YourStories = () => {
  const {authuser,userName,userEmail} = useContext(AuthContext)
  const [posts,setPosts]=useState([ ])
  

 
  useEffect( ()=>{
       userEmail && db.collection('posts')
      .where('emailId','==',userEmail)
      .get()
      .then( (querySnapshot)=>{
        const data=querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(data) 
      }) 
    
  },[userEmail])
  console.log(posts)
  

    return ( 
      <div className="feeds">
      <h3>Welcome {userName}</h3>
        <ul>{
           posts.map(post=>(
          <li>
          <SinglePost key={post.id} id={post.id} title={post.title} content={post.content} imageUrl={post.imageUrl} likesCount={post.likesCount}/>
        </li>
        ))          
          }
        </ul>
      </div>
     );
}
 
export default YourStories;