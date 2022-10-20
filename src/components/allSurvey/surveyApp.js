import React, { useState, useEffect } from "react";
import Survey from "./survey";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./surveyApp.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSurveyDataAction,
  postSurveyDataAction,
} from "../../redux/action/action";


const SurveyApp = () => {
  const dispatch = useDispatch();
  const [tabActive, setTabActive] = useState(0);
  const data = useSelector((state) => state?.fetchSurveyDataReducer);

  useEffect(() => {
    dispatch(fetchSurveyDataAction());
  }, []);

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var d = new Date();
  var monthName = months[d.getMonth()];

  const setTab = (tabId) => {
    setTabActive(tabId + 1);
  };
let surveydata ; 
  const setServeyAnswers = (surveyInfo) => {
    console.log("setServeyAnswers.......", surveyInfo);

    let mySurveyIndex = data?.surveyData?.surveydata.findIndex(
      (survey) => survey.survey_id === surveyInfo.survey_id
    );
    let survey = data?.surveyData?.surveydata[mySurveyIndex];
    survey.comment = surveyInfo.comment;
    surveyInfo.question.map((question) => {
      let questionIndex = survey.question.findIndex(
        (sQuestion) => sQuestion.qid === question.qid
      );
      survey.question[questionIndex].ans = question.ans;
    });
    surveydata = data?.surveyData?.surveydata

  };
  let uuid = localStorage.getItem("UUID");

  const submitSurvey = () => {
    dispatch(
      postSurveyDataAction({
        uuid,
        surveydata
      })
    );
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="date">
          <h2>
            {monthName} {new Date().getFullYear()}
          </h2>
        </div>
        {data &&
          data.surveyData &&
          data.surveyData.surveydata &&
          data.surveyData.surveydata.map((surveyData, id) => {
            return (
              <div key={id} className="survey-wrapper">
                <Survey
                  tabId={id}
                  title={surveyData.title}
                  questions={surveyData.question}
                  setTab={(id) => setTab(id)}
                  isActive={tabActive === id}
                  setAnswers={(surveyInfo) => setServeyAnswers(surveyInfo)}
                  submitSurvey={() => submitSurvey()}
                />
              </div>
            );
          })}
      </div>
      <Footer surveydata = {data?.surveyData?.surveydata}/>
    </div>
  );
};
export default SurveyApp;
