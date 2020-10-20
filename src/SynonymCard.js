import React, { useState, useEffect, useCallback } from "react";
import WordCard from "./WordCard";

function SynonymCard({ word }) {
  const [pos, setPOS] = useState("");
  const [definition, setDefinition] = useState("");

  const getDefinition = useCallback(() => {
    const url = "https://dictionary.pineapple.lol/" + word;

    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((json) => {
        if (json) {
          setDefinition(json[0].def);
          setPOS(json[0].pos);
        } else {
          setDefinition("No definition found.");
        }
      });
  }, [word]);

  useEffect(getDefinition, [getDefinition]);

  return <WordCard heading={word} identifier={pos} description={definition} />;
}

export default SynonymCard;
