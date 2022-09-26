import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//ReactDOM.render(<App/>, document.getElementById('root'));
const dp = ReactDOM.createRoot(document.getElementById('root'));
dp.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);