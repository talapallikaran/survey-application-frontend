import React from 'react';
import './allSurvay.css';
import { QuestionSurvey2, Survey2 } from './data'

const Survay2 = () => {

  const allData = (id) => {
    console.log(id)
  }
  return (
    <div className='pres21'>
      <div className='pres22'>
        
        {
          QuestionSurvey2.map((e) => {
            return (
              <>
                <p>{e.question}</p>
                <div className='radio-list'>
                  {
                    Survey2.map((e,id) => {
                      return (
                        <>
                          <label key={id} onClick={() => allData(id+1)} className='bolt' htmlFor={e.value}> <input className='radio'  type="radio" value={e.value}  name="radio" id="radio1" /><b>{e.radio}</b></label>
                        </>
                      )
                    })
                  }
                </div>
              </>
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
export default Survay2;
