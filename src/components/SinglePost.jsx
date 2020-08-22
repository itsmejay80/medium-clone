import React, { useState,useEffect } from "react";
import { Card } from "react-bootstrap";
import "./SinglePost.css";
import db from '../firebase'
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

function SinglePost({title,content,lastUpdated,likesCount}) {
  const [likes, setLikes] = useState(likesCount);
  

  return (
    <Card className="singlePost">
      <Card.Img
        variant="top"
        src="https://giphy.com/gifs/xT9IgHq4eDQKKCHqAo/html5"
      />
      <Card.Body>
  <Card.Title>{title}</Card.Title>
        <Card.Text>
         {content}
        </Card.Text>
  <small className="text-muted">Last updated {lastUpdated}</small>
      </Card.Body>
      <Card.Footer className="postFooter">
        <ThumbUpIcon onClick={() => setLikes(likes + 1)} />
        <label htmlFor="">{likes}</label>
        <ThumbDownAltIcon onClick={() => setLikes(likes - 1)} />
      </Card.Footer>
    </Card>
  );
}

export default SinglePost;
