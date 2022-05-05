// @flow
import React from 'react';
import type { Node } from 'react';
import '../css/Nav.css';
import { chakra, Image, Link } from '@chakra-ui/react';

function Nav(): Node {
  return (
    <chakra.nav margin="0 auto" width="90%">
      <Link href="https://pineapple.lol">
        <Image
          width="200px"
          paddingTop="20px"
          src="/pineapplelol.png"
          alt="pineapplelol logo"
        />
      </Link>
    </chakra.nav>
  );
}

export default Nav;
