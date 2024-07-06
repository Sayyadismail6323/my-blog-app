import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/api';
import Post from './Post';
import { useHistory } from 'react-router-dom';

const PostsDisplay = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  return (
    <div className="posts-display">
      {posts.map(post => (
        <Post key={post.id} post={post} onEdit={handleEdit} />
      ))}
      <button onClick={() => history.push('/create')}>Create Post</button>
    </div>
  );
};

export default PostsDisplay;
