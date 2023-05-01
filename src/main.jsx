import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {FirebaseProvider} from './Firebase';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
    <FirebaseProvider>
    <App />
    </FirebaseProvider>
    </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
