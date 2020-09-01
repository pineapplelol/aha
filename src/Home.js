import React, { useState } from "react";
import { Input } from "antd";
import Synonyms from "./Synonyms";
import Translations from "./Translations";
const { Search } = Input;

function Home() {
  const [word, setWord] = useState("");

  return (
    <>
      <Search
        placeholder="A word that describes your idea"
        onSearch={(value) => setWord(value)}
        style={{ width: 400 }}
      />
      <Translations word={word} />
      <Synonyms word={word} />
    </>
  );
}

export default Home;
