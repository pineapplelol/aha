// @flow
import React, { useState } from 'react';
import type { Node } from 'react';

import Footer from '../components/Footer';
import Searchbar from '../components/Searchbar';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Synonyms from '../components/Synonyms';
import Translations from '../components/Translations';
import '../css/Home.css';

function Home(): Node {
  const [word, setWord] = useState('');
  const [find, setFind] = useState('Synonyms');

  return (
    <>
      <Nav />
      {!word && <Header />}
      <Searchbar setWord={setWord} find={find} setFind={setFind} />
      <div className="content">
        {word && (
          <>
            <h1>{find}</h1>
            {find === 'Synonyms' ? (
              <Synonyms word={word} />
            ) : (
              <Translations word={word} />
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
