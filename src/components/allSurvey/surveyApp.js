import React, { useState } from 'react'
import Survey from './survey';
import { Surveys } from './data'
import Footer from '../footer/footer';
import Header from '../header/header';

const SurveyApp = () => {

    const [tabActive, setTabActive] = useState(0);
    const setTab = (tabId) => {
        setTabActive(tabId + 1)
    }


    return (

        <div>
            <Header />
            {
                Surveys && Surveys.length > 0 && Surveys.map((surveyData, id) => {
                    return (
                        <div key={id}>
                            <Survey
                                tabId={id}
                                title={surveyData.title}
                                questions={surveyData.questions}
                                setTab={(id) => setTab(id)}
                                isActive={tabActive === id}
                            />
                        </div>
                    )
                })
            }
            <Footer />
        </div>
    )
}

export default SurveyApp;
