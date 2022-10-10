import React from 'react';
import { useState } from 'react';
import './allSurvey.css';
import '../../global.css';
import { answers } from './data';
import { useDispatch } from 'react-redux';
import { fetchUserRequest } from '../redux/action';

const Survey = (props, Finish) => {
  const { title, questions, setTab, tabId, isActive } = props;
  const [ansData, setAnsData] = useState([]);
  const [changeBtnAndBgColor, setChangeBtnAndBgColor] = useState(false);
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
  }

  const openSurveyBox = () => {
    setSurveyId1(surveyId1)
    setTab(tabId)
    setChangeBtnAndBgColor(!changeBtnAndBgColor);
    setSurveyAllData({ radio: ansData, SurveyId: surveyId1, review: text });
    const AllData = dispatch(fetchUserRequest({ radio: ansData, SurveyId: surveyId1, review: text }))

    //  console.log(AllData);
  }

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
  }

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

            {
              changeBtnAndBgColor ? <button className='survey-button-save_saved' onClick={() => openSurveyBox()} disabled><b>Saved</b></button>
                : <button className='survey-button-save_saved' onClick={() => openSurveyBox()} disabled={radioValue.length < 5 || !text} ><b>Save</b></button>
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
                                id='radio1'
                                type="radio"
                                name={question.id}
                                value={e.value}
                                onChange={handleRadioChange}
                                required

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
          <p className='review-text'>Your Review</p>

          <textarea
            value={text}
            onChange={handleChange}
            type="textarea"
            name="review"
          />

        </div>
        : null}
    </div>
  )
};
export default Survey;
