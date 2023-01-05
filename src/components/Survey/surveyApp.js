import React, { useState, useEffect } from "react";
import Survey from "./survey";
import Footer from "./SurveyFooter/SurveyFooter";
import "./surveyApp.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveyDataAction, postSurveyDataAction } from "../../redux/action/SurveyActions/surveyAction";
import { getRegistrationDataAction } from '../../redux/action/RegistrationUser/getRegistrationDataAction';
import { useNavigate } from 'react-router-dom';
import SurveyHeader from './SurveytHeader/SurveyHeader';
import {surveyDummyData} from './surveydata';


const SurveyApp = () => {
  const uuid = localStorage.getItem("UUID");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState(0);
  const data = useSelector((state) => state?.fetchSurveyDataReducer);
  let LoginData = JSON.parse(localStorage.getItem("WorkerData") || "[]");
  const optionData = useSelector((state) => state?.getRegistrationDataReducer?.users);
  let responce = data?.surveyData?.message;
  let superVisor = optionData && optionData?.find((e) => e.uuid == uuid);
  useEffect(() => {
    dispatch(fetchSurveyDataAction());
    dispatch(getRegistrationDataAction());
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
      postSurveyDataAction({
        uuid,
        surveydata,
      })
    );
  };
  const handleChange = (e) => {
    let workerData = e.target.value;
    localStorage.setItem("workerId", workerData);
    navigate(`/Survey/${workerData}`);
  };
  let dm;
  if (superVisor?.role_id == 2) {
    dm = LoginData.map((e) => e.map((e) => e.id == null));
  }

  return (
    <div className="wrepper">
     <SurveyHeader />
      <div className="container">
        <div className="date-container">
          <div className="date">
            <h2>
              {monthName} {new Date().getFullYear()}
            </h2>
          </div>
          {superVisor?.role_id == 2 && (
            <select
              className="select-option"
              onChange={handleChange}
              name="reporting_person_id"
              disabled={dm[0] == "true"}
            >
              <option>Select from worker</option>
              {LoginData?.map((data, id) => {
                return (
                  <React.Fragment key={id}>
                    {data.map((e, id) => {
                      return (
                        <option value={e.id} key={id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </select>
          )}
        </div>
        {responce !== "Network Error" && data &&
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
                  comments={surveyData.comment}
                />
              </div>
            );
          })}

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
                  comments={surveyData.comment}
                />
              </div>
            );
          })}
          {surveyDummyData &&
          surveyDummyData.map((surveyData, id) => {
            return (
              <React.Fragment key = {id}>
                {responce == "Network Error" && surveyData &&
                  surveyData.map((surveyData) => {
                    console.log("staticcc2", surveyData.question);
                    return (
                      <div key={id} className="survey-wrapper">
                      <Survey
                        tabId={id}
                        title={surveyData.title}
                        questions={surveyData.question}
                        setTab={(id) => setTab(id)}
                        isActive={tabActive === id}
                        setAnswers={(surveyInfo) =>
                          setServeyAnswers(surveyInfo)
                        }
                        submitSurvey={() => submitSurvey()}
                        comments={surveyData.comment}
                      />
                      </div>
                    );
                  })}
              </React.Fragment>
            );
          })}
      </div>
      <Footer surveydata={data?.surveyData?.surveydata} />
    </div>
  );
};
export default SurveyApp;
