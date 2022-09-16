import React, { useState } from 'react';
import './survay2.css';

const Survay2 = (props) => {
  const [show, setShow] = useState(false)
  const [allv, setAllv] = useState([]);

  const [showResults, setShowResults] = useState(false)
  const [showResultsdata, setShowResultsdata] = useState(false)

  const onClickdata = () => setShowResultsdata(true);
  const onClick = () => {setShowResults(true)};

  const [showq1, setShowq1] = useState(false)
  const [showq2, setShowq2] = useState(false)
  const [showq3, setShowq3] = useState(false)
  const [showq4, setShowq4] = useState(false)
  const [showq5, setShowq5] = useState(false)
  const [showq6, setShowq6] = useState(false)
  const [showq7, setShowq7] = useState(false)
  const [showq8, setShowq8] = useState(false)
  const [showq9, setShowq9] = useState(false)
  const [showq10, setShowq10] = useState(false)

  const [showq12, setShowq12] = useState(false)
  const [showq22, setShowq22] = useState(false)
  const [showq32, setShowq32] = useState(false)
  const [showq42, setShowq42] = useState(false)
  const [showq52, setShowq52] = useState(false)
  const [showq62, setShowq62] = useState(false)
  const [showq72, setShowq72] = useState(false)
  const [showq82, setShowq82] = useState(false)
  const [showq92, setShowq92] = useState(false)
  const [showq102, setShowq102] = useState(false)

  const [showq13, setShowq13] = useState(false)
  const [showq23, setShowq23] = useState(false)
  const [showq33, setShowq33] = useState(false)
  const [showq43, setShowq43] = useState(false)
  const [showq53, setShowq53] = useState(false)
  const [showq63, setShowq63] = useState(false)
  const [showq73, setShowq73] = useState(false)
  const [showq83, setShowq83] = useState(false)
  const [showq93, setShowq93] = useState(false)
  const [showq103, setShowq103] = useState(false)

  const [showq14, setShowq14] = useState(false)
  const [showq24, setShowq24] = useState(false)
  const [showq34, setShowq34] = useState(false)
  const [showq44, setShowq44] = useState(false)
  const [showq54, setShowq54] = useState(false)
  const [showq64, setShowq64] = useState(false)
  const [showq74, setShowq74] = useState(false)
  const [showq84, setShowq84] = useState(false)
  const [showq94, setShowq94] = useState(false)
  const [showq104, setShowq104] = useState(false)

  const [showq15, setShowq15] = useState(false)
  const [showq25, setShowq25] = useState(false)
  const [showq35, setShowq35] = useState(false)
  const [showq45, setShowq45] = useState(false)
  const [showq55, setShowq55] = useState(false)
  const [showq65, setShowq65] = useState(false)
  const [showq75, setShowq75] = useState(false)
  const [showq85, setShowq85] = useState(false)
  const [showq95, setShowq95] = useState(false)
  const [showq105, setShowq105] = useState(false)

  const [values, setValues] = useState({
    textarea: '',
  });

  const [textarea, setTextarea] = useState([])
  const [radioSurvay1, setRadioSurvay1] = useState();
  const [radioSurvay2, setRadioSurvay2] = useState();
  const [radioSurvay3, setRadioSurvay3] = useState();
  const [radioSurvay4, setRadioSurvay4] = useState();
  const [radioSurvay5, setRadioSurvay5] = useState();
  const [dataSurvay1, setDataSurvay1] = useState([]);

  const { survay1, survay2, survay3, qs11, qs12, qs13, qs14, qs15, qs21, qs22, qs23, qs24, qs25, qs31, qs32, qs33, qs34, qs35,
    toggle, setToggle, toggle1 } = props;


  const handleChange1 = e => {
    const target = e.target;
    if (target.checked) {
      setRadioSurvay1(target.value);
    }
  };
  const handleChange2 = e => {
    const target = e.target;
    if (target.checked) {
      setRadioSurvay2(target.value);
    }
  };
  const handleChange3 = e => {
    const target = e.target;
    if (target.checked) {
      setRadioSurvay3(target.value);
    }
  };
  const handleChange4 = e => {
    const target = e.target;
    if (target.checked) {
      setRadioSurvay4(target.value);
    }
  };
  const handleChange5 = e => {
    const target = e.target;
    if (target.checked) {
      setRadioSurvay5(target.value);
    }
  };
  const onClick1 = (e) => {
    e.preventDefault();
    const target = e.target;
    if (radioSurvay1 && radioSurvay2 && radioSurvay3 && radioSurvay4 && radioSurvay5 !== target.checked) {
      alert("Done")
      setToggle(false)
      setShowResults(false);
    } else {
      alert("please fill the all data")
      setShow(true)
    }

    setDataSurvay1(() => {
      setAllv([radioSurvay1, radioSurvay2, radioSurvay3, radioSurvay4, radioSurvay5, values.textarea])
      // console.log([radioSurvay1, radioSurvay2, radioSurvay3, radioSurvay4, radioSurvay5, values.textarea]);
    });
    setTextarea(() => {
      return (
        <></>
        /*  console.log([ values.textarea]) */
      )
    })
    setValues({
      textarea: ''
    });
  };
  const handleChange =
    (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    props.data(allv);

  return (

    <div className='mains20' >
      <div className='mains21'>
        <div className='mains2'>
          <div className='mains22'>
            <div className='mains23'>
              <p className='ps21'><b>✔</b></p>
              <p className='ps22'><b>hello</b></p>
              
            </div>
            <div className='btn22'>
              {showResults || toggle || toggle1 ?
                <button className='btn21' onClick={onClick1} disabled={!values.textarea}><b>save</b></button> : <button className='btn21' onClick={onClick}><b>saved</b></button>}
            </div>
          </div>
        </div>
      </div>

      {showResults || toggle || toggle1 ?

        <div className='pres21'>
          <p className='hello'>{show ? "please fill the all data" : ""}</p>
          <div className='pres22'>
            <p>{qs11}</p>
            <p>{qs21}</p>
            <p>{qs31}</p>

            <div className='bolt1'>

              <label className='bolt' style={showq1 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq1(!showq1)} className='radio' type="radio" value="1" checked={radioSurvay1 === '1'} onChange={handleChange1} name="radio" id="radio1" /><b>1</b></label>
              <label className='bolt' style={showq2 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq2(!showq2)} className='radio' type="radio" value="2" checked={radioSurvay1 === '2'} onChange={handleChange1} name="radio" id="radio1" /><b>2</b></label>
              <label className='bolt' style={showq3 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq3(!showq3)} className='radio' type="radio" value="3" checked={radioSurvay1 === '3'} onChange={handleChange1} name="radio" id="radio1" /><b>3</b></label>
              <label className='bolt' style={showq4 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq4(!showq4)} className='radio' type="radio" value="4" checked={radioSurvay1 === '4'} onChange={handleChange1} name="radio" id="radio1" /><b>4</b></label>
              <label className='bolt' style={showq5 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq5(!showq5)} className='radio' type="radio" value="5" checked={radioSurvay1 === '5'} onChange={handleChange1} name="radio" id="radio1" /><b>5</b></label>
              <label className='bolt' style={showq6 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq6(!showq6)} className='radio' type="radio" value="6" checked={radioSurvay1 === '6'} onChange={handleChange1} name="radio" id="radio1" /><b>6</b></label>
              <label className='bolt' style={showq7 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq7(!showq7)} className='radio' type="radio" value="7" checked={radioSurvay1 === '7'} onChange={handleChange1} name="radio" id="radio1" /><b>7</b></label>
              <label className='bolt' style={showq8 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq8(!showq8)} className='radio' type="radio" value="8" checked={radioSurvay1 === '8'} onChange={handleChange1} name="radio" id="radio1" /><b>8</b></label>
              <label className='bolt' style={showq9 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq9(!showq9)} className='radio' type="radio" value="9" checked={radioSurvay1 === '9'} onChange={handleChange1} name="radio" id="radio1" /><b>9</b></label>
              <label className='bolt' style={showq10 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq10(!showq10)} className='radio' type="radio" value="10" checked={radioSurvay1 === '10'} onChange={handleChange1} name="radio" id="radio1" /><b>10</b></label>
            </div>

            <p>{qs12}</p>
            <p>{qs22}</p>
            <p>{qs32}</p>

            <div className='bolt1'>
              <label className='bolt' style={showq12 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq12(!showq12)} className='radio' type="radio" value="1" checked={radioSurvay2 === '1'} onChange={handleChange2} name="radio" id="radio1" /><b>1</b></label>
              <label className='bolt' style={showq22 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq22(!showq22)} className='radio' type="radio" value="2" checked={radioSurvay2 === '2'} onChange={handleChange2} name="radio" id="radio1" /><b>2</b></label>
              <label className='bolt' style={showq32 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq32(!showq32)} className='radio' type="radio" value="3" checked={radioSurvay2 === '3'} onChange={handleChange2} name="radio" id="radio1" /><b>3</b></label>
              <label className='bolt' style={showq42 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq42(!showq42)} className='radio' type="radio" value="4" checked={radioSurvay2 === '4'} onChange={handleChange2} name="radio" id="radio1" /><b>4</b></label>
              <label className='bolt' style={showq52 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq52(!showq52)} className='radio' type="radio" value="5" checked={radioSurvay2 === '5'} onChange={handleChange2} name="radio" id="radio1" /><b>5</b></label>
              <label className='bolt' style={showq62 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq62(!showq62)} className='radio' type="radio" value="6" checked={radioSurvay2 === '6'} onChange={handleChange2} name="radio" id="radio1" /><b>6</b></label>
              <label className='bolt' style={showq72 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq72(!showq72)} className='radio' type="radio" value="7" checked={radioSurvay2 === '7'} onChange={handleChange2} name="radio" id="radio1" /><b>7</b></label>
              <label className='bolt' style={showq82 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq82(!showq82)} className='radio' type="radio" value="8" checked={radioSurvay2 === '8'} onChange={handleChange2} name="radio" id="radio1" /><b>8</b></label>
              <label className='bolt' style={showq92 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq92(!showq92)} className='radio' type="radio" value="9" checked={radioSurvay2 === '9'} onChange={handleChange2} name="radio" id="radio1" /><b>9</b></label>
              <label className='bolt' style={showq102 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq102(!showq102)} className='radio' type="radio" value="10" checked={radioSurvay2 === '10'} onChange={handleChange2} name="radio" id="radio1" /><b>10</b></label>
            </div>

            <p>{qs13}</p>
            <p>{qs23}</p>
            <p>{qs33}</p>

            <div className='bolt1'>
              <label className='bolt' style={showq13 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq13(!showq13)} className='radio' type="radio" value="1" checked={radioSurvay3 === '1'} onChange={handleChange3} name="radio" id="radio1" /><b>1</b></label>
              <label className='bolt' style={showq23 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq23(!showq23)} className='radio' type="radio" value="2" checked={radioSurvay3 === '2'} onChange={handleChange3} name="radio" id="radio1" /><b>2</b></label>
              <label className='bolt' style={showq33 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq33(!showq33)} className='radio' type="radio" value="3" checked={radioSurvay3 === '3'} onChange={handleChange3} name="radio" id="radio1" /><b>3</b></label>
              <label className='bolt' style={showq43 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq43(!showq43)} className='radio' type="radio" value="4" checked={radioSurvay3 === '4'} onChange={handleChange3} name="radio" id="radio1" /><b>4</b></label>
              <label className='bolt' style={showq53 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq53(!showq53)} className='radio' type="radio" value="5" checked={radioSurvay3 === '5'} onChange={handleChange3} name="radio" id="radio1" /><b>5</b></label>
              <label className='bolt' style={showq63 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq63(!showq63)} className='radio' type="radio" value="6" checked={radioSurvay3 === '6'} onChange={handleChange3} name="radio" id="radio1" /><b>6</b></label>
              <label className='bolt' style={showq73 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq73(!showq73)} className='radio' type="radio" value="7" checked={radioSurvay3 === '7'} onChange={handleChange3} name="radio" id="radio1" /><b>7</b></label>
              <label className='bolt' style={showq83 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq83(!showq83)} className='radio' type="radio" value="8" checked={radioSurvay3 === '8'} onChange={handleChange3} name="radio" id="radio1" /><b>8</b></label>
              <label className='bolt' style={showq93 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq93(!showq93)} className='radio' type="radio" value="9" checked={radioSurvay3 === '9'} onChange={handleChange3} name="radio" id="radio1" /><b>9</b></label>
              <label className='bolt' style={showq103 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq103(!showq103)} className='radio' type="radio" value="10" checked={radioSurvay3 === '10'} onChange={handleChange3} name="radio" id="radio1" /><b>10</b></label>
            </div>
            <p>{qs14}</p>
            <p>{qs24}</p>
            <p>{qs34}</p>

            <div className='bolt1'>
              <label className='bolt' style={showq14 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq14(!showq14)} className='radio' type="radio" value="1" checked={radioSurvay4 === '1'} onChange={handleChange4} name="radio" id="radio1" /><b>1</b></label>
              <label className='bolt' style={showq24 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq24(!showq24)} className='radio' type="radio" value="2" checked={radioSurvay4 === '2'} onChange={handleChange4} name="radio" id="radio1" /><b>2</b></label>
              <label className='bolt' style={showq34 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq34(!showq34)} className='radio' type="radio" value="3" checked={radioSurvay4 === '3'} onChange={handleChange4} name="radio" id="radio1" /><b>3</b></label>
              <label className='bolt' style={showq44 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq44(!showq44)} className='radio' type="radio" value="4" checked={radioSurvay4 === '4'} onChange={handleChange4} name="radio" id="radio1" /><b>4</b></label>
              <label className='bolt' style={showq54 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq54(!showq54)} className='radio' type="radio" value="5" checked={radioSurvay4 === '5'} onChange={handleChange4} name="radio" id="radio1" /><b>5</b></label>
              <label className='bolt' style={showq64 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq64(!showq64)} className='radio' type="radio" value="6" checked={radioSurvay4 === '6'} onChange={handleChange4} name="radio" id="radio1" /><b>6</b></label>
              <label className='bolt' style={showq74 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq74(!showq74)} className='radio' type="radio" value="7" checked={radioSurvay4 === '7'} onChange={handleChange4} name="radio" id="radio1" /><b>7</b></label>
              <label className='bolt' style={showq84 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq84(!showq84)} className='radio' type="radio" value="8" checked={radioSurvay4 === '8'} onChange={handleChange4} name="radio" id="radio1" /><b>8</b></label>
              <label className='bolt' style={showq94 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq94(!showq94)} className='radio' type="radio" value="9" checked={radioSurvay4 === '9'} onChange={handleChange4} name="radio" id="radio1" /><b>9</b></label>
              <label className='bolt' style={showq104 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq104(!showq104)} className='radio' type="radio" value="10" checked={radioSurvay4 === '10'} onChange={handleChange4} name="radio" id="radio1" /><b>10</b></label>
            </div>
            <p>{qs15}</p>
            <p>{qs25}</p>
            <p>{qs35}</p>

            <div className='bolt1'>
              <label className='bolt' style={showq15 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq15(!showq15)} className='radio' type="radio" value="1" checked={radioSurvay5 === '1'} onChange={handleChange5} name="radio" id="radio1" /><b>1</b></label>
              <label className='bolt' style={showq25 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq25(!showq25)} className='radio' type="radio" value="1" checked={radioSurvay5 === '2'} onChange={handleChange5} name="radio" id="radio1" /><b>2</b></label>
              <label className='bolt' style={showq35 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq35(!showq35)} className='radio' type="radio" value="1" checked={radioSurvay5 === '3'} onChange={handleChange5} name="radio" id="radio1" /><b>3</b></label>
              <label className='bolt' style={showq45 ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq45(!showq45)} className='radio' type="radio" value="1" checked={radioSurvay5 === '4'} onChange={handleChange5} name="radio" id="radio1" /><b>4</b></label>
              <label className='bolt' style={showq55 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq55(!showq55)} className='radio' type="radio" value="5" checked={radioSurvay5 === '5'} onChange={handleChange5} name="radio" id="radio1" /><b>5</b></label>
              <label className='bolt' style={showq65 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq65(!showq65)} className='radio' type="radio" value="6" checked={radioSurvay5 === '6'} onChange={handleChange5} name="radio" id="radio1" /><b>6</b></label>
              <label className='bolt' style={showq75 ? { backgroundColor: 'rgb(255,140,0)' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq75(!showq75)} className='radio' type="radio" value="7" checked={radioSurvay5 === '7'} onChange={handleChange5} name="radio" id="radio1" /><b>7</b></label>
              <label className='bolt' style={showq85 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq85(!showq85)} className='radio' type="radio" value="8" checked={radioSurvay5 === '8'} onChange={handleChange5} name="radio" id="radio1" /><b>8</b></label>
              <label className='bolt' style={showq95 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq95(!showq95)} className='radio' type="radio" value="9" checked={radioSurvay5 === '9'} onChange={handleChange5} name="radio" id="radio1" /><b>9</b></label>
              <label className='bolt' style={showq105 ? { backgroundColor: 'green' } : { backgroundColor: 'rgba(245, 241, 241, 0.891)' }} htmlFor="radio1"> <input onClick={() => setShowq105(!showq105)} className='radio' type="radio" value="10" checked={radioSurvay5 === '10'} onChange={handleChange5} name="radio" id="radio1" /><b>10</b></label>
            </div>
          </div>
          <p>Your Review</p>
          <textarea className='aria'
            value={values.textarea}
            onChange={handleChange('textarea')}
            name="textarea"
          />
        </div>
        : null}
    </div>
  )
}
export default Survay2;