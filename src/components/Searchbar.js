// @flow

import React from 'react';
import { Button, Dropdown, Input, Menu, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import '../css/Searchbar.css';

const { Search } = Input;

type Props = {
  find: string,
  setFind: string => void,
  setWord: string => void,
};

function Searchbar(props: Props) {
  const { setWord, find, setFind } = props;

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
    <Row type="flex" align="center" className="search">
      <Search
        addonBefore={
          <Dropdown overlay={menu}>
            <Button>
              {find} <DownOutlined />
            </Button>
          </Dropdown>
        }
        placeholder="A word that describes your idea"
        onSearch={value => setWord(value)}
        style={{ width: 400 }}
      />
    </Row>
  );
}

export default Searchbar;
