// @flow

import React, { useState, useEffect, useCallback } from 'react';

import WordCardGrid from './WordCardGrid';
import SynonymCard from './SynonymCard';

type Props = {
  word: string,
};

function Synonyms(props: Props) {
  const { word } = props;
  const [synonyms, setSynonyms] = useState([]);

  const getSynonyms = useCallback(w => {
    const url = `https://api.datamuse.com/words?ml=${w}`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
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
