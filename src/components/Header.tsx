import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  onNewPostClick: () => void; // Callback to handle "New!" click
}

const Header: React.FC<HeaderProps> = ({ onNewPostClick }) => {
  return (
    <header>
      <h1>Dev Insights</h1>
      <nav>
        <a href="#!" onClick={onNewPostClick}>New!</a> {/* Trigger filter when clicked */}
      </nav>
    </header>
  );
};

export default Header;
