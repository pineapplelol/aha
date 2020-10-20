import React, { useState, useEffect, useCallback } from "react";
import WordCard from "./WordCard";

function SynonymCard({ word }) {
  const [pos, setPOS] = useState("");
  const [definition, setDefinition] = useState("");

  const getDefinition = useCallback(async () => {
    const url = "https://dictionary.pineapple.lol/" + word;
    const http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    if (http.status !== 404) {
      await fetch(url)
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((json) => {
          setDefinition(json[0].def);
          setPOS(json[0].pos);
        });
    } else {
      setDefinition("No definition found.");
    }
  }, [word]);

  useEffect(() => {
    getDefinition();
  }, [getDefinition]);

  return <WordCard heading={word} identifier={pos} description={definition} />;
}

export default SynonymCard;
