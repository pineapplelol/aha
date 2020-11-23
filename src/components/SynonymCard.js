import React, { useState } from "react";
import { Modal } from "antd";

import WordCard from "./WordCard";

function SynonymCard({ word }) {
  const [pos, setPOS] = useState("");
  const [definition, setDefinition] = useState("");
  const [show, setShow] = useState(false);

  const getDefinition = () => {
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
          <em>{pos}</em> {definition}
        </p>
      </Modal>
    </>
  );
}

export default SynonymCard;
