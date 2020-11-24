import React, { useState, useEffect, useCallback } from 'react';

import WordCardGrid from './WordCardGrid';
import SynonymCard from './SynonymCard';

function Synonyms({ word }) {
  const [synonyms, setSynonyms] = useState([]);

  const getSynonyms = useCallback(word => {
    const url = `https://api.datamuse.com/words?ml=${word}`;

    fetch(url)
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(json => {
        setSynonyms(
          json.splice(0, 27).map(j => {
            return <SynonymCard word={j.word} />;
          }),
        );
      });
  }, []);

  useEffect(() => {
    if (word) getSynonyms(word);
  }, [word, getSynonyms]);

  return <WordCardGrid cards={synonyms} />;
}

export default Synonyms;
