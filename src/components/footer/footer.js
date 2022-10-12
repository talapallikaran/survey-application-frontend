import React, { useEffect, useState } from 'react'
import './footer.css'
import { useSelector } from "react-redux";
import '../../global.css'

import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [survey1Data, setSurvey1Data] = useState();
  const [survey2Data, setSurvey2Data] = useState();
  const [survey3Data, setSurvey3Data] = useState();

  const navigate = useNavigate();
  const surveyData = useSelector((state) => state.data);
  
  useEffect(() => {
    surveyData.data.SurveyId === 1 ? setSurvey1Data(surveyData) : console.log();
    surveyData.data.SurveyId === 2 ? setSurvey2Data(surveyData) : console.log();
    surveyData.data.SurveyId === 3 ? setSurvey3Data(surveyData) : console.log();
  }, [surveyData]) 

  const Submit = () => {

    console.log("Survey 1 Data", survey1Data, " Survey 2 Data", survey2Data, "Survey 3 Data", survey3Data);
    navigate('/')
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