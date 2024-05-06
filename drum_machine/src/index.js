import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { displayReducer } from './reducers/displayReducer';
import { kitReducer } from './reducers/kitReducer';

const store = configureStore({
  reducer: {
    display: displayReducer,
    kit: kitReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />  
  </Provider>  
);
