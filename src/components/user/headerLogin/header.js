import React from 'react';
import { logo } from '../../Img/Img';
import './header.css';


const Header = () => {

    return (
        <div className='header-main'>
            <div className='header-main-second'>
                <img  className='title-Img'  src={logo} alt = "Hello"/>
                <h2 className='title'>Survey</h2>
            </div>
        </div>
    )
    }

    export default Header;
