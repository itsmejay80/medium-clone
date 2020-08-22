import React, { useState } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ImageUploader from 'react-images-upload';
// import {useImage} from 'react-image'
// import {Button} from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import db from '../firebase'
import "./NewPost.css";

const NewPost = () => {
  const [pictures,setPictures]=useState([])
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")

  const post =(e)=>{
      db.collection("posts").add({
        title:title,
        content:content,
        likesCount:0
      })
  }
  return ( 
    <div className="container">
      <form action="/">
      <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                withPreview ='true'
                onChange={(picture)=>setPictures(pictures.concat(picture))}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
      <img src={pictures.dataURL} alt=""/>
      <form action="">
        <TextareaAutosize value={title} onChange={(e)=>{setTitle(e.target.value)}} className="title" placeholder="Title" />
        <br />
        <br />
        <TextareaAutosize
          value={content}
          onChange={(e)=>{setContent(e.target.value)}}
          className="content"
          placeholder="Tell your story..."
        />
      </form>
      <br/>
      <br/>
      <Button type='submit'  variant="contained" onClick={post} >Post</Button>
      </form>
      
    </div>
  );
};


export default NewPost;
