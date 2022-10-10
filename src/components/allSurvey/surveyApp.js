import React, { useState } from 'react'
import Survey from './survey';
import { Surveys } from './data'
import Footer from '../footer/footer';
import Header from '../header/header';
<<<<<<< HEAD
import "./surveyApp.css"
=======
import  './surveyApp.css'
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897

const SurveyApp = () => {

    const [tabActive, setTabActive] = useState(0);
<<<<<<< HEAD

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var monthName = months[date.getMonth()];

    const setTab = (tabId) => {
        setTabActive(tabId + 1)
    }

=======
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var monthName=months[d.getMonth()];
    
    const setTab = (tabId) => {
        setTabActive(tabId + 1)
    }
 
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
    return (
        <div>
            <Header />
<<<<<<< HEAD
            <div className='date-title'>
                <h2><b>{monthName} {(new Date().getFullYear())}</b></h2>
            </div>

=======
            <div className='date'>
               <h2><b>{monthName} {(new Date().getFullYear())}</b></h2>
            </div>
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
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