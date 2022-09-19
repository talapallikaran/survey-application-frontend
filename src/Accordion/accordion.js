import { answers } from './data';
import Textarea from './review';
import './style.css'

const Survey = (props) => {

  const { title, questions } = props;

  return (
    <div className='mainDiv' >
        <div className='mainDiv1' >
          <div className='mainDiv2'>
            <div className='mainDiv3' >
              <div className='mainDiv4'>
                <div className='ClassForTitle'>
                      <p className='TitleName'>{title}</p>
                      <div className='button'>
                        <button className='SaveButton' ><b>Save</b></button>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

    </div>

  )

}
export default Survey;