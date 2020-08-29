import React, { useState,useContext } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from '@material-ui/core/Button';
import "./NewPost.css";
import { app } from "../firebase";
import {AuthContext} from "../Auth";

const db = app.firestore();

const NewPost = () => {
  const {authuser,userName,userEmail}=useContext(AuthContext)
  const [fileUrl, setFileUrl] = useState("");
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")

  
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const savePost =  async(e) =>{
    let  data = await {
      title:title,
      content:content,
      likesCount:0,
      imageUrl:fileUrl,
      name:userName,
      emailId:userEmail
    }
    await db.collection("posts").add(data)
    await setFileUrl("")
  }
  return ( 
    <div className="container">
      <input type="file" onChange={onFileChange} />
      <form   action="/" >   
      <img src={fileUrl} alt=""/>
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
      <Button type='submit' variant="contained" onClick={savePost} >Post</Button>
      
      </form>
      
    </div>
  );
};


export default NewPost;
