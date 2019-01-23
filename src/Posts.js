import React, { useState, useEffect } from "react";

export function Posts() {
  const [posts, updatePosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    updatePosts(posts.slice(0, 10));
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="posts__item">
          <Post {...post} />
        </div>
      ))}
    </div>
  );
}

function Post({ title, body }) {
  return (
    <div className="post">
      <h4 className="post__title">{title}</h4>
      <div className="post__content">{body}</div>
    </div>
  );
}
