import './App.css';
import Login from './components/user/login';
import { Home, Sign, Survey } from './components/constant/constant';
import SurveyApp from './components/allSurvey/surveyApp';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/user/signIn';


const App = () => {

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