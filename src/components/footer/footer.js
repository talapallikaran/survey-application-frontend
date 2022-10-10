import React from 'react'
import './footer.css'
import '../../global.css'
import { useSelector } from 'react-redux'

const Footer = () => {

  const AllData = useSelector((state) => state.data);

  const Submit = () => {
    console.log(AllData);
  }

  return (
    <div className='footer-main'>
      <button className='footer-btn' onClick={() => Submit()} >Finish</button>
    </div>
  )
}
export default Footer;
