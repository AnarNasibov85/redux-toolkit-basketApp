
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import  store  from './redux/store.js'
import { Provider } from 'react-redux'


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </ChakraProvider>
);
