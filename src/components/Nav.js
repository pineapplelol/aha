// @flow
import React from 'react';
import type { Node } from 'react';
import '../css/Nav.css';

function Nav(): Node {
  return (
    <div className="nav">
      <a href="https://pineapple.lol">
        <img src="/pineapplelol.png" alt="pineapplelol logo" />
      </a>
    </div>
  );
}

export default Nav;
