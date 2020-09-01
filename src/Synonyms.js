import React, { useState, useEffect, useCallback } from "react";
import WordCard from "./WordCard";

function Synonyms(props) {
  const { word } = props;
  const [synonyms, setSynonyms] = useState([]);

  const getSynonyms = useCallback((word) => {
    var completeURL = "https://api.datamuse.com/words?ml=" + word;
    var http = new XMLHttpRequest();
    http.open("HEAD", completeURL, false);
    http.send();
    if (http.status !== 404) {
      fetch(completeURL)
        .then(function (response) {
          if (response.ok) return response.json();
        })
        .then(function (json) {
          setSynonyms(json.map((j) => j.word));
        });
    }
  }, []);

  useEffect(() => {
    if (word) getSynonyms(word);
  }, [word, getSynonyms]);

  return synonyms.map((s) => <WordCard word={s} />);
}

export default Synonyms;
