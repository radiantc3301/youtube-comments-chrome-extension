import React, { useState } from 'react';
import CommentList from './components/commentList/commentList';
import SearchBar from './components/searchBar/searchBar';
import TranslationButton from './components/translate/translate';
import './App.css';

const App = () => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);

  const handleSearch = (query) => {
    const filtered = comments.filter(comment => comment.text.includes(query));
    setFilteredComments(filtered);
  };

  const handleTranslate = () => {
    // Implement translation logic here
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <TranslationButton onTranslate={handleTranslate} />
      <CommentList comments={filteredComments.length ? filteredComments : comments} />
    </div>
  );
};

export default App;
