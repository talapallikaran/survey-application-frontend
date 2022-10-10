import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Store from './redux/store/store'

//ReactDOM.render(<App/>, document.getElementById('root'));
const dp = ReactDOM.createRoot(document.getElementById('root'));
dp.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);