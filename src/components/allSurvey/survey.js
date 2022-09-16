import React, { useState } from 'react';
import './allSurvey.css';
import { answers } from './data';

const Survey = (props) => {
  const { title, questions, uid } = props;

  const [isActive, setIsActive] = useState(1);

  const [ansData, setAnsData] = useState([]);
  
  const allData =(qId, qAns)=>{
    let newAns = ansData.length === 0 ? setAnsData([{qid: qId, ans: qAns}]) : setAnsData(ansData => [...ansData, {qid: qId, ans: qAns}])
    ;
  }
  
  const handleClick = (id) => {
   // console.log("uid-------------------", id)
  }
  
  console.log("Answers", ansData);
  return (
    <div >
      <div className='mains20' >
        <div className='mains21'>
          <div className='mains2' >
            <div className='mains22'>
              <div className='mains23'>
                <p className='ps21'><b>✔</b></p>
                <p className='ps22'><b>{title}</b></p>
              </div>
              <div className='btn22'>
                <button className='btn21' onClick={() => handleClick(uid)}><b>save</b></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pres21'>
        <div className='pres22'>
          {
            questions.map((question, id) => {
              return (
                <div key={id}>
                  <p>{question.question}</p>
                  <div className='bolt1'>
                    {
                      answers.map((e, ansId) => {
                        return (
                          <div key={ansId} className={`bolt btn${e.color} `} onClick={() => allData(question.id, ansId + 1)}>
                            <input  className="radio" type="radio" value="1" name={`radio_${question.id}`} id="radio1" /><b>{e.radio}</b>
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
        <textarea className='aria'
          name="textarea"
        />
      </div>
    </div>
  )
};
export default Survey;
