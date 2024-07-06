import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createPost, updatePost, getPostById } from '../services/api';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const post = getPostById(id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    }
  }, [id]);

  const handleSubmit = () => {
    if (id) {
      updatePost(id, { title, content });
    } else {
      createPost({ title, content });
    }
    history.push('/');
  };

  return (
    <div className="create-post">
      <h2>{id ? 'Edit' : 'Create'} Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreatePost;
