import React, { useState } from 'react';
import './allSurvey.css';
import '../../global.css';
import { answers } from './data';



const Survey = (props) => {
  const { title, questions, setTab, tabId, isActive } = props;
  const [ansData, setAnsData] = useState([]);
  const [changeBtnAndBgColor, setChangeBtnAndBgColor] = useState(false);
  const [surveyId1, setSurveyId1] = useState(tabId + 1)
  // const [surveyData, setSurveyData] = useState([])
  const [values, setValues] = useState({
    ansData: [
      {
        qid: 1,
        ans: 0
      },
      {
        qid: 2,
        ans: 0
      },
      {
        qid: 3,
        ans: 0
      },
      {
        qid: 4,
        ans: 0
      },
      {
        qid: 5,
        ans: 0
      }
    ],
    review: '',
    surveyId: ""
  })

  const handleChange = (event) => {
    const question = event.target.name;
    // const ans = event.target.value;
    const SurveyNumber = tabId
    let q1, q2,q3,q4,q5,review,surveyId;

    
    if (question == 1) {
      q1 = event.target.value
      console.log("q1----", q1);
    }
    if (question == 2) {
      q2 = event.target.value
      q1 = event.target.value
      console.log("q1----", q2,q1);
    }
    if (question == 3) {
      q3 = event.target.value;
      q2 = event.target.value
      q1 = event.target.value
      console.log("q1----", q3,q2,q1);
    }
    if (question == 4) {
      q4 = event.target.value;
      q3 = event.target.value;
      q2 = event.target.value
      q1 = event.target.value
      console.log("q1----", q4,q3,q2,q1);
    }
    if (question == 5) {
      q4 = event.target.value;
      q3 = event.target.value;
      q2 = event.target.value
      q1 = event.target.value
      q5 = event.target.value;
      console.log("q1----", q5,q4,q3,q2,q1);
    }
    if (question == review) {
      console.log(review);
      review = event.target.value;
      console.log("q1----", review);
    }
    if (question == SurveyNumber) {
      surveyId = SurveyNumber
      console.log("q1----", surveyId);
    }
    console.log('ans-------', q1,q2,q3,q4,q5, review);
    setValues({
      ansData: [
        {
          qid: 1,
          ans: q1
        },
        {
          qid: 2,
          ans: q2
        },
        {
          qid: 3,
          ans: q3
        },
        {
          qid: 4,
          ans: q4
        },
        {
          qid: 5,
          ans: q5
        },
      ]
    })
  }


  const openSurveyBox = () => {
    setSurveyId1(surveyId1)
    setTab(tabId)
    setChangeBtnAndBgColor(!changeBtnAndBgColor);
    //console.log(values, { SurveyId: surveyId1 });
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

 // console.log('values-------', values);

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

            {
              changeBtnAndBgColor ? <button className='survey-button-save_saved' onClick={() => openSurveyBox()} disabled={values.review}><b>Saved</b></button> : <button className='survey-button-save_saved' onClick={() => openSurveyBox()} disabled={!values.review}><b>Save</b></button>
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
                            <div key={ansId} className={`radio ${ansId + 1 <= 4 ? `red` : ansId + 1 > 4 && ansId + 1 <= 7 ? `orange` : 'green'} ${btnActive}`} name={e.radio} onClick={() => setAnsId(question.id, ansId)} >
                              <input
                                type="radio"
                                name={question.id}
                                value={e.value}
                                onChange={handleChange}
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
            type="textarea"
            value={values.review}
            name="review"
            onChange={handleChange}
          />

        </div>
        : null}
    </div>
  )
};
export default Survey;