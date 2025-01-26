import React from 'react';
import Post from './Post';
import '../styles/PostList.css';

interface PostListProps {
  showNewPosts: boolean; 
}

const PostList: React.FC<PostListProps> = ({ showNewPosts }) => {
  const posts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      author: 'Telesphore',
      authorBio: 'Telesphore is a front-end developer passionate about building intuitive web applications. He has extensive experience working with React and loves optimizing performance with modern React features. He enjoys mentoring others in the React community and frequently shares tips on improving code quality.',
      content: 'React Hooks, introduced in React 16.8, are a set of functions that allow developers to use state and lifecycle methods in functional components. Before hooks, React developers had to rely on class-based components for managing state, handling side effects, and using lifecycle methods like componentDidMount and componentDidUpdate. Hooks eliminate the need for classes, making code more concise and readable. Key hooks like useState, useEffect, and useContext provide powerful tools to manage component state, side effects, and context in a simpler, more functional approach. For example, the useState hook allows components to retain and update local state without needing a constructor or this.setState. The useEffect hook manages side effects such as data fetching, subscriptions, or manual DOM manipulation in a more declarative way. Understanding and mastering hooks can significantly improve the quality and performance of React applications, and it’s a key skill for any React developer to learn.',
      date: '2025-01-26',
      category: 'React',
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox',
      author: 'Uwabera',
      authorBio: 'Uwabera is a UI/UX designer who loves to create beautiful, responsive web layouts. She specializes in building layouts that adapt seamlessly to all screen sizes, ensuring an optimal user experience across devices. She is an advocate for using CSS Grid and Flexbox together to create elegant, scalable designs.',
      content: 'CSS Grid and Flexbox are two of the most important layout systems in modern CSS. While both tools can help create flexible and responsive designs, they serve different purposes and have distinct use cases. CSS Grid is a two-dimensional layout system, meaning it can handle both rows and columns at the same time. This makes it ideal for creating complex, grid-based layouts such as product galleries, dashboards, or even entire page layouts. For instance, if you want to create a webpage with multiple sections, like a header, sidebar, content area, and footer, CSS Grid can easily manage the layout in a single container by defining both row and column tracks. On the other hand, Flexbox is a one-dimensional layout system, meaning it deals with either rows or columns, but not both simultaneously. Flexbox is perfect for aligning items within a single row or column, such as navigation bars, buttons, or any element that needs equal spacing between its children. When combined, CSS Grid and Flexbox can complement each other to create highly responsive layouts. Flexbox is often used for simpler layout tasks, such as centering content or aligning items within a row, while CSS Grid can be used for more complex structures like grid-based layouts. It’s important to know when to use each tool, as they can often work in harmony to create robust and flexible designs.',
      date: '2025-01-25',
      category: 'CSS',
    },
  ];

  // Date format 
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // The post published within the last 24 hours
  const isPostNew = (postDate: string) => {
    const currentTime = new Date().getTime();
    const postTime = new Date(postDate).getTime();
    return currentTime - postTime <= 24 * 60 * 60 * 1000; 
  };

  // Only new ones if "New!" is clicked
  const filteredPosts = showNewPosts
    ? posts.filter((post) => isPostNew(post.date))
    : posts;

  return (
    <div>
      {filteredPosts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        filteredPosts.map((post) => (
          <div key={post.id} className="post-container">
            <Post post={post} />
            <div className="post-details">
              <div className="post-info">
                <p><strong>Category:</strong> {post.category}</p>
                <p><strong>Author Bio:</strong> {post.authorBio}</p>
              </div>
              <p className="published-date"><strong>Published on:</strong> {formatDate(post.date)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
