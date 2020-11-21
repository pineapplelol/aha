import React, { useState } from "react";
import { Button, Dropdown, Input, Menu, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";

import Synonyms from "../components/Synonyms";
import Translations from "../components/Translations";
import Footer from "../components/Footer";

import "../css/Home.css";

const { Search } = Input;

function Home() {
  const [word, setWord] = useState("");
  const [find, setFind] = useState("Synonyms");

  const onClick = ({ key }) => {
    setFind(key);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="Synonyms">Synonyms</Menu.Item>
      <Menu.Item key="Translations">Translations</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row type="flex" align="center" className="search">
        <Dropdown overlay={menu}>
          <Button>
            {find} <DownOutlined />
          </Button>
        </Dropdown>
        <Search
          placeholder="A word that describes your idea"
          onSearch={(value) => setWord(value)}
          style={{ width: 400 }}
        />
      </Row>
      <div className="content">
        {word && find === "Translations" && (
          <>
            <h1>Translations</h1>
            <Translations word={word} />
          </>
        )}
        {word && find === "Synonyms" && (
          <>
            <h1>Synonyms</h1>
            <Synonyms word={word} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
