import React, { useState } from 'react';
import { answers } from './data';
import Textarea from './review';
import './style.css'
import '../global.css';

const Survey = (props) => {

  const { title, questions, tabId, setTab, isActive } = props;

  const [changeButtonColor, setChangeButtonColor] = useState(false);

  const SurveyData = () => {
    setChangeButtonColor(!changeButtonColor);
  };

  const openSurvey = () => {
    setTab(tabId)
  }

  return (

    <div className='mainDiv'  >
      <div className='Div-Container-1' onClick={() => openSurvey()} >
        <div className='Div-Container-2'>
          <div className='Div-Container-3' style={changeButtonColor ? { backgroundColor: 'green' } : { backgroundColor: 'black' }}  >
            <div className='Div-Container-4'>
              <div className='ClassForTitle' >
                <p className='Title-sign'><b>✔</b></p>
                <p className='TitleName'>{title}</p>
                <div className='button'>
                  <button className='SaveButton' onClick={SurveyData}  ><b>{changeButtonColor ? "Saved" : "Save"}</b></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isActive ?
        <div className='DivContent'>
          <div className='QuestionContent'>
            {
              questions.map((question, id) => {
                return (
                  <div key={id}>
                    <p>{question.question}</p>

                    <div className='AnswerContent'>
                      {
                        answers.map((e, ansId) => {
                          return (
                            <div key={ansId} className={`bolt btn${e.color} `} >
                              <input className="radio" type="radio" />{e.radio}
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

          <Textarea />
        </div>

        : null}

    </div>

  )

}
export default Survey;