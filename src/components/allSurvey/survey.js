import React, { useState } from 'react';
import './allSurvey.css';
import '../../global.css';
import { answers } from './data';



const Survey = (props) => {
  const { title, questions, setTab, tabId, isActive } = props;
  const [ansData, setAnsData] = useState([]);
  const [changeBtnAndBgColor, setChangeBtnAndBgColor] = useState(false);
  const [values, setValues] = useState({
    textarea: '',
  });
  


  const handleChange =
    (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const openSurveyBox = () => {
    setTab(tabId)
    setChangeBtnAndBgColor(!changeBtnAndBgColor);

  }


  const setAnsId = (qId, qAns) => {
    let existingAns = ansData.filter((ans) => ans.qid === qId);
    if (existingAns.length > 0) {
      existingAns.filter((f) => {
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
    <div >
      <div className='survey-main'>
        <div className='survey-container' style={changeBtnAndBgColor ? { backgroundColor: '#11963e' } :
          { backgroundColor: '#1a1a1a' }}>
          <div className='survey-container-title'>
            <p className='survey-title1'><b>✔</b></p>
            <p className='survey-title2'><b>{title}</b></p>
          </div>
          <div className='survey-button-main'>
            <button className='survey-button-save_saved' onClick={() => openSurveyBox()} disabled={!values.textarea}><b>{changeBtnAndBgColor ? "saved" : "save"}
            </b></button>


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
                            <div key={ansId} className={`radio ${ansId + 1 <= 4 ? `red` : ansId + 1 > 4 && ansId + 1 <= 7 ? `orange` : 'green'} ${btnActive}`} onClick={() => setAnsId(question.id, ansId)}>
                              <input
                                type="radio"
                                name={e.radio}
                                value={e.value}
                                
                              />
                              <b>{e.radio}</b>
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
          <p>Your Review</p>
          <textarea
            value={values.textarea}
            onChange={handleChange('textarea')}
            type="textarea"
          />

        </div>
        : null}
    </div>
  )
};
export default Survey;