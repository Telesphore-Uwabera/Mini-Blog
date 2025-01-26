import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import './App.css';

const App: React.FC = () => {
  const [showNewPosts, setShowNewPosts] = useState(false); 

  const handleNewPostClick = () => {
    setShowNewPosts(!showNewPosts); 
  };

  return (
    <div>
      <Header onNewPostClick={handleNewPostClick} /> 
      <PostList showNewPosts={showNewPosts} /> 
    </div>
  );
};

export default App;
