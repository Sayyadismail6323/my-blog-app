let posts = [
    { id: 1, title: 'First Post', content: 'This is my first post!' },
    { id: 2, title: 'Second Post', content: 'This is my second post!' },
  ];
  
  export const getPosts = () => posts;
  
  export const getPostById = (id) => posts.find(post => post.id === id);
  
  export const createPost = (post) => {
    post.id = posts.length + 1;
    posts.push(post);
  };
  
  export const updatePost = (id, updatedPost) => {
    posts = posts.map(post => (post.id === id ? { ...post, ...updatedPost } : post));
  };
  