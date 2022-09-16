import React, { useState } from 'react';
import './allSurvey.css';
import { QuestionSurvey1, SurveyData1 } from './data'

const Survey = () => {
  const [color1, setColor1] = useState(false);


  const showId = (id) => {

    const weak = [1, 2, 3, 4];

    id = weak ? setColor1(true) : null;

    console.log(id)
  }

  return (
    <div className='pres21'>
      <div className='pres22'>

        {
          QuestionSurvey1.map((e, i) => {
            return (
              <div key={i}>
                <p>{e.question}</p>
                <div className='radio-list'>
                  {
                    SurveyData1.map((e, id) => {
                      return (
                        <div key={id} className='bolt' htmlFor={e.value} onClick={() => showId(id)}
                          style={color1 ? { backgroundColor: `${e.color1}` } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }}>
                          <input className='radio' type="radio" value={e.value} name="radio" id="radio1" /><b>{e.radio}</b>
                        </div>
                      )
                    }
                    )
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
export default Survey;
