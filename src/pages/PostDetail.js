import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PostDetail.css";

function PostDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state;

  if (!post) {
    return (
      <div className="post-detail">
        <h2>Post not found</h2>
        <button className="back-btn" onClick={() => navigate("/blog")}>
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="post-detail">
      <img src={post.image} alt={post.title} className="detail-image" />
      <h1>{post.title}</h1>
      <p className="content">{post.content}</p>
      <button className="back-btn" onClick={() => navigate("/blog")}>
        ← Back to Blog
      </button>
    </div>
  );
}

export default PostDetail;