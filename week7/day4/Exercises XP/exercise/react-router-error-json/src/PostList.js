import React from "react";
import posts from "./posts.json";

function PostList() {
  return (
    <div>
      <h3>📚 Blog Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
