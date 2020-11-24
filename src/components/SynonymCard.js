// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import { Modal } from 'antd';

import WordCard from './WordCard';

type Props = {
  word: string,
};

function SynonymCard(props: Props): Node {
  const { word } = props;

  const [definitions, setDefinitions] = useState([]);
  const [pos, setPOS] = useState('');
  const [show, setShow] = useState(false);

  const getDefinition = () => {
    if (!process.env.REACT_APP_MW_API_KEY) throw new Error('API key missing');
    const key = process.env.REACT_APP_MW_API_KEY;
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then(json => {
        if (json) {
          setDefinitions(json[0].shortdef);
          setPOS(json[0].fl);
        } else {
          setDefinitions(['No definition found.']);
        }
      });
  };

  const showModal = () => {
    getDefinition();
    setShow(true);
  };

  return (
    <>
      <div role="button" tabIndex={0} onClick={showModal} onKeyDown={showModal}>
        <WordCard heading={word} />
      </div>
      <Modal
        title={word}
        visible={show}
        onOk={() => {
          setShow(false);
        }}
        onCancel={() => {
          setShow(false);
        }}
      >
        <p>
          <em>{pos}</em>
        </p>
        {definitions.map(d => (
          <p>{d}</p>
        ))}
      </Modal>
    </>
  );
}

export default SynonymCard;
