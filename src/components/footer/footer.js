import React, { useEffect, useState } from 'react'
import './footer.css'
import { useSelector } from "react-redux";
import '../../global.css'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Footer = () => {
<<<<<<< HEAD

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

=======
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
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
  }

  return (
    <div className='footer-main'>
<<<<<<< HEAD
      <button className='footer-btn' onClick={() => FinishSubmit()}>Finish</button>
=======
      <button className='footer-btn' onClick={Submit} >Finish</button>
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
    </div>
  )
}
export default Footer;