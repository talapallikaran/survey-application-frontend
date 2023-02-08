import React, { useState, useEffect } from "react";
import WorkerSurvey from "./WorkerSurvey";
import WorkerFooter from "../surveyFooter/workerFooter";
import Header from "../surveyHeader/surveyHeader";
import "./surveyApp.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWorkerDataAction,
  postWorkerDataAction,
} from "../../redux/action/workerDataAction/workerDataA";
import { useParams } from "react-router-dom";

const WorkerDetails = () => {
  const dispatch = useDispatch();
  const { worker } = useParams();
  const wuuid = localStorage.getItem("workerId");
  let LoginData = JSON.parse(localStorage.getItem("WorkerData") || "[]");
  const [tabActive, setTabActive] = useState(0);
  const data = useSelector((state) => state?.fetchWorkerDataReducer);

  let workerMap = [];
  LoginData.map((e) => (workerMap = e));
  let workerName = workerMap.find((e) => e.id == worker);

  useEffect(() => {
    dispatch(fetchWorkerDataAction());
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
  let surveydata;
  const setServeyAnswers = (surveyInfo) => {
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
    surveydata = data?.surveyData?.surveydata;
  };
  const submitSurvey = () => {
    dispatch(
      postWorkerDataAction({
        wuuid,
        surveydata,
      })
    );
  };

  return (
    <div className="wrepper">
      <Header />
      <div className="container">
        <div className="date-container">
          <div className="date">
            <h2>
              {monthName} {new Date().getFullYear()}
            </h2>
          </div>
          <h4 className="select-option">WorkerName : {workerName.name}</h4>
        </div>

        {data &&
          data.surveyData &&
          data.surveyData.surveydata &&
          data.surveyData.surveydata.map((surveyData, id) => {
            return (
              <div key={id} className="survey-wrapper">
                <WorkerSurvey
                  tabId={id}
                  title={surveyData.title}
                  questions={surveyData.question}
                  setTab={(id) => setTab(id)}
                  isActive={tabActive === id}
                  setAnswers={(surveyInfo) => setServeyAnswers(surveyInfo)}
                  submitSurvey={() => submitSurvey()}
                  comments={surveyData.comment}
                />
              </div>
            );
          })}
      </div>
      <WorkerFooter data={data?.surveyData?.surveydata} />
    </div>
  );
};
export default WorkerDetails;
