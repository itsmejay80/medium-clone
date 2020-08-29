import React, { useState,useEffect} from "react";
import { Card } from "react-bootstrap";
import "./SinglePost.css";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";



import { app } from "../firebase";

const db = app.firestore();

function SinglePost({title,id,content,lastUpdated,imageUrl,likesCount}) {
  const [likes, setLikes] = useState(likesCount);
  useEffect(()=>{
    const ref =db.collection("posts").doc(id);
    ref.update({likesCount:likes})
  },[likes])
  return (
    <Card className="singlePost" >
      <a href={"/post/"+ id }  style={{color:'inherit',textDecoration:'none'}}>
      <Card.Img
        variant="top"
        src={imageUrl}
      />
      <Card.Body>
  <Card.Title>{title}</Card.Title>
        <Card.Text>
         {content}
        </Card.Text>
  <small className="text-muted">Last updated {lastUpdated}</small>
      </Card.Body>
      </a>
      <Card.Footer className="postFooter">
        <ThumbUpIcon onClick={() => setLikes(likes + 1)} />
        <label htmlFor="">{likes}</label>
        <ThumbDownAltIcon onClick={() => setLikes(likes - 1)} />
      </Card.Footer>
    </Card>
  );
}

export default SinglePost;
