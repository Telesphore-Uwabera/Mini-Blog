import React from 'react';

interface PostProps {
  post: {
    title: string;
    author: string;
    content: string;
    date: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const postIsNew = new Date(post.date).getTime() > Date.now() - 24 * 60 * 60 * 1000; 
  const isAuthorTelesphore = post.author === 'Telesphore';
  return (
    <div
      className="post"
      style={{
        backgroundColor: isAuthorTelesphore ? '#857208FF' : '#007847',
        margin: '10px 0',
        padding: '15px',
        borderRadius: '8px',
      }}
    >
      <h2>{post.title}</h2>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Posted on:</strong> {post.date}</p>
      <p>{post.content.slice(0, 100000)}</p>
    </div>
  );
};

export default Post;
