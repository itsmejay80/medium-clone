import React, { useState,useEffect } from 'react'
import {useParams} from "react-router-dom";
import { app } from "../firebase";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";


import '../components/Post.css'


const db = app.firestore();

const  Post=()=> {
    let { id } = useParams();
    let [post,setPost]=useState("")
    const [postlikes, setPostLikes] = useState("");
   let likesValue
    useEffect( ()=>{
        db.collection('posts')
        .doc(id)
        .get()
        .then(doc=>{
            post=doc.data()
            setPost(post)
            setPostLikes(post.likesCount)
        })
},[])
    
    return(
        <div className="container" >
            <h1 className="title">{post.title}</h1>
            <img src={post.imageUrl} alt=""/>
            <br/>
            <p className="content">{post.content}</p>
            <div className="postFooter">
                <ThumbUpIcon onClick={() => {
                    post.likesCount =post.likesCount +1;
                    setPostLikes(post.likesCount)
                    const ref =db.collection("posts").doc(id);
                    ref.update({likesCount: post.likesCount});
                    }} />
                <label > {postlikes} </label>
                <ThumbDownAltIcon onClick={ () => {
                    post.likesCount =post.likesCount -1;
                    setPostLikes(post.likesCount)
                    const ref =db.collection("posts").doc(id);
                    ref.update({likesCount: post.likesCount});
                    }} />
            </div>
        </div>
    )
}

export default Post;