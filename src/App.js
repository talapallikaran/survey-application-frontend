import React, { useState } from 'react';
import Footer from './Accordion/footer';
import Header from './Accordion/header';
import { Surveys } from './Accordion/data'
import Survey from './Accordion/accordion';

const App = () => {

  const [tabActive, setTabActive] = useState(0);

  const setTab = (tabId) => {
    setTabActive(tabId + 1)
  }

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
                  tabId={id}
                  setTab={() => setTab(id)}
                  isActive={tabActive === id}
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
