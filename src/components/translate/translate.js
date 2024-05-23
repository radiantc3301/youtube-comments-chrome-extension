import React from 'react';
import './TranslationButton.css';

const TranslationButton = ({ onTranslate }) => {
  return (
    <button className="translation-button" onClick={onTranslate}>
      Translate
    </button>
  );
};

export default TranslationButton;
