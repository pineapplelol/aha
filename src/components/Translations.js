// @flow
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import type { Node } from 'react';

import { languages } from '../data/languages';

import WordCard from './WordCard';
import WordCardGrid from './WordCardGrid';

const qs = require('qs');

type Props = {
  word: string,
};

function Translations(props: Props): Node {
  const { word } = props;
  const [translations, setTranslations] = useState([]);

  const getTranslations = useCallback(w => {
    const headers = {
      'Ocp-Apim-Subscription-Key': process.env.REACT_APP_MS_TRANSLATE,
      'Content-Type': 'application/json',
    };
    const params = {
      'api-version': '3.0',
      to: Object.keys(languages),
    };
    axios
      .post(
        'https://api.cognitive.microsofttranslator.com/translate',
        `[{'Text':'${w}'}]`,
        {
          headers,
          params,
          paramsSerializer: p => {
            return qs.stringify(p, { arrayFormat: 'repeat' });
          },
        },
      )
      .then(response => {
        setTranslations(
          response.data[0].translations.map(j => {
            return (
              <WordCard heading={j.text} identifier={languages[j.to].name} />
            );
          }),
        );
      });
  }, []);

  useEffect(() => {
    if (word) getTranslations(word);
  }, [word, getTranslations]);

  return <WordCardGrid cards={translations} />;
}

export default Translations;
