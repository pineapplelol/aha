import React, { useState, useEffect, useCallback } from "react";
import WordCardGrid from "./WordCardGrid";

function Synonyms(props) {
  const { word } = props;
  const [synonyms, setSynonyms] = useState([]);

  const getSynonyms = useCallback((word) => {
    const url = "https://api.datamuse.com/words?ml=" + word;
    const http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    if (http.status !== 404) {
      fetch(url)
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((json) => {
          setSynonyms(json.map((j) => j.word));
        });
    }
  }, []);

  useEffect(() => {
    if (word) getSynonyms(word);
  }, [word, getSynonyms]);

  return (
    <>
      <h1>Synonyms</h1>
      <WordCardGrid words={synonyms} />
    </>
  );
}

export default Synonyms;
