import React from "react";
import Header from "../components/loginPageUser/header/header";
import  {NavLink} from "react-router-dom";
import "./surveyPages.css"
import { dashboard, team, setting } from "../components/common/constantRouter";

const SurveyPages = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="Survey-pages">
      <li className="link-dashboard"><NavLink to={dashboard} className="link-dashboard-a"><b>Dashboard</b></NavLink></li>
      <li className="link-survey"><NavLink to="" className="link-survey-a" ><b>Survey</b></NavLink></li>
      <li className="link-team"><NavLink to={team} className="link-team-a"><b>Team</b></NavLink></li>
      <li className="link-setting"><NavLink to={setting} className="link-setting-a"><b>Settings</b></NavLink></li>
      </div>
    </div>
  );
};

export default SurveyPages;
