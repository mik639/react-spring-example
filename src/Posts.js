import React, { useState, useEffect, useCallback } from "react";
import { Trail } from "react-spring";

export function Posts() {
  const [posts, updatePosts] = useState([]);
  const fetchPosts = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    updatePosts(posts.slice(0, 10));
  });
  const removePost = useCallback(id =>
    updatePosts(posts.filter(post => post.id !== id))
  );
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Trail
        items={posts}
        keys={item => item.id}
        from={{ transform: "translate3d(0,40px,0)" }}
        to={{ transform: "translate3d(0,0px,0)" }}
      >
        {post => style => (
          <div style={style} className="posts__item">
            <Post {...post} onRemove={() => removePost(post.id)} />
          </div>
        )}
      </Trail>
    </div>
  );
}

function Post({ title, body, onRemove }) {
  return (
    <div className="post">
      <h4 className="post__title">{title}</h4>
      <div className="post__content">{body}</div>
      <button onClick={onRemove} className="post__remove">
        X
      </button>
    </div>
  );
}
