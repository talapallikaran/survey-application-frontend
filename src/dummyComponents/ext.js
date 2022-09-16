import React, { useState } from 'react';
import './App.css';
import Hearder from '../components/header/hearder';
import Footer from '../components/footer/footer';

function App() {
  const [isActive, setIsActive] = useState();

  const openSurveyBox = (id) => {
    //  console.log('id----------',id)
    setIsActive(id)
  }

  return (
    <div className="App">
      <Hearder />
      <div>
        <div className="accordion-item">

          <div onClick={() => openSurveyBox(1)}>Survey 1</div>
          {isActive === 1 ? <div className='accordion-content'>This is survey 1</div> : ''}

          <div  onClick={() => openSurveyBox(2)}>Survey 2</div>
          {isActive === 2 ? <div className='accordion-content'>This is survey 2</div> : ''}

          <div  onClick={() => openSurveyBox(3)}>Survey 3</div>
          {isActive === 3 ? <div className='accordion-content'>This is survey 3</div> : ''}
        </div>
      </div>
      <Footer
      />
    </div>
  );
};
export default App;
