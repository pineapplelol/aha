import React, { useState, useEffect, useCallback } from "react";
import WordCardGrid from "./WordCardGrid";
import WordCard from "./WordCard";
import axios from "axios";
import { languages } from "./languages";

const qs = require("qs");

function Translations({ word }) {
  const [translations, setTranslations] = useState([]);

  const getTranslations = useCallback((word) => {
    const headers = {
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_MS_TRANSLATE,
      "Content-Type": "application/json",
    };
    const params = {
      "api-version": "3.0",
      to: Object.keys(languages),
    };
    axios
      .post(
        "https://api.cognitive.microsofttranslator.com/translate",
        `[{'Text':'${word}'}]`,
        {
          headers,
          params,
          paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        }
      )
      .then((response) => {
        setTranslations(
          response.data[0].translations.map((j) => {
            return (
              <WordCard heading={j.text} identifier={languages[j.to].name} />
            );
          })
        );
      });
  }, []);

  useEffect(() => {
    if (word) getTranslations(word);
  }, [word, getTranslations]);

  return (
    <>
      <h1>Translations</h1>
      <WordCardGrid cards={translations} />
    </>
  );
}

export default Translations;
