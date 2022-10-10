import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Sign, Survey } from './components/constant/constant';
import Login from './components/user/login';
import SurveyApp from './components/allSurvey/surveyApp';
import SignIn from './components/user/signIn';
import Protected from './components/user/protected';
import ErrorPage from './404Page';



const App = () => {

  return (
    <div>
<<<<<<< HEAD
      <Routes>
        <Route path={Home} element={<Login />} />
        <Route path={Sign} element={<SignIn />} />
        <Route path={Survey} element={<SurveyApp />} />
      </Routes>
=======
      <div>
        <div>
          <Routes>
            <Route path={Home} element={<Login />} />
            <Route path={Sign} element={<SignIn />} />
            <Route path={Survey} element={<Protected Component={SurveyApp} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
    </div>
  );
};
export default App; 