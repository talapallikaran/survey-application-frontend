import React from 'react';
import './App.css';
import Footer from './Accordion/footer';
import Header from './Accordion/header';
import { Surveys } from './Accordion/data'
import Survey from './Accordion/accordion';

const App = () => {
  return (
    <div>
      <Header />
      <div className="accordion">
        {
          Surveys.map((surveyData, id) => {
            return (
              <div key={id}>
                <Survey
                  title={surveyData.title}
                  questions={surveyData.questions}
                  uid={id}
                />
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
};

export default App;
