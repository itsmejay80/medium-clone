import React, { useState } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ImageUploader from 'react-images-upload';
// import {useImage} from 'react-image'
import "./NewPost.css";

const NewPost = () => {
  const [pictures,setPictures]=useState([])
  console.log(pictures[0])
  return ( 
    <div className="container">
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
        <TextareaAutosize className="title" placeholder="Title" />
        <br />
        <br />
        <TextareaAutosize
          className="content"
          placeholder="Tell your story..."
        />
      </form>
    </div>
  );
};


export default NewPost;
