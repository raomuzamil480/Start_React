import React, { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {

    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <div className="container">
      <h1>Like Button</h1>

      <div className="heart-container" onClick={handleClick}>
        {liked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </div>

      <p className="count">Likes: {count}</p>
    </div>
  );
}

export default LikeButton;