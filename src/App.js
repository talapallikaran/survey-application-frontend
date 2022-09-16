import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Survey from './components/allSurvey/survey';
import Survey2 from './components/allSurvey/survey2';
import Survey3 from './components/allSurvey/survey3';

function App() {
  const [isActive, setIsActive] = useState(1);
  const [showSurvey1, setShowSurvey1] = useState(false);
  const [showSurvey2, setShowSurvey2] = useState(false);
  const [showSurvey3, setShowSurvey3] = useState(false);

  const openSurveyBox = (id) => {
    setIsActive(id)
  }
  const showSurveyData1 = () => {
    setShowSurvey1(!showSurvey1)
  }


  return (
    <div className="App">
      <Header />
      <div>
        <div>
          <div onClick={() => openSurveyBox(1)}>
            <div className='mains20' >
              <div className='mains21'>
                <div className='mains2' style={showSurvey1 ? { backgroundColor: 'green' } : { backgroundColor: 'black' }} >
                  <div className='mains22'>
                    <div className='mains23'>
                      <p className='ps21'><b>✔</b></p>
                      <p className='ps22'><b>Survey1</b></p>
                    </div>
                    <div className='btn22'>
                      {showSurvey1 ?
                        <button className='btn21' onClick={showSurveyData1}><b>saved</b></button> :
                        <button className='btn21' onClick={showSurveyData1} ><b>save</b></button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isActive === 1 && <div className='accordion-content'><Survey/></div>}


          <div onClick={() => openSurveyBox(2)}>
            <div className='mains20' >
              <div className='mains21'>
                <div className='mains2' style={showSurvey2 ? { backgroundColor: 'black' } : { backgroundColor: 'green' }}>
                  <div className='mains22'>
                    <div className='mains23'>
                      <p className='ps21'><b>✔</b></p>
                      <p className='ps22'><b>Survey2</b></p>
                    </div>
                    <div className='btn22'>
                      {showSurvey2 ?
                        <button className='btn21' onClick={() => setShowSurvey2(!showSurvey2)} ><b>save</b></button> :
                        <button className='btn21' onClick={() => setShowSurvey2(!showSurvey2)}><b>saved</b></button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isActive === 2 && <div className='accordion-content'><Survey2 /></div>}

          <div onClick={() => openSurveyBox(3)}>
            <div className='mains20' >
              <div className='mains21'>
                <div className='mains2' style={showSurvey3 ? { backgroundColor: 'black' } : { backgroundColor: 'green' }} >
                  <div className='mains22'>
                    <div className='mains23'>
                      <p className='ps21'><b>✔</b></p>
                      <p className='ps22'><b>Survey1</b></p>
                    </div>
                    <div className='btn22'>
                      {showSurvey3 ?
                        <button className='btn21' onClick={() => setShowSurvey3(!showSurvey3)} ><b>save</b></button> :
                        <button className='btn21' onClick={() => setShowSurvey3(!showSurvey3)}><b>saved</b></button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isActive === 3 && <div className='accordion-content'><Survey3 /></div>}
        </div>
      </div>
      <Footer
      />
    </div>
  );
};
export default App;
