import React, { useState, useEffect, useContext } from "react";
import SinglePost from "./SinglePost.jsx";
import "./Feeds.css";
import { app } from "../firebase";

import { AuthContext } from "../Auth";

const db = app.firestore();

function Feeds() {
  const { userName, userEmail } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
    });
  }, []);

  return (
    <div className="feeds">
      {userName ? <h3>Welcome {userName}</h3> : null}

      <ul>
        {posts.map((post) => (
          <li>
            <SinglePost
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              imageUrl={post.imageUrl}
              likesCount={post.likesCount}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feeds;
