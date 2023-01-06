import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Sign,
  Survey,
  worker,
  add,
} from "./components/common/constantRouter";
import AdminFlowPage from "./pages/adminFlow";
import LoginPage from "./pages/login";
import SurveyAppPage from "./pages/surveyApp";
import { Protected } from "./components/loginPageUser/login/protected";
import ErrorPage from "./components/common/404Page";
import WorkerDetails from "./components/survey/workerDetails";
import RagisterPage from "./pages/ragisterPage";

function App() {  
  return (
    <div className="main-edituser">
      <div>
        <div>
          <Routes>
            <Route path={Home} element={<Protected Component={LoginPage}  />} />
            <Route path={Sign} element={<Protected Component={AdminFlowPage} />} />
            <Route
              path={Survey}
              element={<Protected Component={SurveyAppPage} />}
            />
            <Route path={add} element={<RagisterPage />} />
            <Route path={worker} element={<WorkerDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;