import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './components/redux/store';
=======
import { Provider } from "react-redux";
import Store from './redux/store/store'
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897

//ReactDOM.render(<App/>, document.getElementById('root'));
const dp = ReactDOM.createRoot(document.getElementById('root'));
dp.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Provider store={store}>
=======
      <Provider store={Store}>
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);