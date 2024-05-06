import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { quoteReducer } from './reducers/quoteReducer';
import { stylesReducer } from './reducers/stylesReducer';

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    styles: stylesReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)