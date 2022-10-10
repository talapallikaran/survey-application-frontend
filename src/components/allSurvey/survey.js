<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
import './allSurvey.css';
import '../../global.css';
import { answers } from './data';
import { useDispatch } from 'react-redux';
import { fetchUserRequest } from '../redux/action';
=======
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { mainSurveyData } from '../../redux/action/action';
import './allSurvey.css';
import '../../global.css';
import { answers } from './data';
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897

const Survey = (props) => {
  const { title, questions, setTab, tabId, isActive } = props;
  const [ansData, setAnsData] = useState([]);
  const [changeBtnAndBgColor, setChangeBtnAndBgColor] = useState(false);
<<<<<<< HEAD
  const [surveyId1, setSurveyId1] = useState(tabId + 1);
  const [radioValue, setRadioValue] = useState([]);
  const [surveyAllData, setSurveyAllData] = useState({});
  const [text, setText] = useState();

  const [values, setValues] = useState({
    ansData: [
      {
        qid: 0,
        ans: 0
      }
    ]
  })
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleRadioChange = (event) => {
    const question = event.target.name;
    const ans = event.target.value;
    setValues({ qId: question, ans: ans })
    setRadioValue(ansData => [...ansData, { qId: question, ans: ans }]);
=======
  const [surveyId1, setSurveyId1] = useState(tabId + 1)
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const handleChangeText = (e) => {
    setText(e.target.value)
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
  }

  const openSurveyBox = () => {
    setChangeBtnAndBgColor(!changeBtnAndBgColor);
    setSurveyId1(surveyId1)
    setTab(tabId)
<<<<<<< HEAD
    setChangeBtnAndBgColor(!changeBtnAndBgColor);
    setSurveyAllData({ radio: ansData, SurveyId: surveyId1, review: text });
    const AllData = dispatch(fetchUserRequest({ radio: ansData, SurveyId: surveyId1, review: text }))

    //  console.log(AllData);
  }
=======
    dispatch(mainSurveyData({ SurveyId: surveyId1, radio: ansData, review: text }));
  };
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897

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

<<<<<<< HEAD
=======

>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
  return (
    <div>
      <div className='survey-main'>
        <div className='survey-container' style={changeBtnAndBgColor ? { backgroundColor: '#11963e' } :
          { backgroundColor: '#1a1a1a' }}>
          <div className='survey-container-title'>
            <p className='survey-title1'><b>✔</b></p>
            <p className='survey-title2'><b>{title}</b></p>
          </div>
          <div className='survey-button-main'>
<<<<<<< HEAD

            {
              changeBtnAndBgColor ? <button className='survey-button-save_saved' onClick={() => openSurveyBox()} disabled><b>Saved</b></button>
                : <button className='survey-button-save_saved' onClick={() => openSurveyBox()} disabled={ansData.length < 5 || !text} ><b>Save</b></button>
=======
            {
              changeBtnAndBgColor ? <button className='survey-button-save_saved' onClick={() => openSurveyBox()} disabled><b>Saved</b></button> : <button className='survey-button-save_saved' disabled={ansData.length < 5 || !text} onClick={() => { openSurveyBox()}}><b>Save</b></button>
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
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
                    <p>{question.question}</p>
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
<<<<<<< HEAD
                                className='survey-input'
=======
                                className='input'
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
                                id='radio1'
                                type="radio"
                                name={question.id}
                                value={e.value}
<<<<<<< HEAD
                                onChange={handleRadioChange}
                                required

=======
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
                              />
                              <b>{e.value}</b>
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
<<<<<<< HEAD
          <p className='review-text'>Your Review</p>

          <textarea
            value={text}
            onChange={handleChange}
=======
          <p >Your Review</p>
          <textarea
            onChange={handleChangeText}
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
            type="textarea"
            name="review"
          />
        </div>
        : null}
    </div>
  )
};
export default Survey;
