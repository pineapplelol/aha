import React, { useState } from "react";
import { Modal } from "antd";

import WordCard from "./WordCard";

function SynonymCard({ word }) {
  const [pos, setPOS] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [show, setShow] = useState(false);

  const getDefinition = () => {
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_MW_API_KEY}`;

    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((json) => {
        if (json) {
          setDefinitions(json[0].shortdef);
          setPOS(json[0].fl);
        } else {
          setDefinitions(["No definition found."]);
        }
      });
  };

  const showModal = () => {
    getDefinition();
    setShow(true);
  };

  return (
    <>
      <div onClick={showModal}>
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
        {definitions.map((d) => (
          <p>{d}</p>
        ))}
      </Modal>
    </>
  );
}

export default SynonymCard;
