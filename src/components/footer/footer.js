import React from 'react'
import './footer.css'
import '../../global.css'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const [survey1, setSurvey1] = useState();
  const [survey2, setSurvey2] = useState();
  const [survey3, setSurvey3] = useState();
  const navigate = useNavigate();

  const FinishData = useSelector((state) => state.data);

  useEffect(() => {

    FinishData.data.SurveyId === 1 ? setSurvey1(FinishData) : console.log();
    FinishData.data.SurveyId === 2 ? setSurvey2(FinishData) : console.log();
    FinishData.data.SurveyId === 3 ? setSurvey3(FinishData) : console.log();

  }, [FinishData])

  const FinishSubmit = () => {

    console.log("Survey 1 Data :", survey1);
    console.log("Survey 2 Data :", survey2);
    console.log("Survey 3 Data :", survey3);
    navigate('/')

  }

  return (
    <div className='footer-main'>
      <button className='footer-btn' onClick={() => FinishSubmit()}>Finish</button>
    </div>
  )
}
export default Footer;