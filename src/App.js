import React from 'react';
import Accordion1 from './Accordion/accordion';
import { accordionData } from './Accordion/data';
import Footer from './Accordion/footer';
import Header from './Accordion/header';

const App = () => {
  return (
    <div>
      <Header />
      <div className="accordion">

        {accordionData.map(({ title, content }) => (
          <Accordion1  key={title} title={title} content={content} />  
        ))}
        

      </div>
      <Footer/>
    </div>
  );
};

export default App;
