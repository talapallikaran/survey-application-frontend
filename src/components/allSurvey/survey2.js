import React from 'react';
import './allSurvey.css';
import { QuestionSurvey2, SurveyData2 } from './data'

const Survey2 = () => {

  const allData = (id) => {
    console.log(id)
  }
  return (
    <div className='pres21'>
      <div className='pres22'>

        {
          QuestionSurvey2.map((e, id) => {
            return (
              <div key={id}>
                <p>{e.question}</p>
                <div className='radio-list'>
                  {
                    SurveyData2.map((e, id) => {
                      return (
                        <div key={id} onClick={() => allData(id + 1)} className='bolt' htmlFor={e.value}>
                          <input className='radio' type="radio" value={e.value} name="radio" id="radio1" /><b>{e.radio}</b>
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
  )
};
export default Survey2;
