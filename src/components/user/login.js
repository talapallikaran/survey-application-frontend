import React from 'react';
import Header from './headerLogin/header';
import './login.css';

const Login = () => {
    return (
        <>
            <Header />
            <div className='form-container'>
                <div className='login-wrapper'>
                    <h2>Login</h2>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="email" className='input-field' />
                        <label>Password</label>
                        <input type="password" />
                        <a className="reset-link" href='/'>ResetPassword?</a>
                        <button className='login-btn'>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
