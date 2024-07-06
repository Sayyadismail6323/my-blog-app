import React from 'react';

const Post = ({ post, onEdit }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <button onClick={() => onEdit(post.id)}>Edit</button>
  </div>
);

export default Post;
