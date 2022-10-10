import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Sign, Survey } from './components/constant/constant';
import Login from './components/user/login';
import SurveyApp from './components/allSurvey/surveyApp';
import SignIn from './components/user/signIn';
import Protected from './components/user/protected';
import ErrorPage from './404page';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path={Home} element={<Login />} />
        <Route path={Sign} element={<SignIn />} />
        <Route path={Survey} element={< Protected Component={SurveyApp} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default App; 