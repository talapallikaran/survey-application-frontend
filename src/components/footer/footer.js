import React from 'react'
import './footer.css'
import '../../global.css'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [survey, setSurvey] = useState();
  const [survey2, setSurvey2] = useState();
  const [survey3, setSurvey3] = useState();

  const FinishData = useSelector((state) => state.data);

  useEffect(() => {

    FinishData.data.SurveyId === 1 ? setSurvey(FinishData) : console.log();
    FinishData.data.SurveyId === 2 ? setSurvey2(FinishData) : console.log();
    FinishData.data.SurveyId === 3 ? setSurvey3(FinishData) : console.log();

  }, [FinishData])

  const FinishSubmit = () => {
    console.log(survey, survey2, survey3);
  }

  return (
    <div className='footer-main'>
      <button className='footer-btn' onClick={() => FinishSubmit()} >Finish</button>
    </div>
  )
}
export default Footer;