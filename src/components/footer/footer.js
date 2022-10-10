import React from 'react'
import './footer.css'
import '../../global.css'
import { useSelector } from 'react-redux'


const Footer = () => {

  const FinishData = useSelector((state) => state.finish);

  const FinishSubmit = () => {
    console.log(FinishData);
  } 

  return (
    <div className='footer-main'>
      <button className='footer-btn' onClick={() => FinishSubmit()} >Finish</button>
    </div>
  )
}
export default Footer;