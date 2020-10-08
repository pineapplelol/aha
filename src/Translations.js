import React, { useState, useEffect, useCallback } from "react";
import WordCardGrid from "./WordCardGrid";
import axios from "axios";

function Translations(props) {
  const { word } = props;
  const [translations, setTranslations] = useState([]);

  const getTranslations = useCallback((word) => {
    const headers = {
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_MS_TRANSLATE,
      "Content-Type": "application/json",
    };
    const params = {
      "api-version": "3.0",
      to: ["es", "de"],
    };
    axios
      .post(
        "https://api.cognitive.microsofttranslator.com/translate",
        `[{'Text':'${word}'}]`,
        { headers, params }
      )
      .then((response) => {
        setTranslations(response.data[0].translations.map((j) => j.text));
      });
  }, []);

  useEffect(() => {
    if (word) getTranslations(word);
  }, [word, getTranslations]);

  return (
    <>
      <h1>Translations</h1>
      <WordCardGrid words={translations} />
    </>
  );
}

export default Translations;
