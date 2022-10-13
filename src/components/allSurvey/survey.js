import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { mainSurveyData, getSurveyDataAction } from '../../redux/action/action';
import './allSurvey.css';
import '../../global.css';
import { answers } from './data';

const Survey = (props) => {
  const { title, questions, setTab, tabId, isActive } = props;
  const [ansData, setAnsData] = useState([]);
  const [changeBtnAndBgColor, setChangeBtnAndBgColor] = useState(false);
  const [surveyId1, setSurveyId1] = useState(tabId + 1)
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const SurveyData = useSelector((state) => state?.getSurveyDataReducer?.data)
  const login = useSelector((state) => state?.loginUserReducer?.data)

  useEffect(() => {
    dispatch(getSurveyDataAction(login?.uuid))
  },[login])

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  const openSurveyBox = () => {
    setChangeBtnAndBgColor(!changeBtnAndBgColor);
    setSurveyId1(surveyId1)
    setTab(tabId)
    dispatch(mainSurveyData({ SurveyId: surveyId1, radio: ansData, review: text }));
  };

  const setAnsId = (qId, qAns) => {

    let existingAns = ansData.filter((ans) => ans.qid === qId);
    if (existingAns.length > 0) {
      existingAns.forEach((f) => {
        let ansDataInd = ansData.findIndex(e => e.qid === f.qid);
        ansData[ansDataInd].ans = qAns + 1;
      });
      setAnsData([...ansData]);
    } else {
      ansData.length === 0 ? setAnsData([{ qid: qId, ans: qAns + 1 }]) :
        setAnsData(ansData => [...ansData, { qid: qId, ans: qAns + 1 }]);
    }
  };


  return (
    <div >
      <div className='survey-main'>
        <div className='survey-container' style={changeBtnAndBgColor ? { backgroundColor: '#11963E' } :
          { backgroundColor: '#1A1A1A' }}>
          <div className='survey-container-title'>
            <p className='survey-title1'><span>✔</span></p>
            <p className='survey-title2'>{title}</p>
          </div>
          <div className='survey-button-main'>
            {
              changeBtnAndBgColor ? <button className='survey-button-save_saved' onClick={() => openSurveyBox()} disabled><b>Saved</b></button> 
                                  : <button className='survey-button-save_saved' disabled={ansData.length < 5 || !text} onClick={() => { openSurveyBox()}}><b>Save</b></button>
            }
          </div>
        </div>
      </div>

      {isActive ?
        <div className='radio-main'>
          <div className='radio-question'>
            {
              questions.map((question, id) => {
                return (
                  <div key={id}>
                    <p className='s-questions'>{question.question}</p>
                    <div className='radio-border'>
                      {
                        answers.map((e, ansId) => {
                          let isActive = ansData.filter(qa => qa.qid === question.id);
                          let btnActive;
                          if (isActive.length > 0) {
                            btnActive = ansId + 1 <= isActive[0].ans ? 'active' : '';
                          }
                          return (
                            <div key={ansId} className={`radio ${ansId + 1 <= 4 ? `red` : ansId + 1 > 4 && ansId + 1 <= 7 ? `orange` : 'green'} ${btnActive}`}
                              name={question.id} onClick={() => setAnsId(question.id, ansId)} htmlFor='radio1'>
                              <input
                                className='input'
                                id='radio1'
                                type="radio"
                                name={question.id}
                                value={e.value}
                              />
                              <b className='radio-text'>{e.value}</b>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
          <p className='s-questions'>Your Review</p>
          <textarea
            onChange={handleChangeText}
            type="textarea"
            name="review"
          />
        </div>
        : null}
    </div>
  )
};
export default Survey;