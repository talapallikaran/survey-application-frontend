import React, {useState} from 'react';
import './App.css';
import Login from './components/user/login';
import { Home, Sign, Survey } from './components/constant/constant';
import SurveyApp from './components/allSurvey/surveyApp';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/user/signIn';


const App = () => {

  const [tabActive, setTabActive] = useState(0);
  const setTab = (tabId) => {
    setTabActive(tabId + 1)
  }

  return (
    <div>

      <div>
        <div>
          <Routes>
            <Route path={Home} element={<Login />} />
            <Route path={Sign} element={<SignIn />} />
            <Route path={Survey} element={<SurveyApp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;