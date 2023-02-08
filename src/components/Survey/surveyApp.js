import React, { useState, useEffect } from "react";
import Survey from "./survey";
import Footer from "../surveyFooter/surveyFooter";
import Header from "../surveyHeader/surveyHeader";
import "./surveyApp.css";
import "../../assets/css/responsive.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSurveyDataAction,
  postSurveyDataAction,
} from "../../redux/action/surveyDataAction/surveyDataA";
import { useNavigate } from "react-router-dom";
import { fetchUserAction } from "../../redux/action/userDataAction/fetchUser";
import { SurveyData } from "../common/data";

const SurveyApp = () => {
  const uuid = localStorage.getItem("UUID");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState(0);
  const data = useSelector(
    (state) => state?.fetchSurveyDataReducer?.surveyData
  );
  let LoginData = JSON.parse(localStorage.getItem("WorkerData") || "[]");
  const optionData = useSelector((state) => state?.fetchUserReducer?.data);
  let superVisor = optionData && optionData?.find((e) => e.uuid == uuid);

  useEffect(() => {
    dispatch(fetchSurveyDataAction());
    dispatch(fetchUserAction());
  }, []);

  useEffect(() => {
    SurveyData?.surveyData?.surveydata?.map((sdata) => {
      data?.surveydata?.map((Apidata) => {
        if (Apidata.survey_id === sdata.survey_id) {
          sdata.comment = Apidata.comment;
          sdata.question.map((sQ) => {
            Apidata.question.map((ApiQ) => {
              if (ApiQ.qid === sQ.qid) {
                sQ.ans = ApiQ.ans;
              }
            });
          });
        }
      });
    });
  }, [SurveyData, data]);

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
    let mySurveyIndex = SurveyData?.surveyData?.surveydata.findIndex(
      (survey) => survey.survey_id === surveyInfo.survey_id
    );
    let survey = SurveyData?.surveyData?.surveydata[mySurveyIndex];
    survey.comment = surveyInfo.comment;
    surveyInfo.question.map((question) => {
      let questionIndex = survey.question.findIndex(
        (sQuestion) => sQuestion.qid === question.qid
      );
      survey.question[questionIndex].ans = question.ans;
    });
    surveydata = SurveyData?.surveyData?.surveydata;
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
      <Header />
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

        {SurveyData &&
          SurveyData.surveyData &&
          SurveyData.surveyData.surveydata &&
          SurveyData.surveyData.surveydata.map((surveyData, id) => {
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
      </div>
      <Footer data={SurveyData?.surveyData?.surveydata} />
    </div>
  );
};
export default SurveyApp;