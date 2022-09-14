import React from 'react'
import './style.css';

function Footer() {
   
  const mystyle = {
    color : 'white',
    height : 30,
    width : 80,
    backgroundColor: 'green',
    borderRadius : 8,
    borderColor : 'green',
    marginLeft : 1500
}

  return (
    <div className="footer">
        <button style={mystyle}>Finish</button>
    </div>
  )
}

export default Footer
