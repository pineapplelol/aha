// @flow
import React from 'react';
import type { Node } from 'react';
import { Button, Dropdown, Input, Menu, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../css/Searchbar.css';
import { Center, InputGroup, InputLeftAddon, Select } from '@chakra-ui/react';

const { Search } = Input;

type Props = {
  find: string,
  setFind: string => void,
  setWord: string => void,
};

function Searchbar(props: Props): Node {
  const { setWord, find, setFind } = props;

  const onClick = ({ key }) => {
    setFind(key);
  };

  return (
    <Center marginTop={5}>
      <InputGroup w="60%" h="35px">
        <InputLeftAddon
          border="none"
          h="35px"
          background="white"
          children={
            <Select placeholder="Select Option" h="35px" size="sm">
              <option value="Synonyms">Synonyms</option>
              <option value="Translations">Translations</option>
            </Select>
          }
        />
        <Input
          type="text"
          placeholder="Enter a word that describes your idea"
          onSubmit={() => console.log('hi')}
        />
      </InputGroup>
      {/* <Search
        addonBefore={

            // <Dropdown overlay={menu}>
            //   <Button>
            //     {find} <DownOutlined />
            //   </Button>
            // </Dropdown>

        }
        placeholder="A word that describes your idea"
        onSearch={value => setWord(value)}
        style={{ width: 400 }}
      /> */}
    </Center>
  );
}

export default Searchbar;
