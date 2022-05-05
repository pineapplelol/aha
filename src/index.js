import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
