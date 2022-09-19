import React,{useState} from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Survey from './components/allSurvey/survey';
import { Surveys } from './components/allSurvey/data'

function App() {

  const [tabActive, setTabActive] = useState(0);
  const setTab = (tabId) => {
    setTabActive(tabId)
  }

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
                    tabId={id}
                    title={surveyData.title}
                    questions={surveyData.questions}
                    uid = {surveyData.id}
                    setTab={() => setTab(id)}
                    isActive={tabActive === id}
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
