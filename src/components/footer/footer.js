import React, { useEffect, useState } from 'react'
import './footer.css'
import { useSelector, useDispatch } from "react-redux";
import { postSurveyDataAction } from "../../redux/action/action"
import '../../global.css'

import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const dispatch = useDispatch();
  const SurveyDataPost = useSelector((state) => state?.postSurveyDataReducer?.data)
  const uuid = "a2547394-ee4a-4355-9c76-ee953da8fbc5"
  const [survey1Data, setSurvey1Data] = useState();
  const [survey2Data, setSurvey2Data] = useState();
  const [survey3Data, setSurvey3Data] = useState();

  const navigate = useNavigate();
  const surveyData = useSelector((state) => state.data);
  const login = useSelector((state) => state?.loginUserReducer?.data)

  const data = {
    "user_id":98,
    "surveydata": [
  
      {
        "id":10,
        "survey_id": 1,
        "comment": "good",
        "question": [
          {
            "qid": 2,
            "ans": 2
          },
          {
            "qid": 3,
            "ans": 5
          },
          {
            "qid": 5,
            "ans": 6
          },
          {
            "qid": 4,
            "ans": 8
          },
          {
            "qid": 1,
            "ans": 9
          }
        ]
      },
      {
          "id":11,
        "survey_id": 3,
        "comment": "Very Good",
        "question": [
          {
            "qid": 11,
            "ans": 5
          },
          {
            "qid": 12,
            "ans": 8
          },
          {
            "qid": 15,
            "ans": 4
          },
          {
            "qid": 13,
            "ans": " "
          },
          {
            "qid": 14,
            "ans": " "
          }
        ]
      },
      {
          "id":12,
        "survey_id": 2,
        "comment": "",
        "question": [
          {
            "qid": 10,
            "ans": 6
          },
          {
            "qid": 8,
            "ans": " "
          },
          {
            "qid": 6,
            "ans": 10
          },
          {
            "qid": 9,
            "ans": 9
          },
          {
            "qid": 7,
            "ans": 8
          }
        ]
      }
    ]
  }
  
  useEffect(() => {
    surveyData.data.SurveyId === 1 ? setSurvey1Data(surveyData) : console.log();
    surveyData.data.SurveyId === 2 ? setSurvey2Data(surveyData) : console.log();
    surveyData.data.SurveyId === 3 ? setSurvey3Data(surveyData) : console.log();
  }, [surveyData]) 

  const Submit = () => {
    dispatch(postSurveyDataAction(login?.uuid,data))
    //console.log("Survey 1 Data", survey1Data, " Survey 2 Data", survey2Data, "Survey 3 Data", survey3Data);
    //navigate('/')
  }

  return (
    <div className='footer-main'>
      <div className='footer-container'>
        <div className="footer-btn-wrapper">
          <button className='footer-btn' onClick={Submit} disabled={!survey1Data || !survey2Data || !survey3Data} >Finish</button>
        </div>
      </div>
    </div>
  )
}
export default Footer;