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

    console.log("FINISH DATA 11111,,,", survey1Data, " FINISH DATA 22222,,,", survey2Data, "FINISH DATA 33333", survey3Data);
    navigate('/')
  }

  return (
    <div className='footer-main'>
      <button className='footer-btn' onClick={Submit} >Finish</button>
    </div>
  )
}
export default Footer;