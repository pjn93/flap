import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider>
 <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
    </Auth0Provider>
);


reportWebVitals();
