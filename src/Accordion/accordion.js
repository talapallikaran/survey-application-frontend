import React, { useState } from 'react';
import './style.css'

const Accordion = () => {

  
  const [isActive, setIsActive] = useState(1);

  const openSurveyBox = (id) => {
      setIsActive(id)
    }

  return (
    <div className="accordion-item">

      <div className='survey-1' onClick={() => openSurveyBox(1)}>Survey 1 <button className='buttonforsave'>Save</button></div>
      {isActive === 1 ? 
      <div className='accordion-content'>
          <div className="Servey1" id='tabid1'  >
          <form className="Servey1">
            <p> 1. Survey question number 1? </p><br />
            <div className="input-group1" >
              <div className="inner-block">
                <input id="pickup-11" className="radio-custom input-group-field" value='radioone' name="radio-group11" type="radio" />
                <label htmlFor="pickup-11" className="radio-custom-label">1</label>

              </div>
              <div className="inner-block">
                <input id="pickup-12" className="radio-custom input-group-field" value='radiotwo' name="radio-group11" type="radio" />
                <label htmlFor="pickup-12" className="radio-custom-label">2</label>
              </div>
              <div className="inner-block">
                <input id="pickup-13" className="radio-custom input-group-field" value='radiothree' name="radio-group11" type="radio" />
                <label htmlFor="pickup-13" className="radio-custom-label">3</label>
              </div>
              <div className="inner-block">
                <input id="pickup-14" className="radio-custom input-group-field" value='radiofour' name="radio-group11" type="radio" />
                <label htmlFor="pickup-14" className="radio-custom-label">4</label>
              </div>
              <div className="inner-block">
                <input id="pickup-15" className="radio-custom input-group-field" value='radiofive' name="radio-group11" type="radio" />
                <label htmlFor="pickup-15" className="radio-custom-label">5</label>
              </div>
              <div className="inner-block">
                <input id="pickup-16" className="radio-custom input-group-field" value='radiosix' name="radio-group11" type="radio"/>
                <label htmlFor="pickup-16" className="radio-custom-label">6</label>
              </div>
              <div className="inner-block">
                <input id="pickup-17" className="radio-custom input-group-field" value='radioseven' name="radio-group11" type="radio"/>
                <label htmlFor="pickup-17" className="radio-custom-label">7</label>
              </div>
              <div className="inner-block">
                <input id="pickup-18" className="radio-custom input-group-field" value='radioeight' name="radio-group11" type="radio" />
                <label htmlFor="pickup-18" className="radio-custom-label">8</label>
              </div>
              <div className="inner-block">
                <input id="pickup-19" className="radio-custom input-group-field" value='radionine' name="radio-group11" type="radio" />
                <label htmlFor="pickup-19" className="radio-custom-label">9</label>
              </div>
              <div className="inner-block">
                <input id="pickup-110" className="radio-custom input-group-field" value='radioten' name="radio-group11" type="radio" />
                <label htmlFor="pickup-110" className="radio-custom-label">10</label>
              </div>
            </div><br />

            <p>2. Survey question number 2?</p><br />

            <div className="input-group2">
              <div className="inner-block">
                <input id="pickup-21" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-21" className="radio-custom-label">1</label>
              </div>
              <div className="inner-block">
                <input id="pickup-22" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-22" className="radio-custom-label">2</label>
              </div>
              <div className="inner-block">
                <input id="pickup-23" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-23" className="radio-custom-label">3</label>
              </div>
              <div className="inner-block">
                <input id="pickup-24" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-24" className="radio-custom-label">4</label>
              </div>
              <div className="inner-block">
                <input id="pickup-25" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-25" className="radio-custom-label">5</label>
              </div>
              <div className="inner-block">
                <input id="pickup-26" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-26" className="radio-custom-label">6</label>
              </div>
              <div className="inner-block">
                <input id="pickup-27" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-27" className="radio-custom-label">7</label>
              </div>
              <div className="inner-block">
                <input id="pickup-28" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-28" className="radio-custom-label">8</label>
              </div>
              <div className="inner-block">
                <input id="pickup-29" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-29" className="radio-custom-label">9</label>
              </div>
              <div className="inner-block">
                <input id="pickup-210" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-210" className="radio-custom-label">10</label>
              </div>
            </div><br />

            <p>3. Survey question number 3?</p><br />
            <div className="input-group3">
              <div className="inner-block">
                <input id="pickup-31" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-31" className="radio-custom-label">1</label>
              </div>
              <div className="inner-block">
                <input id="pickup-32" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-32" className="radio-custom-label">2</label>
              </div>
              <div className="inner-block">
                <input id="pickup-33" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-33" className="radio-custom-label">3</label>
              </div>
              <div className="inner-block">
                <input id="pickup-34" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-34" className="radio-custom-label">4</label>
              </div>
              <div className="inner-block">
                <input id="pickup-35" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-35" className="radio-custom-label">5</label>
              </div>
              <div className="inner-block">
                <input id="pickup-36" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-36" className="radio-custom-label">6</label>
              </div>
              <div className="inner-block">
                <input id="pickup-37" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-37" className="radio-custom-label">7</label>
              </div>
              <div className="inner-block">
                <input id="pickup-38" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-38" className="radio-custom-label">8</label>
              </div>
              <div className="inner-block">
                <input id="pickup-39" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-39" className="radio-custom-label">9</label>
              </div>
              <div className="inner-block">
                <input id="pickup-310" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-310" className="radio-custom-label">10</label>
              </div>
            </div><br />

            <p>Your Review</p>
            <textarea className="comment"></textarea>
          </form>
          </div>This is survey 1
      </div>
      : ''}

      <div className='survey-1' onClick={() => openSurveyBox(2)}>Survey 2 <button className='buttonforsave' >Save</button></div>
      {isActive === 2 ? 
      <div className='accordion-content'>
         <div className="Servey2" id='tabid2'  >
          <form className="Servey1">
            <p> 1. Survey question number 1? for servey2</p><br />
            <div className="input-group1" >
              <div className="inner-block">
                <input id="pickup-11" className="radio-custom input-group-field" value='radioone' name="radio-group11" type="radio" />
                <label htmlFor="pickup-11" className="radio-custom-label">1</label>

              </div>
              <div className="inner-block">
                <input id="pickup-12" className="radio-custom input-group-field" value='radiotwo' name="radio-group11" type="radio" />
                <label htmlFor="pickup-12" className="radio-custom-label">2</label>
              </div>
              <div className="inner-block">
                <input id="pickup-13" className="radio-custom input-group-field" value='radiothree' name="radio-group11" type="radio" />
                <label htmlFor="pickup-13" className="radio-custom-label">3</label>
              </div>
              <div className="inner-block">
                <input id="pickup-14" className="radio-custom input-group-field" value='radiofour' name="radio-group11" type="radio" />
                <label htmlFor="pickup-14" className="radio-custom-label">4</label>
              </div>
              <div className="inner-block">
                <input id="pickup-15" className="radio-custom input-group-field" value='radiofive' name="radio-group11" type="radio" />
                <label htmlFor="pickup-15" className="radio-custom-label">5</label>
              </div>
              <div className="inner-block">
                <input id="pickup-16" className="radio-custom input-group-field" value='radiosix' name="radio-group11" type="radio"/>
                <label htmlFor="pickup-16" className="radio-custom-label">6</label>
              </div>
              <div className="inner-block">
                <input id="pickup-17" className="radio-custom input-group-field" value='radioseven' name="radio-group11" type="radio"/>
                <label htmlFor="pickup-17" className="radio-custom-label">7</label>
              </div>
              <div className="inner-block">
                <input id="pickup-18" className="radio-custom input-group-field" value='radioeight' name="radio-group11" type="radio" />
                <label htmlFor="pickup-18" className="radio-custom-label">8</label>
              </div>
              <div className="inner-block">
                <input id="pickup-19" className="radio-custom input-group-field" value='radionine' name="radio-group11" type="radio" />
                <label htmlFor="pickup-19" className="radio-custom-label">9</label>
              </div>
              <div className="inner-block">
                <input id="pickup-110" className="radio-custom input-group-field" value='radioten' name="radio-group11" type="radio" />
                <label htmlFor="pickup-110" className="radio-custom-label">10</label>
              </div>
            </div><br />

            <p>2. Survey question number 2?</p><br />

            <div className="input-group2">
              <div className="inner-block">
                <input id="pickup-21" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-21" className="radio-custom-label">1</label>
              </div>
              <div className="inner-block">
                <input id="pickup-22" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-22" className="radio-custom-label">2</label>
              </div>
              <div className="inner-block">
                <input id="pickup-23" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-23" className="radio-custom-label">3</label>
              </div>
              <div className="inner-block">
                <input id="pickup-24" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-24" className="radio-custom-label">4</label>
              </div>
              <div className="inner-block">
                <input id="pickup-25" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-25" className="radio-custom-label">5</label>
              </div>
              <div className="inner-block">
                <input id="pickup-26" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-26" className="radio-custom-label">6</label>
              </div>
              <div className="inner-block">
                <input id="pickup-27" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-27" className="radio-custom-label">7</label>
              </div>
              <div className="inner-block">
                <input id="pickup-28" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-28" className="radio-custom-label">8</label>
              </div>
              <div className="inner-block">
                <input id="pickup-29" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-29" className="radio-custom-label">9</label>
              </div>
              <div className="inner-block">
                <input id="pickup-210" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-210" className="radio-custom-label">10</label>
              </div>
            </div><br />

            <p>3. Survey question number 3?</p><br />
            <div className="input-group3">
              <div className="inner-block">
                <input id="pickup-31" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-31" className="radio-custom-label">1</label>
              </div>
              <div className="inner-block">
                <input id="pickup-32" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-32" className="radio-custom-label">2</label>
              </div>
              <div className="inner-block">
                <input id="pickup-33" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-33" className="radio-custom-label">3</label>
              </div>
              <div className="inner-block">
                <input id="pickup-34" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-34" className="radio-custom-label">4</label>
              </div>
              <div className="inner-block">
                <input id="pickup-35" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-35" className="radio-custom-label">5</label>
              </div>
              <div className="inner-block">
                <input id="pickup-36" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-36" className="radio-custom-label">6</label>
              </div>
              <div className="inner-block">
                <input id="pickup-37" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-37" className="radio-custom-label">7</label>
              </div>
              <div className="inner-block">
                <input id="pickup-38" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-38" className="radio-custom-label">8</label>
              </div>
              <div className="inner-block">
                <input id="pickup-39" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-39" className="radio-custom-label">9</label>
              </div>
              <div className="inner-block">
                <input id="pickup-310" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-310" className="radio-custom-label">10</label>
              </div>
            </div><br />

            <p>Your Review</p>
            <textarea className="comment"></textarea>
          </form>
          </div> This is survey 2
      </div>
      
       : ''}

      <div className='survey-1' onClick={() => openSurveyBox(3)}>Survey 3 <button className='buttonforsave'>Save</button></div>
      {isActive === 3 ? 
      <div className='accordion-content'>
          <div className="Servey3" id='tabid3'  >
          <form className="Servey1">
            <p> 1. Survey question number 1? for servey3</p><br />
            <div className="input-group1" >
              <div className="inner-block">
                <input id="pickup-11" className="radio-custom input-group-field" value='radioone' name="radio-group11" type="radio" />
                <label htmlFor="pickup-11" className="radio-custom-label">1</label>

              </div>
              <div className="inner-block">
                <input id="pickup-12" className="radio-custom input-group-field" value='radiotwo' name="radio-group11" type="radio" />
                <label htmlFor="pickup-12" className="radio-custom-label">2</label>
              </div>
              <div className="inner-block">
                <input id="pickup-13" className="radio-custom input-group-field" value='radiothree' name="radio-group11" type="radio" />
                <label htmlFor="pickup-13" className="radio-custom-label">3</label>
              </div>
              <div className="inner-block">
                <input id="pickup-14" className="radio-custom input-group-field" value='radiofour' name="radio-group11" type="radio" />
                <label htmlFor="pickup-14" className="radio-custom-label">4</label>
              </div>
              <div className="inner-block">
                <input id="pickup-15" className="radio-custom input-group-field" value='radiofive' name="radio-group11" type="radio" />
                <label htmlFor="pickup-15" className="radio-custom-label">5</label>
              </div>
              <div className="inner-block">
                <input id="pickup-16" className="radio-custom input-group-field" value='radiosix' name="radio-group11" type="radio"/>
                <label htmlFor="pickup-16" className="radio-custom-label">6</label>
              </div>
              <div className="inner-block">
                <input id="pickup-17" className="radio-custom input-group-field" value='radioseven' name="radio-group11" type="radio"/>
                <label htmlFor="pickup-17" className="radio-custom-label">7</label>
              </div>
              <div className="inner-block">
                <input id="pickup-18" className="radio-custom input-group-field" value='radioeight' name="radio-group11" type="radio" />
                <label htmlFor="pickup-18" className="radio-custom-label">8</label>
              </div>
              <div className="inner-block">
                <input id="pickup-19" className="radio-custom input-group-field" value='radionine' name="radio-group11" type="radio" />
                <label htmlFor="pickup-19" className="radio-custom-label">9</label>
              </div>
              <div className="inner-block">
                <input id="pickup-110" className="radio-custom input-group-field" value='radioten' name="radio-group11" type="radio" />
                <label htmlFor="pickup-110" className="radio-custom-label">10</label>
              </div>
            </div><br />

            <p>2. Survey question number 2?</p><br />

            <div className="input-group2">
              <div className="inner-block">
                <input id="pickup-21" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-21" className="radio-custom-label">1</label>
              </div>
              <div className="inner-block">
                <input id="pickup-22" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-22" className="radio-custom-label">2</label>
              </div>
              <div className="inner-block">
                <input id="pickup-23" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-23" className="radio-custom-label">3</label>
              </div>
              <div className="inner-block">
                <input id="pickup-24" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-24" className="radio-custom-label">4</label>
              </div>
              <div className="inner-block">
                <input id="pickup-25" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-25" className="radio-custom-label">5</label>
              </div>
              <div className="inner-block">
                <input id="pickup-26" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-26" className="radio-custom-label">6</label>
              </div>
              <div className="inner-block">
                <input id="pickup-27" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-27" className="radio-custom-label">7</label>
              </div>
              <div className="inner-block">
                <input id="pickup-28" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-28" className="radio-custom-label">8</label>
              </div>
              <div className="inner-block">
                <input id="pickup-29" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-29" className="radio-custom-label">9</label>
              </div>
              <div className="inner-block">
                <input id="pickup-210" className="radio-custom input-group-field" name="radio-group21" type="radio" />
                <label for="pickup-210" className="radio-custom-label">10</label>
              </div>
            </div><br />

            <p>3. Survey question number 3?</p><br />
            <div className="input-group3">
              <div className="inner-block">
                <input id="pickup-31" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-31" className="radio-custom-label">1</label>
              </div>
              <div className="inner-block">
                <input id="pickup-32" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-32" className="radio-custom-label">2</label>
              </div>
              <div className="inner-block">
                <input id="pickup-33" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-33" className="radio-custom-label">3</label>
              </div>
              <div className="inner-block">
                <input id="pickup-34" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-34" className="radio-custom-label">4</label>
              </div>
              <div className="inner-block">
                <input id="pickup-35" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-35" className="radio-custom-label">5</label>
              </div>
              <div className="inner-block">
                <input id="pickup-36" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-36" className="radio-custom-label">6</label>
              </div>
              <div className="inner-block">
                <input id="pickup-37" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-37" className="radio-custom-label">7</label>
              </div>
              <div className="inner-block">
                <input id="pickup-38" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-38" className="radio-custom-label">8</label>
              </div>
              <div className="inner-block">
                <input id="pickup-39" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-39" className="radio-custom-label">9</label>
              </div>
              <div className="inner-block">
                <input id="pickup-310" className="radio-custom input-group-field" name="radio-group31" type="radio" />
                <label for="pickup-310" className="radio-custom-label">10</label>
              </div>
            </div><br />

            <p>Your Review</p>
            <textarea className="comment"></textarea>
          </form>
          </div>
        This is survey 3
        </div>
         : ''}

    </div>

  )
};

export default Accordion;
