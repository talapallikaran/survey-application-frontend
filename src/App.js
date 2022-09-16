import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Survey from './components/allSurvey/survey';
import { Surveys } from './components/allSurvey/data'

function App() {

  return (
    <div className="App">
      <Header />
      <div>
        <div>
          {
            Surveys.map((surveyData, id) => {
              return (
                <div key={id}>
                  <Survey
                    title={surveyData.title}
                    questions={surveyData.questions}
                    uid = {id}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer
      />
    </div>
  );
};
export default App;
