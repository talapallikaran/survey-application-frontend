import React, { useState } from 'react'
import Survey from './survey';
import { Surveys } from './data'
import Footer from '../footer/footer';
import Header from '../header/header';
import "./surveyApp.css"

const SurveyApp = () => {

    const [tabActive, setTabActive] = useState(0);

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var monthName = months[date.getMonth()];

    const setTab = (tabId) => {
        setTabActive(tabId + 1)
    }

    return (

        <div>
            <Header />
            <div className='date-title'>
                <h2><b>{monthName} {(new Date().getFullYear())}</b></h2>
            </div>

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
