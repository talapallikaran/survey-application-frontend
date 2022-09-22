import React from 'react';
import './App.css';
import Login from './components/user/login';
import SurveyApp from './components/allSurvey/surveyApp';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>

      <div>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Survey" element={<SurveyApp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;
